"use client"

import React from "react"
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapseFilled, TbMessageSearch, TbMessagePlus } from "react-icons/tb";
import { PiUserCircle } from "react-icons/pi";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export default function Menu() {

    const [menuAberto, setMenuAberto] = React.useState(false)

    return (
        <div className={`bg-gray-100 dark:bg-secundaria shadow-lg flex flex-col gap-10 p-5 md:relative top-0 left-0 lg:h-screen z-50 ${menuAberto ? "w-full lg:w-80 fixed h-screen aberto" : "fechado"} menu`}>
            
            {!menuAberto &&
                <TbLayoutSidebarLeftExpand
                    className="text-3xl cursor-pointer"
                    onClick={() => setMenuAberto(!menuAberto)}
                />
            }

            {menuAberto &&
                <div className="flex flex-col gap-2">
                    <TbLayoutSidebarLeftCollapseFilled
                        className="text-3xl cursor-pointer"
                        onClick={() => setMenuAberto(!menuAberto)}
                    />
                </div>
            }

            <nav className={`${menuAberto ? "flex" : "hidden"} lg:flex flex-col items-start gap-5`}>

                <Link
                    className="flex flex-row gap-2 justify-start items-center"
                    href="/dashboard"
                >
                    <MdOutlineDashboard className="text-3xl" />
                    {menuAberto && <p>Dashboard</p>}
                </Link>

                <Link
                    className="flex flex-row gap-2 justify-start items-center"
                    href="/dashboard/mensagens"
                >
                    <TbMessageSearch className="text-3xl" />
                    {menuAberto && <p>Mensagens</p>}
                </Link>

                <Link
                    className="flex flex-row gap-2 justify-start items-center"
                    href="/dashboard/mensagens/adicionar"
                >
                    <TbMessagePlus className="text-3xl" />
                    {menuAberto && <p className="lg:w-40">Nova mensagem</p>}
                </Link>
                
                <Link
                    className="flex flex-row gap-2 justify-start items-center"
                    href="/perfil/whatsapp"
                >
                    <FaWhatsapp className="text-3xl" />
                    {menuAberto && <p>WhatsApp</p>}
                </Link>

                <Link
                    className="flex flex-row gap-2 justify-start items-center absolute bottom-5"
                    href="/perfil"
                >
                    <PiUserCircle className="text-3xl" />
                    {menuAberto && <p>Perfil</p>}
                </Link>
            </nav>
        </div>
    )
}