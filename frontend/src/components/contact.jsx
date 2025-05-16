import React, { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Failed to send", error);
      alert("Failed to send message.");
    }

    setSending(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <span style={styles.contactText}>Contact</span>{" "}
        <span style={styles.johnText}>John</span>
      </h1>

      <p style={styles.paragraph}>
        Feel free to reach out for collaborations, questions, or project ideas.
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          required
          disabled={sending}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          required
          disabled={sending}
        />
        <textarea
          placeholder="Your Message"
          rows={6}
          style={styles.textarea}
          required
          disabled={sending}
        />
        <button
          type="submit"
          disabled={sending}
          style={{
            ...styles.button,
            backgroundColor: sending
              ? "#1e40af" // darker blue when sending
              : submitted
              ? "#16a34a" // green when sent
              : "#38bdf8",
            cursor: sending ? "not-allowed" : "pointer",
            transform: sending ? "scale(0.98)" : "scale(1)",
            boxShadow: sending
              ? "inset 2px 2px 5px rgba(0,0,0,0.5)"
              : "none",
            transition: "background-color 0.3s ease, transform 0.1s ease",
          }}
        >
          {sending ? "Sending..." : submitted ? "✅ Sent!" : "Send Message"}
        </button>
        {submitted && (
          <p style={styles.success}>Thank you! I’ll get back to you soon 🚀</p>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    background: "absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800",
    color: "#d1d5db",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "60px 80px",
  },
  heading: {
    fontSize: "3.2rem",
    fontWeight: "700",
    marginBottom: "40px",
    display: "flex",
    gap: "0.5rem",
  },
  contactText: {
    color: "#38bdf8",
  },
  johnText: {
    color: "#facc15",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    maxWidth: "800px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "600px",
  },
  input: {
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #475569",
    backgroundColor: "#1e293b",
    color: "#f8fafc",
  },
  textarea: {
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #475569",
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    resize: "vertical",
  },
  button: {
    padding: "15px",
    fontSize: "1.1rem",
    backgroundColor: "#38bdf8",
    color: "#0f172a",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.3s ease",
  },
  success: {
    color: "#4ade80",
    fontSize: "1rem",
    marginTop: "10px",
    fontWeight: "500",
  },
};

export default ContactPage;
