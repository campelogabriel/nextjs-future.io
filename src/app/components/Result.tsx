"use client";

import handleDownload from "../utils/handleDownload";

function Result() {
  return (
    <div className="absolute z-50 rounded-3xl border flex flex-col gap-8 justify-center items-center border-gray-200 shadow  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-white">
      <text className="text-2xl italic text-black font-bold">
        💥 Imagem gerada com sucesso! 💥
      </text>
      <img
        src={"photo.jpg"}
        className=" max-w-60 max-h-60 shadow border rounded "
      />
      <div className="flex flex-row gap-6">
        <button
          onClick={
            () => handleDownload()
            //função de download aqui
          }
          className="bg-blue-700 border border-blue-700 hover:cursor-pointer hover:bg-white hover:text-blue-700 transition-all hover:scale-120 text-white font-bold p-1 px-2 justify-center items-center flex rounded shadow"
        >
          Download
        </button>
        <button className="bg-gray-50 border hover:cursor-pointer hover:bg-blue-700 hover:text-white transition-all hover:scale-120 text-blue-700 font-bold p-1 px-2 justify-center items-center flex rounded shadow">
          Compartilhe
        </button>
      </div>
    </div>
  );
}

export default Result;
