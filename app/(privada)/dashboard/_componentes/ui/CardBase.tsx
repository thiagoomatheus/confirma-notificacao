import React from "react";
import { twMerge } from "tailwind-merge";

type CardBaseProps = {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function CardBase( { children, ...rest }: CardBaseProps ) {
    return (
        <div className={twMerge("flex flex-row items-center gap-2 flex-initial bg-gray-100 dark:bg-secundaria p-5 rounded-xl shadow-lg dark:shadow-gray-900 w-full", rest.className)}>
            {children}
        </div>
    );
}

