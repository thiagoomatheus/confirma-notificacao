import React from "react";
import { twMerge } from "tailwind-merge";

type FieldsetProps = {
    children: React.ReactNode
    legenda: string
} & React.HTMLAttributes<HTMLFieldSetElement>

export default function Fieldset( { children, legenda, className, ...rest }: FieldsetProps ) {
    return (
        <fieldset
            className={twMerge("flex flex-col border border-terciaria p-2 md:p-3 gap-3 md:gap-7", className)}
            {...rest}
        >

            <legend className="px-2 text-terciaria font-bold">
                {legenda}
            </legend>

            {children}
            
        </fieldset>
    )
}