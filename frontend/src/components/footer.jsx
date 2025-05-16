import React from "react";

export default function Footer() {
   return (
    <footer className="bg-[#0f0f1a] text-gray-400 text-sm pt-6 pb-4 mt-12 flex flex-col items-center">
      {/* Social Icons */}
      <div className="flex gap-10 mb-6">
        {/* GitHub */}
        <a
          href="https://github.com/jxhn13"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors px-2"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="..." />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/john-shajan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors px-2"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/john.shjn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition-colors px-2"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:johnshajan77@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-colors px-2"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-gray-700 my-4"></div>

      {/* Copyright */}
      <div>
        &copy; {new Date().getFullYear()} John Shajan. All rights reserved.
      </div>
    </footer>
  );
   
}
