import React from "react"
import { twMerge } from "tailwind-merge"

type TooltipProps = {
    texto: string
} & React.HTMLAttributes<HTMLSpanElement>

export default function Tooltip( { texto, className, ...rest }: TooltipProps ) {
    return (
        <span className={twMerge('tooltip rounded shadow-lg p-1 bg-texto text-bg -mt-8 md:-mt-12', className)}>
            {texto}
        </span>
    )
}