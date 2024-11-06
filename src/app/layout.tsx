import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pig Bank",
  description: "Banco digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
