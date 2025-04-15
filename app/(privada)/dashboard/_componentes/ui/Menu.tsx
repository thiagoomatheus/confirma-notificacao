"use client"

import React from "react"
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapseFilled, TbMessageSearch, TbMessagePlus } from "react-icons/tb";
import { PiUserCircle } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import LinkMenu from "./LinkMenu";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { twMerge } from "tailwind-merge";

type MenuProps = React.HTMLAttributes<HTMLDivElement>

export default function Menu( { className, ...rest }: MenuProps ) {

    const minhaRota = usePathname()
    const [menuAberto, setMenuAberto] = React.useState(false)

    const rotasPublicas = ["/", "/login"]

    return (
        <div
            className={twMerge(`bg-gray-100 dark:bg-secundaria flex flex-col gap-10 p-5 lg:sticky top-0 left-0 lg:h-screen z-10 ${menuAberto ? "w-full sm:w-80 h-screen fixed aberto" : "fechado"} menu ${rotasPublicas.includes(minhaRota) ? "hidden" : ""}`, className?.includes("flex") && rotasPublicas.includes(minhaRota) ? "hidden" : className)}
            {...rest}
        >
            
            {!menuAberto &&
                <TbLayoutSidebarLeftExpand
                    className="text-3xl cursor-pointer hover:text-primaria duration-500"
                    onClick={() => setMenuAberto(!menuAberto)}
                />
            }

            {menuAberto &&
                <div className="flex flex-row justify-between items-center gap-2">
                    <TbLayoutSidebarLeftCollapseFilled
                        className="text-3xl cursor-pointer hover:text-primaria duration-500"
                        onClick={() => setMenuAberto(!menuAberto)}
                    />
                    <h1 className="text-2xl font-bold lg:hidden">{process.env.NEXT_PUBLIC_NOME_APP}</h1>
                </div>
            }

            <nav className={`${menuAberto ? "flex" : "hidden"} lg:flex flex-col items-start gap-5 h-full`}>

                <LinkMenu
                    href="/dashboard"
                    estado={menuAberto}
                    icone={MdOutlineDashboard}
                    texto="Dashboard"
                    minhaRota={minhaRota}
                />

                <LinkMenu
                    href="/dashboard/mensagens"
                    estado={menuAberto}
                    icone={TbMessageSearch}
                    texto="Mensagens"
                    minhaRota={minhaRota}
                />

                <LinkMenu
                    href="/dashboard/mensagens/adicionar"
                    estado={menuAberto}
                    icone={TbMessagePlus}
                    texto="Nova mensagem"
                    minhaRota={minhaRota}
                />

                <LinkMenu
                    href="/perfil/whatsapp"
                    estado={menuAberto}
                    icone={FaWhatsapp}
                    texto="Meu WhatsApp"
                    minhaRota={minhaRota}
                />
                
                <div className="flex flex-col gap-5 absolute bottom-5">
                    <LinkMenu
                        href="/perfil"
                        estado={menuAberto}
                        icone={PiUserCircle}
                        texto="Perfil"
                        minhaRota={minhaRota}
                    />
                    
                    <button
                        className="flex flex-row gap-2 justify-start items-center hover:text-primaria duration-500"
                        onClick={() => signOut()}
                    >
                        <IoMdLogOut
                            className="text-3xl"
                        />
                        {menuAberto && <p>Sair</p>}
                    </button>
                </div>

            </nav>
        </div>
    )
}