import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate("/contact");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center text-gray-100 relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800"
        style={{ zIndex: -2 }}
      />

      {/* Animated subtle grid lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ zIndex: -1 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0 0)"
          >
            <path d="M 40 0 L 0 0 0 40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <animateTransform
          attributeName="patternTransform"
          type="translate"
          from="0 0"
          to="40 40"
          dur="20s"
          repeatCount="indefinite"
        />
      </svg>

      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
  <span style={{ color: "#38bdf8" }}>Hi, I’m</span> <span style={{ color: "#facc15" }}>John</span>
</h1>

      <p className="max-w-xl text-lg mb-8 drop-shadow-md text-gray-300">
        An AI specialist passionate about exploring the wonders of artificial intelligence
        and building smart solutions that make life easier.
      </p>
      <button
        onClick={handleConnectClick}
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-400/40 transition duration-300"
      >
        Let’s Connect
      </button>
    </section>
  );
};

export default Hero;
