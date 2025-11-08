import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

function page() {
  return (
    <div className="bg-white flex flex-col justify-between w-screen h-screen text-black">
      <Header />
      <div className="flex justify-center flex-1 items-center gap-2">
        <div className="text-[180px] font-extrabold text-gray-200 ">
          <div className="flex items-center justify-center flex-row gap-2">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
          <div className="text-sm text-gray-800 font-medium flex items-center  justify-center flex-col gap-4">
            <h1 className="font-extrabold text-3xl">Opa... Endereço errado!</h1>
            <p>
              Clique no botão de Home, e você será redirecionado para a página
              inicial.
            </p>
            <Link
              href={"/"}
              className="bg-black text-sm text-white rounded px-4 py-2 font-bold text-center hover:bg-white hover:text-black border transition-all duration-500"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      <Footer position={false} />
    </div>
  );
}

export default page;
