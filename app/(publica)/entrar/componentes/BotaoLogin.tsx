"use client"

import BotaoPadrao from "@/app/componentes/BotaoPadrao";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function BotaoLogin() {

    const acaoLogin = async () => {
        const toastId = toast.loading("Entrando...")

        const result = await signIn("google", { redirectTo: "/dashboard" })

        if (result?.error) return toast.error(result.error, { id: toastId })
            
        return toast.success("Prossiga com o login", { id: toastId })
    }

    return (
        <BotaoPadrao
            className="bg-transparent gap-5 hover:bg-transparent hover:text-texto"
            onClick={async () => await acaoLogin()}
        >
            <>
                <FcGoogle className="text-2xl" />
                <p>Entrar com Google</p>
            </>
        </BotaoPadrao>
    )
}