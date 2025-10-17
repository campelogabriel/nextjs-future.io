"use client";
import { Monomaniac_One } from "next/font/google";
import { useRef, useState } from "react";

const monomaniac = Monomaniac_One({ subsets: ["latin"], weight: "400" });

function Title() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [job, setJob] = useState("");
  const [error, setError] = useState<boolean>(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Criar URL para preview
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      console.log("Arquivo selecionado:", file);
    }
  };

  return (
    <>
      <label>Teste</label>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {selectedImage ? (
        <div
          className={`bg-gray-100 border border-gray-300 p-8 opacity-100 shadow rounded-4xl absolute flex flex-col gap-1.5 font-semibold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 ${monomaniac.className}`}
        >
          <div className="relative">
            <img
              draggable={false}
              src={selectedImage}
              alt="Preview"
              className="shadow w-32 h-32 object-cover mx-auto rounded-lg"
            />
            <span
              onClick={() => {
                setSelectedImage(null);
                setJob("");
              }}
              className="bg-gray-100 p-0.5 border rounded-sm hover:cursor-pointer absolute -top-3 right-4.5 shadow z-20"
            >
              ❌
            </span>
          </div>

          <p className="text-black text-center">Digite sua carreira</p>
          {error && (
            <p className="text-red-500 text-sm text-center">Campo em branco</p>
          )}
          <input
            className={`border-2 ${
              error && "input_shake"
            } border-gray-700 text-gray-900 p-0.5 text-center `}
            type="text"
            value={job}
            onFocus={() => setError(false)}
            onChange={(e) => setJob(e.target.value)}
          />

          <span
            onClick={handleClick}
            className="text-blue-700 text-center text-xl mt-2 hover:cursor-pointer hover:underline"
          >
            Clique para alterar a foto
          </span>
          <span
            onClick={() => {
              if (!job) setError(true);
            }}
            className="text-gray-900 text-center text-xl mt-2 hover:cursor-pointer hover:underline"
          >
            Enviar foto <span>📷</span>
          </span>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className={`bg-gray-100 border hover:cursor-pointer hover:opacity-100 hover:duration-1000 hover:transition-all border-gray-300 p-8 opacity-90 shadow rounded-4xl absolute flex flex-col gap-1.5 font-semibold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 ${monomaniac.className}`}
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
      )}
    </>
  );
}

export default Title;
