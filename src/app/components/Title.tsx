"use client";
import { Monomaniac_One } from "next/font/google";

const monomaniac = Monomaniac_One({ subsets: ["latin"], weight: "400" });

function Title() {
  return (
    <div
      className={`bg-gray-100 border border-gray-300 p-8 opacity-95 shadow rounded-4xl absolute flex flex-col gap-1.5 font-semibold  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 ${monomaniac.className}`}
      suppressHydrationWarning
    >
      <span className="text-blue-700 text-center text-5xl">
        Veja seu futuro aqui
      </span>
      <span
        className={`${monomaniac.className} text-black text-center text-3xl`}
      >
        Envie sua foto
      </span>
      <span className="absolute -top-2 left-1/2 -translate-1/2 text-5xl">
        📷
      </span>
    </div>
  );
}

export default Title;
