"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

function MenuDiv() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-50 top-6">
      <button
        className="md:hidden p-2 rounded focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
}

export default MenuDiv;
