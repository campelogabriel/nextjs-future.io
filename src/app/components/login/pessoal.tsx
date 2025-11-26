"use client";

import Form from "next/form";
import Image from "next/image";
import Link from "next/link";

function Pessoal({ setRegister }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-200">
              <Image
                alt="Logo"
                height={80}
                width={80}
                src={"/img/logo_app.png"}
                className="rounded-xl"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Cadastro Pessoal
          </h1>
          <p className="text-gray-600">
            Preencha seus dados pessoais para começar
          </p>
        </div>

        <Form
          action={"/"}
          className="flex flex-col w-full justify-center items-center gap-6"
        >
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full transition-all ">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              Seus Dados Pessoais
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  Nome Completo *
                </label>
                <input
                  placeholder="Seu nome completo"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  E-mail *
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  Celular *
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  Data de Nascimento *
                </label>
                <input
                  type="date"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  CPF *
                </label>
                <input
                  placeholder="000.000.000-00"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  Senha *
                </label>
                <input
                  type="password"
                  placeholder="Crie uma senha segura"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                  minLength={8}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 text-sm font-semibold">
                  Confirmar Senha *
                </label>
                <input
                  type="password"
                  placeholder="Digite novamente sua senha"
                  className="border text-sm transition-all w-full bg-gray-50 border-gray-200 p-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="mt-4">
              <small className="text-xs text-gray-500">
                Mínimo 8 caracteres, incluindo letras e números
              </small>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full transition-all ">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              Termos e Consentimentos
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <input
                  type="checkbox"
                  id="terms_1"
                  className="mt-1 w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms_1" className="text-sm text-gray-700">
                  Li e concordo com os{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Termos de Uso
                  </a>
                </label>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <input
                  type="checkbox"
                  id="terms_2"
                  className="mt-1 w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms_2" className="text-sm text-gray-700">
                  Li e concordo com a{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Política de Privacidade
                  </a>
                </label>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <input
                  type="checkbox"
                  id="terms_3"
                  className="mt-1 w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms_3" className="text-sm text-gray-700">
                  Concordo com o processamento dos meus dados pessoais para a
                  finalidade do serviço
                </label>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <input
                  type="checkbox"
                  id="terms_4"
                  className="mt-1 w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms_4" className="text-sm text-gray-700">
                  Desejo receber novidades e atualizações por e-mail (opcional)
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r hover:cursor-pointer from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-6 rounded-2xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow transform hover:-translate-y-1"
            >
              🚀 Criar Conta Pessoal
            </button>
            <button
              onClick={() => setRegister(false)}
              className="w-full hover:cursor-pointer bg-gray-50 border border-gray-200 text-gray-800 font-bold py-5 px-6 rounded-2xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 hover:shadow: transform hover:-translate-y-1"
            >
              Voltar
            </button>

            <div className="text-center mt-6">
              <span className="text-sm text-gray-600">
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Fazer login
                </Link>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Pessoal;
