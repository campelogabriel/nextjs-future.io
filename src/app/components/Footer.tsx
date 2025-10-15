import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Footer() {
  return (
    <div className="bg-black p-4 flex flex-row gap-4 justify-center items-center absolute z-50 bottom-0 left-0 w-full">
      <h1 className={`${inter.className}`}>
        © 2025 Gabriel Campelo. Todos os direitos reservados.
      </h1>
    </div>
  );
}

export default Footer;
