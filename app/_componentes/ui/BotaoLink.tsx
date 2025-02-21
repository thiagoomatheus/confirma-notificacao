import React from "react"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

type BotaoProps = {
    children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function BotaoLink( {children, className, ...rest}: BotaoProps ) {
    return (
        <Link
            href={rest.href || "#"}
            className={twMerge("bg-primaria text-texto px-4 py-2 rounded-full font-bold flex items-center justify-center gap-2 outline-1 outline outline-primaria shadow-md duration-200 hover:text-white hover:bg-secundaria hover:underline hover:underline-offset-4 hover:outline-4 focus:outline-4 focus:outline-secundaria", className)}
            {...rest}
        >
            {children}
        </Link>
    )
}