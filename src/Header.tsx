import React from "react";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          Hangman
        </a>
        <button className="md:hidden focus:outline-none">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 14a1 1 0 110-2h8a1 1 0 110 2h-8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/paradimes"
                className="hover:text-gray-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anas-mohmand-2202b8172/"
                className="hover:text-gray-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
