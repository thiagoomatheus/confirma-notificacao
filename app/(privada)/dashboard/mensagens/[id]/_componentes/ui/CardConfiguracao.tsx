import React from "react"

type CardConfiguracaoProps = {
    label: string
    valor: string
}

export default function CardConfiguracao( { label, valor }: CardConfiguracaoProps ) {
    return (
        <div className="flex flex-col gap-2 sm:w-[47%] flex-initial">
            <p className="font-bold text-terciaria">{label}</p>
            <p>{valor}</p>
        </div>
    )
}