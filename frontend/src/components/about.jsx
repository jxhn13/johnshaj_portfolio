import React from "react";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <span style={styles.aboutText}>About</span>{" "}
        <span style={styles.johnText}>John</span>
      </h1>
      
      <p style={styles.paragraph}>
        I’m <span style={styles.highlight}>John</span>, an AI practitioner and Jr. Software Engineer at Zealogics IT Solutions with expertise in 
        predictive modeling, Generative AI including <b style={styles.tech}>RAG (Retrieval-Augmented Generation)</b>, large language models, and scalable data solutions. I specialize in building intelligent systems using{" "}
        <b style={styles.tech}>Python</b>, <b style={styles.tech}>FastAPI</b>, <b style={styles.tech}>Flask</b>, <b style={styles.tech}>Streamlit</b>, <b style={styles.tech}>MinIO</b>, and <b style={styles.tech}>Gemini</b> APIs.
      </p>

      <p style={styles.paragraph}>
        I have hands-on experience with machine learning frameworks like <b style={styles.tech}>TensorFlow</b>, <b style={styles.tech}>Scikit-learn</b>, and tools like <b style={styles.tech}>LlamaIndex</b>, <b style={styles.tech}>Qdrant</b>, and <b style={styles.tech}>Pinecone</b> for document intelligence and AI-powered applications.
      </p>

      <p style={styles.paragraph}>Some of the projects I’ve worked on include:</p>
      <ul style={styles.list}>
        <li>📄 Real-time Document QA Assistant with file upload and chat interface using LlamaIndex, Qdrant, and Streamlit + Flask</li>
        <li>🖼 AI-powered PowerPoint Generator with customizable themes and content control</li>
        <li>📊 Streamlit application for analyzing tables in documents with OpenAI embeddings</li>
        <li>🤖 HR GenAI agents leveraging Flowise and LangChain to automate internal workflows and document generation</li>
      </ul>

      <p style={styles.paragraph}>
        I’m passionate about combining backend AI capabilities with seamless frontend experiences to deliver impactful, production-ready solutions.
      </p>

      <div style={styles.skills}>
        <h3 style={styles.skillsHeading}>Skills & Tools</h3>
        <p style={styles.skillsText}>
          Python, TensorFlow, Scikit-learn, FastAPI, Flask, React, Streamlit, Gemini API, Cohere, Pinecone, Qdrant, MinIO, Flowise, LangChain, Docker
        </p>
      </div>

      <div style={styles.skills}>
        <h3 style={styles.skillsHeading}>Education & Certification</h3>
        <p style={styles.skillsText}>
          B.Tech in Computer Science, Sahrdaya College of Engineering & Technology (CGPA 8.2)<br />
          IBM Certified: Machine Learning with Python (Coursera)<br />
          Prompt Engineering - Dubai 1 Million Prompters Initiative
        </p>
      </div>
      <div style={styles.downloadSection}>
  <a href="public\john13.pdf" download style={styles.downloadButton}>
    📄 Download Resume
  </a>
</div>

    </div>
    
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    background: "absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800",
    color: "#d1d5db",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "70px 80px",
  },
  heading: {
    fontSize: "3.2rem",
    fontWeight: "700",
    marginBottom: "40px",
    display: "flex",
    gap: "0.5rem",
  },
  aboutText: {
    color: "#38bdf8",
  },
  johnText: {
    color: "#facc15",
  },
  paragraph: {
    fontSize: "1.15rem",
    lineHeight: 1.6,
    marginBottom: "25px",
    maxWidth: "1200px",
  },
  highlight: {
    color: "#fbbf24",
    fontWeight: "600",
  },
  tech: {
    color: "#60a5fa",
    fontWeight: "600",
  },
  list: {
    paddingLeft: "1.25rem",
    marginBottom: "25px",
    fontSize: "1.1rem",
    color: "#93c5fd",
    lineHeight: 1.5,
    maxWidth: "900px",
  },
  skills: {
    marginTop: "50px",
    maxWidth: "900px",
  },
  skillsHeading: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#38bdf8",
  },
  skillsText: {
    fontSize: "1.1rem",
    lineHeight: 1.5,
  },
  downloadSection: {
  marginTop: "40px",
},

downloadButton: {
  display: "inline-block",
  backgroundColor: "#38bdf8",
  color: "#0f172a",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1rem",
  transition: "background 0.3s ease",
},

};

export default AboutPage;
