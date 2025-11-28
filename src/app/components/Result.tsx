"use client";

import Image from "next/image";
import handleDownload from "../utils/handleDownload";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function Result() {
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div className="absolute z-50 rounded-2xl border flex flex-col gap-8 justify-center items-center border-gray-200 shadow  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-white">
      <text className="text-2xl italic text-black font-bold">
        💥 Imagem gerada com sucesso! 💥
      </text>
      <span
        onClick={() => {}}
        className="bg-white p-0.5 border rounded-sm hover:cursor-pointer absolute top-3 right-4.5 shadow z-20"
      >
        ❌
      </span>
      <Image
        width={200}
        height={200}
        ref={contentRef}
        alt="result"
        src={"/img/photo.jpg"}
        className=" max-w-60 max-h-60 shadow border rounded"
      />
      <div className="flex flex-row gap-6">
        <button
          onClick={() => handleDownload()}
          className="bg-blue-700 border border-blue-700 hover:cursor-pointer hover:bg-white hover:text-blue-700 transition-all hover:scale-120 text-white font-bold p-1 px-2 justify-center items-center flex rounded shadow"
        >
          Download
        </button>
        <button
          onClick={handlePrint}
          className="bg-black border border-black hover:cursor-pointer hover:bg-white hover:text-black transition-all hover:scale-120 text-white font-bold p-1 px-2 justify-center items-center flex rounded shadow"
        >
          Imprimir
        </button>
        <button className="bg-gray-50 border hover:cursor-pointer hover:bg-blue-700 hover:text-white transition-all hover:scale-120 text-blue-700 font-bold p-1 px-2 justify-center items-center flex rounded shadow">
          Compartilhe
        </button>
      </div>
    </div>
  );
}

export default Result;
