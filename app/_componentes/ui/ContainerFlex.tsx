import React from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function ContainerFlex({ children, className, ...rest }: ContainerProps) {
    return (
        <div
            className={twMerge("flex flex-col items-center justify-center flex-1 w-full h-full", className)}
            {...rest}
        >
            {children}
        </div>
    )
}