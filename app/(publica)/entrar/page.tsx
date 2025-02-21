import Image from "next/image";
import login from "@/public/Login-amico.svg";
import Link from "next/link";
import ContainerFlex from "../../_componentes/ui/ContainerFlex";
import BotaoLogin from "./_componentes/ui/BotaoLogin";
import { auth } from "@/app/_lib/auth/auth";
import { redirect } from "next/navigation";

export default async function Page() {

    const session = await auth();

    if (session) redirect("/dashboard");

    return (
        <section className="self-center flex flex-col md:flex-row items-center justify-start caixa">
            <ContainerFlex className="dark:bg-secundaria bg-terciaria rounded-2xl gap-2 p-2">
                <Image
                    className="w-full h-full"
                    src={login}
                    alt="Foto retirada de https://storyset.com/online"
                />
            </ContainerFlex>
            
            <ContainerFlex className="gap-5 md:gap-10">
                <h1 className="text-primaria">Conecte-se</h1>

                <BotaoLogin />

                <p className="text-[10px] text-center w-full max-w-60">Por continuar, você concorda com nossos <Link className="text-[10px] underline underline-offset-2 font-bold" href="/termos-de-serviço">Termos de serviços</Link>. Leia nossas <Link className="text-[10px] underline underline-offset-2 font-bold" href="/politicas-de-privacidade">Políticas de privacidade</Link>.</p>
            </ContainerFlex>
        </section>
    )
}