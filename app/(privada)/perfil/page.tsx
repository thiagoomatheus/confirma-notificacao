import BotaoLink from "@/app/_componentes/ui/BotaoLink";
import { GraficoEmCirculo } from "@/app/_componentes/ui/GraficoEmCirculo";
import { Usuario } from "@prisma/client"
import Image from "next/image"
import { TbPhotoQuestion } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { Badge } from "@/app/_componentes/ui/Badge";

export default async function Page() {

    const usuario: Usuario = {
        id: "4",
        nome: "João",
        email: "s5dYp@example.com",
        linkFoto: null,
        instanciaWhatsApp: "s5dYp@example.com",
    }

    const statusInstancia: "open" | "close" | undefined = undefined

    return (
        <>
            <h1>Perfil</h1>

            <section className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-5 md:gap-10">

                <div className="flex items-end">

                    <div className="w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 flex flex-col items-center justify-center bg-gradient-to-r from-primaria to-secundaria rounded-full flex-initial shadow-lg">
                        {usuario.linkFoto &&
                            <Image
                                src={usuario.linkFoto}
                                alt="Foto de perfil"
                                className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-gray-300"
                                width={100}
                                height={100}
                            />
                        }
                        {!usuario.linkFoto &&
                            <div className="flex items-center justify-center w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-gray-300 bg-secundaria">
                                <TbPhotoQuestion className='text-5xl text-terciaria' />
                            </div>
                        }
                    </div>

                    <BotaoLink href="/perfil/editar">
                        <MdEdit className="text-2xl" />
                    </BotaoLink>
                </div>

                <div className="flex flex-col items-center md:items-start justify-center flex-1 gap-5 bg-gray-300 dark:bg-secundaria rounded-lg p-5 w-full shadow-lg">

                    <h3>{usuario.nome}</h3>
                    <p>{usuario.email}</p>

                </div>

            </section>

            <section className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-1 gap-5 bg-gray-300 dark:bg-secundaria rounded-lg p-5 w-full shadow-lg">

                <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
                    <h3>Instância do WhatsApp</h3>

                    {statusInstancia === "open" &&
                        <Badge variant="success">
                            Conectado
                        </Badge>
                    }

                    {statusInstancia !== "open" &&
                        <Badge variant="error">
                            Desconectado
                        </Badge>
                    }
                </div>

                <BotaoLink href="/perfil/whatsapp">
                    Ver mais
                </BotaoLink>

            </section>

            <section className="flex flex-col items-center md:items-start flex-1 gap-5 bg-gray-300 dark:bg-secundaria rounded-lg p-5 w-full shadow-lg">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
                    <h3>Meu plano</h3>

                    <BotaoLink href="/perfil/planos">
                        Alterar plano
                    </BotaoLink>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                    <p>Plano: <span className="font-bold">Gratuito</span></p>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 w-full">
                    <div className="flex flex-col items-center gap-5 border border-terciaria p-5 rounded-3xl">
                        <p>Mensagens enviadas no mês:</p>
                        <GraficoEmCirculo
                            variant="success"
                            value={100}
                            max={100}
                            className="w-32 h-32 lg:w-48 lg:h-48"
                            showAnimation={false}
                        >
                            <span className="text-sm md:text-base font-medium text-texto">
                                100%
                            </span>
                        </GraficoEmCirculo>
                    </div>

                    <div className="flex flex-col items-center gap-5 border border-terciaria p-5 rounded-3xl">
                        <p>Mensagens enviadas no mês:</p>
                        <GraficoEmCirculo
                            variant="success"
                            value={100}
                            max={100}
                            className="w-32 h-32 lg:w-48 lg:h-48"
                            showAnimation={false}
                        >
                            <span className="text-sm md:text-base font-medium text-texto">
                                100%
                            </span>
                        </GraficoEmCirculo>
                    </div>

                    <div className="flex flex-col items-center gap-5 border border-terciaria p-5 rounded-3xl">
                        <p>Mensagens enviadas no mês:</p>
                        <GraficoEmCirculo
                            variant="success"
                            value={100}
                            max={100}
                            className="w-32 h-32 lg:w-48 lg:h-48"
                            showAnimation={false}
                        >
                            <span className="text-sm md:text-base font-medium text-texto">
                                100%
                            </span>
                        </GraficoEmCirculo>
                    </div>
                </div>

            </section>
        </>
    )
}