"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BarraNavegacao() {

    const caminhoUrl: string = usePathname()

    const caminhos: string[] = caminhoUrl.split("/").filter(item => item !== "")

    const quantidadeLinks: number = 4

    const caminhosNavegacao: string[] = [...caminhos]

    caminhosNavegacao.length <= quantidadeLinks ? caminhosNavegacao : caminhosNavegacao.splice(1, (caminhosNavegacao.length - quantidadeLinks + 1), "...")

    console.log(caminhos[3]);

    return (
        <div className="p-4 w-full mt-2">
            <nav role="navigation" className="flex items-center gap-x-4 text-texto bg-gray-100 dark:bg-secundaria shadow-lg p-4 rounded-lg w-fit">
                {caminhosNavegacao.map((item, index) => (
                    <>
                        <Link
                            href={item !== "..." ? `${caminhoUrl.split(item)[0] + item}` : `${caminhoUrl.split(caminhos[2])[0]}`}
                            key={index}
                            className={`flex items-center hover:underline capitalize ${index === caminhosNavegacao.length - 1 ? "text-primaria font-bold" : "text-texto"}`}
                        >
                            {item === "dashboard" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-primaria mr-1"
                                    viewBox="0 -960 960 960"
                                    fill="currentColor"
                                >
                                    <path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z" />
                                </svg>
                            )}
                            {item.length < 12 ? item : `${item.slice(0, 8)}...`}
                        </Link>
                        
                        {index !== caminhosNavegacao.length - 1 && (
                            <span key={`separador-${index}`} className="text-gray-400">
                                &gt;
                            </span>
                        )}
                    </>
                ))}
            </nav>
        </div>
    )
}