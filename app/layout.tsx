import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_NOME_APP!,
  description: "Seu app de agendamento de notificação!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
