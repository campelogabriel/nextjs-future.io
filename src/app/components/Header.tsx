"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Monomaniac_One } from "next/font/google";

const monomaniac = Monomaniac_One({ subsets: ["latin"], weight: "400" });

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className={`flex flex-row items-center justify-center ${monomaniac.className}`}
        >
          <Image
            alt="logo"
            className="-mr-3"
            width={60}
            height={60}
            src={"/img/logo_app.png"}
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
            Future.io
          </h1>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex flex-row gap-4 text-sm pr-4">
          <Link
            href={"/login"}
            className="text-center min-w-20 border-2 transition-all duration-300 hover:text-white font-semibold border-black p-2 rounded flex items-center justify-center hover:bg-black"
          >
            Entrar
          </Link>
          <Link
            href={"/registro"}
            className="text-center min-w-20 border-2 transition-all duration-300 border-blue-700 font-semibold bg-blue-700 text-white p-2 rounded flex items-center justify-center hover:bg-white hover:text-blue-700"
          >
            Registrar
          </Link>
        </nav>

        {/* Botão do menu (visível apenas em telas menores) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-3 mt-4 md:hidden animate-fadeIn">
          <Link
            href={"/login"}
            className="w-full max-w-xs text-center border-2 transition-all duration-300 hover:text-white font-semibold border-black p-2 rounded hover:bg-black"
            onClick={() => setMenuOpen(false)}
          >
            Entrar
          </Link>
          <Link
            href={"/registro"}
            className="w-full max-w-xs text-center border-2 transition-all duration-300 border-blue-700 font-semibold bg-blue-700 text-white p-2 rounded hover:bg-white hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Registrar
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
