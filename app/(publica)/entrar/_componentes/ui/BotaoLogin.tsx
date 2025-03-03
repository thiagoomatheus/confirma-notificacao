"use client"

import React from "react"
import BotaoPadrao from "@/app/_componentes/ui/BotaoPadrao";
import useLogin from "../../_hooks/useLogin";
import { RiGoogleFill } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";

export default function BotaoLogin() {

    const { acaoLogin } = useLogin()

    return (
        <BotaoPadrao onClick={async () => await acaoLogin()} >
            <>
                <RiGoogleFill role="icone-google" className="text-base md:text-2xl" />
                <p>Entrar com Google</p>
                <IoIosLock role="icone-lock" className="text-base md:text-2xl" />
            </>
        </BotaoPadrao>
    )
}