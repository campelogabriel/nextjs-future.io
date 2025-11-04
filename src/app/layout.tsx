import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bem Vindo ao Future.io",
  description: "Coloque sua foto e veja você no futuro na sua profissão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
