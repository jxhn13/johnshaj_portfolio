import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MiniMe from "./components/mini";
import Hero from "./components/hero";
import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import ProjectSection from "./components/project";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f1a] text-white font-sans flex flex-col">
        <Routes>
          {/* Opening page (/) only MiniMe and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Hero />
                </main>
                <MiniMe />
                <Footer />
              </>
            }
          />


          {/* Home page: Navbar + Hero + MiniMe + Footer */}
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Hero />
                </main>
                <MiniMe />
                <Footer />
              </>
            }
          />

          {/* About page: Navbar + AboutPage + MiniMe + Footer */}
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <AboutPage />
                </main>
                
              </>
            }
          />
          {/* About page: Navbar + AboutPage + MiniMe + Footer */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <ContactPage />
                </main>
                
              </>
            }
          />
          {/* Project */}
          <Route
            path="/projects"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <ProjectSection />
                </main>
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
