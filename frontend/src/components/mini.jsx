import { useState } from "react";

const predefinedPrompts = [
  "Summarize this resume",
  "What are the strengths of this candidate?",
  "List the skills from this resume",
  "Is this candidate suitable for a software developer role?",
];

export default function LouRobot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const clearChat = () => {
  setMessages([]); // If you're using useState
};
const [input, setInput] = useState("");
const [selectedPrompt, setSelectedPrompt] = useState("");

const API_BASE_URL = "https://johnshaj-portfolio-5.onrender.com";


  const handleRobotClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
      setChatOpen((prev) => !prev);
    }, 800);
  };
  const handleSend = async (input) => {
  if (!input.trim()) return;

  setMessages((prev) => [...prev, { role: "user", text: input }]);
  setIsListening(true);

  try {
    const res = await fetch(`${API_BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { role: "bot", text: data.answer }]);
  } catch (err) {
    setMessages((prev) => [...prev, { role: "bot", text: "⚠️ Failed to connect to backend." }]);
    console.error("API error:", err);
  }

  setIsListening(false);
};



  return (
    <>
      {/* Robot avatar bottom-left */}
      <div
        onClick={handleRobotClick}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          width: 90,
          height: 110,
          cursor: "pointer",
          userSelect: "none",
          zIndex: 1000,
          animation: isJumping ? "jump 0.8s ease" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
        aria-label="Lou the robot assistant"
        title="Click to chat with Lou"
      >
        {/* Robot SVG */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  width="90"
  height="90"
  style={{ overflow: "visible" }}
>
  {/* Body */}
  <rect
    x="18"
    y="20"
    width="28"
    height="38"
    rx="6"
    ry="6"
    fill="#475569"
    style={{ animation: isListening ? "breath 2s infinite ease-in-out" : "none" }}
  />

  {/* Head */}
  <rect x="22" y="6" width="20" height="16" rx="4" ry="4" fill="#60a5fa" />

  {/* Eyes */}
  <circle
    cx="30"
    cy="16"
    r="3"
    fill="#1e3a8a"
    style={{
      filter: isListening
        ? "drop-shadow(0 0 6px #60a5fa)"
        : "drop-shadow(0 0 4px #3b82f6)",
      animation: "blink 3s infinite ease-in-out",
    }}
  />
  <circle
    cx="38"
    cy="16"
    r="3"
    fill="#1e3a8a"
    style={{
      filter: isListening
        ? "drop-shadow(0 0 6px #60a5fa)"
        : "drop-shadow(0 0 4px #3b82f6)",
      animation: "blink 3s infinite ease-in-out",
    }}
  />

  {/* Mouth */}
  <rect x="28" y="26" width="8" height="3" rx="1.5" ry="1.5" fill="#2563eb" />

  {/* Antenna */}
  <line x1="32" y1="2" x2="32" y2="6" stroke="#2563eb" strokeWidth="2" />
  <circle
    cx="32"
    cy="2"
    r="2"
    fill="#f87171"
    style={{
      animation: isListening ? "pulse 1s infinite ease-in-out" : "blink 3s infinite ease-in-out",
      filter: "drop-shadow(0 0 5px #f87171)",
    }}
  />

  {/* Waving arm */}
  <line
    x1="18"
    y1="30"
    x2="8"
    y2="20"
    stroke="#2563eb"
    strokeWidth="4"
    style={{
      transformOrigin: "8px 20px",
      animation: "wave-arm 2s infinite ease-in-out",
      filter: "drop-shadow(0 0 5px #3b82f6)",
    }}
  />

  {/* Other arm */}
  <line x1="46" y1="30" x2="56" y2="40" stroke="#475569" strokeWidth="4" />

  {/* Feet */}
  <rect x="22" y="56" width="8" height="8" fill="#2563eb" rx="2" ry="2" />
  <rect x="34" y="56" width="8" height="8" fill="#2563eb" rx="2" ry="2" />
</svg>


        <small style={{ userSelect: "none", color: "#495057" }}>Lou</small>
      </div>

      {/* Chat window */}
      {chatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 350,
            height: 460,
            background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
            borderRadius: 16,
            boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            color: "#e0e7ff",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            zIndex: 1100,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <h2 style={{ margin: 0, fontSize: "1.8rem", fontFamily: "'Orbitron', sans-serif", fontWeight: "700", letterSpacing: "1.5px" }}>
  <span style={{ color: "#077bff", textShadow: "0 0 4px #077bff" }}>Lou</span>{" "}
  <span style={{ color: "#cca800", textShadow: "0 0 4px #cca800" }}>Assistant</span>
</h2>


            <button
              onClick={() => setChatOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#c7d2fe",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#facc15")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c7d2fe")}
            >
              ✖
            </button>
          </div>

          <div
  style={{
    flexGrow: 1,
    overflowY: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  }}
>
  {(() => {
  const pairs = [];
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].role === "user" && messages[i + 1]?.role === "bot") {
      pairs.push([messages[i], messages[i + 1]]);
      i++;
    }
  }

  return (
    <div>
      {pairs.map(([userMsg, botMsg], idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "16px",
            padding: "14px",
            borderRadius: "10px",
            backgroundColor: "#1e293b",
            color: "#f1f5f9",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p style={{ margin: "4px 0", fontWeight: "bold", color: "#facc15" }}>
            You: {userMsg.text}
          </p>
          <p
            style={{
              margin: "6px 0 0 0",
              fontSize: "1.05rem",
              color: "#e0f2fe",
              fontWeight: "500",
            }}
          >
            Lou: {botMsg.text}
          </p>
        </div>
      ))}

      
    </div>
  );
})()}

</div>


          <input
            type="text"
            value={inputValue}
            placeholder="QUERIES RELATED JOHN  ? ASK LOU.. "
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend(inputValue);
                setInputValue("");
              }
            }}
            style={{
              borderRadius: 12,
              border: "none",
              padding: "10px 14px",
              fontSize: "1rem",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#222222",
              boxShadow: "0 0 8px rgba(255,255,255,0.3)",
              outline: "none",
            }}
          />
          {/* Clear Chat Button */}
<button
  onClick={clearChat}
  style={{
    marginTop: "12px",
    padding: "10px 20px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#ef4444",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#dc2626";
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#ef4444";
    e.target.style.transform = "scale(1)";
  }}
>
  🧹 Clear Chat
</button>
        </div>
      )}

      <style>{`
         @keyframes jump {
    0% { transform: translateY(0); }
    30% { transform: translateY(-25px); }
    60% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.1; }
  }

  @keyframes pulse {
    0% { r: 2; opacity: 1; }
    50% { r: 3.5; opacity: 0.6; }
    100% { r: 2; opacity: 1; }
  }

  @keyframes breath {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
  }

  @keyframes wave-arm {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(-15deg); }
  }

      `}</style>
    </>
  );
}
