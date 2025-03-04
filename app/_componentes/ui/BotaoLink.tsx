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
            className={twMerge("bg-terciaria dark:bg-primaria text-white px-4 py-2 rounded-full font-bold flex items-center justify-center gap-2 shadow-md duration-200 hover:text-white hover:bg-secundaria dark:hover:bg-terciaria hover:underline hover:underline-offset-4 focus:outline-offset-4 focus:outline-primaria", className)}
            {...rest}
        >
            {children}
        </Link>
    )
}