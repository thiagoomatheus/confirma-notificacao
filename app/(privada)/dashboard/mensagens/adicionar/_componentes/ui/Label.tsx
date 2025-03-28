import React from "react"
import Tooltip from "@/app/_componentes/ui/Tooltip"
import { FaExclamationCircle, FaQuestionCircle } from "react-icons/fa"
import { twMerge } from "tailwind-merge"

type LabelProps = {
    children: React.ReactNode
    obrigatorio?: boolean,
    texto: string
} & React.HTMLAttributes<HTMLLabelElement>

export default function Label({ children, texto, obrigatorio, className, ...rest }: LabelProps ) {
    return (
        <label className={twMerge("flex flex-col gap-3", className)} {...rest} >
            
            <p className="font-bold flex items-center gap-2">

                {texto}

                <span className="has-tooltip text-xs font-normal">
                    <Tooltip
                        className={obrigatorio ? "-ml-7 md:-mt-8" : "-ml-6 md:-mt-8"}
                        texto={obrigatorio ? "Obrigatório" : "Opcional"}
                    />
                    {obrigatorio ? <FaExclamationCircle className="text-sm" /> : <FaQuestionCircle className="text-sm" />}
                </span>

            </p>
            
            {children}
        </label>
    )
}