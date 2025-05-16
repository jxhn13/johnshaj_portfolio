import os
import re
from flask import Blueprint, request, jsonify
import fitz  # PyMuPDF
import cohere
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct

chat_bp = Blueprint('chat', __name__)

# Environment variables and setup
COHERE_API_KEY ="kL3DIInqLzXHx797G7iUy6tdH55ficFfXfmFG1TR" # Ensure this is set in your environment
if not COHERE_API_KEY:
    raise ValueError("COHERE_API_KEY environment variable is not set")

co = cohere.Client(COHERE_API_KEY)

RESUME_PDF_PATH = r"routes/john13 (1).pdf"  # Use raw string or forward slash
client = QdrantClient(path=":memory:")  # In-memory local Qdrant
collection_name = "resume_collection"

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        full_text = ""
        for page in doc:
            full_text += page.get_text()
        doc.close()
        return re.sub(r'\s+', ' ', full_text).strip()
    except Exception as e:
        raise ValueError(f"Failed to extract text from PDF: {e}")

# Function to chunk text
def chunk_text(text, max_chars=1000):
    sentences = re.split(r'(?<=[.?!])\s+', text)
    chunks = []
    current_chunk = ""
    for sentence in sentences:
        if len(current_chunk) + len(sentence) <= max_chars:
            current_chunk += " " + sentence
        else:
            chunks.append(current_chunk.strip())
            current_chunk = sentence
    if current_chunk.strip():
        chunks.append(current_chunk.strip())
    return chunks

# Function to generate embeddings for chunks
def generate_embeddings(chunks):
    try:
        response = co.embed(
            texts=chunks,
            model="embed-english-v2.0",
            input_type="search_document",  # Correct input_type for document embeddings
            embedding_types=["float"]
        )
        return response.embeddings.float  # Access embeddings correctly
    except Exception as e:
        raise ValueError(f"Failed to generate embeddings: {e}")


# Initialize Qdrant collection
def initialize_qdrant_collection(client, collection_name, vectors):
    existing_collections = [col.name for col in client.get_collections().collections]
    if collection_name not in existing_collections:
        print(f"Creating collection '{collection_name}'...")
        client.create_collection(
            collection_name=collection_name,
            vectors_config=VectorParams(size=len(vectors[0]), distance=Distance.COSINE),
        )
    else:
        print(f"Collection '{collection_name}' already exists.")

# Upsert points into Qdrant
def upsert_points(client, collection_name, chunks, vectors):
    points = [
        PointStruct(id=idx, vector=vector, payload={"text": chunk})
        for idx, (chunk, vector) in enumerate(zip(chunks, vectors))
    ]
    client.upsert(collection_name=collection_name, points=points)

# Main initialization
def initialize():
    try:
        full_text = extract_text_from_pdf(RESUME_PDF_PATH)
        chunks = chunk_text(full_text)
        vectors = generate_embeddings(chunks)
        
        if not vectors:
            raise ValueError("Failed to generate embeddings for resume text")
        
        initialize_qdrant_collection(client, collection_name, vectors)
        upsert_points(client, collection_name, chunks, vectors)
        print("Initialization complete.")
    except Exception as e:
        print(f"Initialization failed: {e}")

# Initialize the system
initialize()

# Chat endpoint
@chat_bp.route("/chat", methods=['OPTIONS', 'POST'])
def chat():
    if request.method == 'OPTIONS':
        return jsonify({"status": "OK"}), 200  # Handle preflight OPTIONS request

    data = request.get_json() or {}
    query = data.get("query", "").strip()
    
    if not query:
        return jsonify({"error": "No query provided"}), 400

    try:
        # Embed query
        query_embed_response = co.embed(
            texts=[query],
            model="embed-english-v2.0",
            input_type="search_query",  # Correct input_type for query embeddings
            embedding_types=["float"]
        )
        query_embed = query_embed_response.embeddings.float[0]
  # Access the first embedding

        # Search top 3 chunks
        search_results = client.search(
            collection_name=collection_name,
            query_vector=query_embed,
            limit=3
        )

        context = " ".join([hit.payload["text"] for hit in search_results])

        # Generate answer using Cohere chat
        response = co.chat(
            model="command",
            message=f"Context:\n{context}\n\nQuestion: {query}\nAnswer: in one or two sentence act like a assistant",
            max_tokens=150,
            temperature=0.5,
        )

        answer = response.text.strip()
        return jsonify({"answer": answer})

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500