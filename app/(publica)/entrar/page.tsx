import BotaoPadrao from "@/app/componentes/BotaoPadrao";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import login from "@/public/Login-amico.svg";
import Link from "next/link";

export default function Page() {
    return (
        <section className="self-center flex flex-col md:flex-row items-center justify-start caixa">
            <div className="w-full h-1/2 md:w-1/2 md:h-full dark:bg-secundaria bg-terciaria rounded-2xl flex justify-center items-center flex-col gap-2 p-2">
                <Image className="w-full h-full" src={login} alt="Foto retirada de https://storyset.com/online" />
            </div>
            <div className="flex flex-col items-center justify-center gap-5 md:gap-10 w-full h-1/2 md:w-1/2 md:h-full">
                <h1 className="text-primaria">Conecte-se</h1>
                <BotaoPadrao className="bg-transparent gap-5 hover:bg-transparent hover:text-texto">
                    <>
                        <FcGoogle className="text-2xl" />
                        <p>Entrar com Google</p>
                    </>
                </BotaoPadrao>
                <p className="text-[10px] text-center w-full max-w-60">Por continuar, você concorda com nossos <Link className="text-[10px] underline underline-offset-2 font-bold" href="/termos-de-serviço">Termos de serviços</Link>. Leia nossas <Link className="text-[10px] underline underline-offset-2 font-bold" href="/politicas-de-privacidade">Políticas de privacidade</Link>.</p>
            </div>
        </section>
    )
}