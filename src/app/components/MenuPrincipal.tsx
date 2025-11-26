"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const MenuPrincipal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
            isMenuOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md border border-gray-50  transform transition-all duration-200 ease-out  animate-fade-in z-50">
          <Link
            href={"/perfil"}
            className="w-full flex hover:cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-blue-50 focus:text-blue-600"
          >
            Perfil
          </Link>
          <Link
            href={"/"}
            className="w-full flex hover:cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-blue-50 focus:text-blue-600"
          >
            Configurações
          </Link>
          <Link
            href={"/"}
            className="w-full flex hover:cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-blue-50 focus:text-blue-600"
          >
            Privacidade
          </Link>

          <div className="border-t border-gray-100 "></div>

          <button
            onClick={() => console.log("Sair")}
            className="w-full text-left hover:cursor-pointer px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 rounded-b-lg focus:outline-none focus:bg-red-50"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPrincipal;
