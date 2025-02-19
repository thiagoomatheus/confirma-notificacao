import { twMerge } from "tailwind-merge"

type ContainerProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function Container({ children, className, ...rest }: ContainerProps) {
    return (
        <div
            className={twMerge("w-full h-1/2 md:w-1/2 md:h-full flex flex-col items-center justify-center", className)}
            {...rest}
        >
            {children}
        </div>
    )
}