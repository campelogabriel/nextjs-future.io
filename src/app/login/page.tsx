"use client";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

function page() {
  return (
    <div className="w-screen h-screen bg-white xs:px-10 xs:py-10 md:px-50 lg:px-16 md:py-50 lg:py-16 flex justify-center items-center">
      <div className="bg-white md:w-full gap-4 md:border md:shadow p-4 rounded-2xl flex flex-row justify-center">
        <div className="shadow hidden lg:block bg-gray-50 rounded-2xl border">
          <Image
            alt="cat with tools"
            src={"/img/cat3.png"}
            width={500}
            height={500}
            className="rounded-2xl "
          />
        </div>
        <div className="flex-1 p-4 gap-3 flex flex-col justify-center items-center">
          <Image
            alt="Logo with title"
            height={100}
            width={100}
            src={"/img/logo_app.png"}
            className="shadow border border-blue-50 p-0 rounded-4xl bg-transparent"
          />
          <h1 className="text-black sm:text-sm lg:text-2xl xl:text-3xl font-semibold">
            Faça Login em sua conta
          </h1>
          <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
            Não possui conta?{" "}
            <Link
              className="text-blue-500 underline hover:text-blue-800"
              href={"/registro"}
            >
              Crie uma aqui
            </Link>
          </h3>
          <Form action="/" className="flex flex-col gap-4 w-full px-8 xl:px-35">
            <div className=" flex flex-col gap-2">
              <label className="text-black text-xs sm:text-sm">Email</label>
              <input
                placeholder="seuemail@exemplo.com.br"
                type="email"
                className="border shadow p-1 transition-all duration-700 w-full xl:w-3/4  focus:w-full bg-gray-50 border-gray-300 rounded-2xl text-gray-800 px-4"
                autoComplete="off"
                readOnly
                onFocus={(e) => e.target.removeAttribute("readonly")}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-black text-xs sm:text-sm">Senha</label>
              <input
                placeholder="********"
                type="password"
                className="border shadow transition-all  w-full xl:w-3/4  duration-700 focus:w-full bg-gray-50 border-gray-300 p-1  rounded-2xl text-gray-800 px-4 flex justify-center items-center"
              />
            </div>
            <div className="flex flex-row gap-2 justify-between">
              <div className="flex flex-row gap-2 items-center">
                <input type="checkbox" />
                <span className="text-black text-xs sm:text-sm">
                  Lembrar-me
                </span>
              </div>
              <Link
                className="text-blue-500 underline text-xs sm:text-sm font-medium hover:text-blue-800"
                href="/"
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <button
                type="submit"
                className=" bg-gray-950 rounded-4xl text-xs md:text-md lg:text-sm p-2.5 shadow border hover:cursor-pointer hover:bg-black"
              >
                Entrar
              </button>
              <p className="text-gray-600 text-center">ou</p>
              <button className=" bg-gray-50 gap-2 text-xs md:text-md lg:text-sm flex justify-center items-center transition-all shadow border text-black hover:text-gray-50 rounded-4xl p-2 hover:cursor-pointer hover:bg-black">
                <span>
                  <Image
                    alt="icon google"
                    src={"/img/icon_google.png"}
                    width={20}
                    height={20}
                    className="inline"
                  />
                </span>{" "}
                Entrar com Google
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default page;
