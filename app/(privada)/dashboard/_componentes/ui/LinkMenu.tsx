import React from "react"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

type LinkMenuProps = {
    icone: React.ElementType
    estado: boolean
    texto: string
    minhaRota: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function LinkMenu( { icone: Icone, estado: menuAberto, texto, minhaRota, className, ...rest }: LinkMenuProps ) {
    return (
        <Link
            className={twMerge(`flex flex-row gap-2 justify-start items-center duration-500 text-texto hover:text-primaria`, className)}
            href={rest.href || "#"}
            {...rest}
        >
            <Icone className={`text-3xl ${minhaRota === rest.href && "text-primaria"}`} />
            {menuAberto && <p>{texto}</p>}
        </Link>
    )
}