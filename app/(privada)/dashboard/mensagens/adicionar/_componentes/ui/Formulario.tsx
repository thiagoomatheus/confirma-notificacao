"use client"

import React from "react";
import BotaoPadrao from "@/app/_componentes/ui/BotaoPadrao";
import { FaLongArrowAltRight } from "react-icons/fa";

type FormularioProps = {
    children: React.ReactNode
    funcao: (e?: React.BaseSyntheticEvent) => Promise<void>
}

export default function Formulario( { children, funcao }: FormularioProps ) {

    return (
        <form
            className="flex flex-col gap-5"
            onSubmit={funcao}
        >
            {children}
            <BotaoPadrao
                type="submit"
                className="self-end w-full max-w-40"
            >
                <FaLongArrowAltRight className="text-2xl" />
                Continuar
            </BotaoPadrao>
        </form>
    )
}