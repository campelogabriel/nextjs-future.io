import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future.io - Página de Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
