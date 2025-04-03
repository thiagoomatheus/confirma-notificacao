import React from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputProps = {
    erro: FieldError | undefined
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input( { erro, className, ...rest }: InputProps ) {
    return (
        <div className="flex flex-col gap-4">
            <input
                className={twMerge("max-w-xl p-2", className)}
                type={rest.type || "text"}
                aria-invalid={erro ? "true" : "false"}
                {...rest}
            />
            {erro?.message &&
                <p
                    className="text-red-600"
                    role="alert"
                >
                    {erro.message}
                </p>
            }
        </div>
    )
}