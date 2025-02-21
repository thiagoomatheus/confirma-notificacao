"use client"

import React from "react"
import BotaoPadrao from "@/app/_componentes/ui/BotaoPadrao";
import { FcGoogle } from "react-icons/fc";
import useLogin from "../../_hooks/useLogin";

export default function BotaoLogin() {

    const { acaoLogin } = useLogin()

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