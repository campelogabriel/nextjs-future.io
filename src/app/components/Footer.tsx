"use client";

import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Footer({ position }) {
  const [date, setData] = useState<Date>(new Date());
  return (
    <div
      className={`bg-black text-white p-4 flex flex-row gap-4 justify-center items-center z-50 bottom-0 left-0 w-full ${
        position ? "absolute" : "static"
      }`}
    >
      <h1 className={`${inter.className} text-xs xs:text-sm sm:text-lg`}>
        © {date.getFullYear()} Gabriel Campelo. Todos os direitos reservados.
      </h1>
    </div>
  );
}

export default Footer;
