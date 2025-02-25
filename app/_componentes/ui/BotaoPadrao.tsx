import React from "react"
import { twMerge } from "tailwind-merge"

type BotaoProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function BotaoPadrao( {children, className, ...rest}: BotaoProps ) {
    return (
        <button
            className={twMerge("bg-terciaria dark:bg-primaria text-white px-4 py-2 rounded-full font-bold flex items-center justify-center gap-2 shadow-md duration-200 hover:text-white hover:bg-secundaria dark:hover:bg-terciaria hover:underline hover:underline-offset-4 focus:outline-offset-4 focus:outline-primaria", className)}
            {...rest}
        >
            {children}
        </button>
    )
}