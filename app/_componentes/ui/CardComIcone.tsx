import React from "react"
import { twMerge } from "tailwind-merge"

type CardComIconeProps = {
    titulo: string
    texto: string
    icone: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function CardComIcone( { titulo, texto, icone, ...rest }: CardComIconeProps ) {
    return (
        <div className={twMerge("border-t-4 rounded-lg shadow-lg p-6 bg-gray-100 dark:bg-secundaria", rest.className)}>
            <h3 className="text-xl font-bold text-texto flex items-center mb-4">{titulo} <span className="ml-2">{icone}</span></h3>
            <p className="text-texto opacity-90">{texto}</p>
        </div>
    )
}