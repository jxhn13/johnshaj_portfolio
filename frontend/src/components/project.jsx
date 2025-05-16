const projects = [
  {
    title: "AI-Desc Generator",
    description:
      "Uses machine learning models to automatically generate concise descriptions for various inputs, improving content creation efficiency.",
    tech: ["React", "Node.js", "Python", "LLM Models"],
    codeUrl: "https://github.com/jxhn13/AI-Description-Generator.git",
  },
  {
  "title": "AI-powered RAG Chatbot",
  "description": "Enables users to upload documents and interact with them using natural language queries. Utilizes Retrieval-Augmented Generation (RAG) by combining LLMs with vector database retrieval for accurate, context-aware answers from user-provided documents.",
  "tech": ["React", "Flask", "Python", "LLM Models", "Pinecone", "Streamlit"],
  "codeUrl": "https://github.com/jxhn13/airag.git"
}
,
  {
  "title": "AI Resume Ranking System",
  "description": "Ranks uploaded resumes by comparing extracted skills against a given job description (JD). Uses NLP techniques and keyword matching to evaluate relevance and sort candidates effectively.",
  "tech": ["Python", "Flask", "NLP", "Scikit-learn", "Spacy"],
  "codeUrl": "https://github.com/jxhn13/Resume_QABOT.git"
}
,
  {
  "title": "Retail Data Analysis and Insight Generation",
  "description": "Performs in-depth analysis of retail datasets to uncover sales trends, customer behavior patterns, and inventory insights. Uses Pandas and NumPy for EDA, and applies machine learning models to predict sales and extract actionable business intelligence. Also generates question patterns for interactive querying.",
  "tech": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
  "codeUrl": "https://github.com/jxhn13/Retail-Data-Analysis.git"
}
,
  {
    title: "AI-Desc Generator",
    description:
      "Uses machine learning models to automatically generate concise descriptions for various inputs, improving content creation efficiency.",
    tech: ["React", "Node.js", "Python", "LLM Models"],
    codeUrl: "https://github.com/jxhn13/AI-Description-Generator.git",
  }
];

export default function ProjectSection() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#0d1117",
        color: "#e0e0e0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          marginBottom: "60px",
          fontWeight: "800",
          background: "linear-gradient(90deg, #0af, #4f46e5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map(({ title, description, tech, codeUrl }, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 8px 30px rgba(0, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 12px 36px rgba(0, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(0, 255, 255, 0.08)";
            }}
          >
            <h3
              style={{
                marginTop: 0,
                fontSize: "1.7rem",
                fontWeight: "700",
                background: "linear-gradient(90deg, #0af, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#cbd5e1",
                marginBottom: "18px",
              }}
            >
              {description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    background: "linear-gradient(90deg, #0af, #4f46e5)",
                    color: "#0d1117",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    cursor: "default",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                textAlign: "center",
                background: "#0af",
                color: "#0d1117",
                padding: "12px 20px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                boxShadow: "0 0 12px #0af",
                transition: "background-color 0.3s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0499e0";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0af";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
