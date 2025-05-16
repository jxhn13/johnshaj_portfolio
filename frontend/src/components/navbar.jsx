import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Contact"];

    return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-700 via-blue-600 to-blue-500 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-semibold text-xl tracking-wide">🤖</div>
        <ul className="flex space-x-6 text-white font-medium">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative group"
            >
              <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-colors duration-300">
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
