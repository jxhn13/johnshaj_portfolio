// HomePage.jsx
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MiniMe from "./components/mini";
import Footer from "./components/footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <MiniMe />
      <Footer />
    </div>
  );
}

export default HomePage;
