import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./_componentes/ui/ThemeProvider";
import { auth } from "./_lib/auth/auth";
import Menu from "./(privada)/dashboard/_componentes/ui/Menu";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_NOME_APP!,
  description: "Seu app de agendamento de notificação!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const sessao = await auth();

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased flex flex-col lg:flex-row min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Toaster />

          {sessao &&
            <Menu className="hidden lg:flex" />
          }

          <div className="flex flex-col w-full">

            <header className="flex items-center w-full bg-gray-100 dark:bg-secundaria">

              {sessao &&
                <Menu className="flex lg:hidden" />
              }

              <Link href="/" >
                <h1 className="text-2xl font-bold p-4">
                  {process.env.NEXT_PUBLIC_NOME_APP}
                </h1>
              </Link>

              {!sessao &&
                <Link className="flex flex-row gap-2 items-center duration-500 text-texto hover:text-primaria ml-auto p-4" href="/entrar">
                  Login
                  <IoMdLogIn className="text-3xl cursor-pointer hover:text-primaria duration-500" />
                </Link>
              }

            </header>

            {children}

          </div>
            
        </ThemeProvider>
      </body>
    </html>
  );
}
