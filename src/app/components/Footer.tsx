import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Footer({ position }) {
  return (
    <div
      className={`bg-black text-white p-4 flex flex-row gap-4 justify-center items-center  z-50 bottom-0 left-0 w-full ${
        position ? "absolute" : "static"
      }`}
    >
      <h1 className={`${inter.className}`}>
        © 2025 Gabriel Campelo. Todos os direitos reservados.
      </h1>
    </div>
  );
}

export default Footer;
