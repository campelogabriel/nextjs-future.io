import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

function Login() {
  return (
    <div className="w-screen h-screen bg-white px-16 py-16 flex justify-center items-center">
      <div className="bg-white w-full gap-4 border shadow p-4 rounded-2xl flex flex-row justify-between">
        <div className="bg-pink-100 rounded-2xl border">
          <Image
            alt="cat with tools"
            src={"/img/cat.png"}
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 p-4 gap-3 flex flex-col justify-center items-center">
          <h1 className="text-black text-3xl font-semibold">
            Faça Login em sua conta
          </h1>
          <h3 className="text-gray-700 text-sm font-medium">
            Não possui conta?{" "}
            <Link className="text-blue-500 underline" href={"/"}>
              Crie uma aqui
            </Link>
          </h3>
          <Form action="/" className="flex flex-col gap-4 w-full px-35">
            <div className=" flex flex-col gap-2">
              <label className="text-black text-sm">Email</label>
              <input
                placeholder="seuemail@exemplo.com.br"
                type="email"
                className="border shadow p-1 transition-all duration-700 w-3/4 focus:w-full bg-gray-50 border-gray-300 rounded-2xl text-gray-800 px-4"
                autoComplete="off"
                readOnly
                onFocus={(e) => e.target.removeAttribute("readonly")}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-black text-sm">Senha</label>
              <input
                placeholder="********"
                type="password"
                className="border shadow transition-all w-3/4 duration-700 focus:w-full bg-gray-50 border-gray-300 p-1  rounded-2xl text-gray-800 px-4 flex justify-center items-center"
              />
            </div>
            <div className="flex flex-row gap-2">
              <input type="checkbox" />
              <span className="text-black text-sm">Lembrar-me</span>
            </div>
            <button
              type="submit"
              className=" bg-gray-950 rounded-4xl p-2 hover:cursor-pointer hover:bg-black"
            >
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
