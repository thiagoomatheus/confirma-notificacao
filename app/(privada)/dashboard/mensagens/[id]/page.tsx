import React from "react"
import { Mensagem } from "@prisma/client"
import BotaoLink from "@/app/_componentes/ui/BotaoLink"
import { BiSolidMessageEdit } from "react-icons/bi";
import TabelaComMensagensProgramadas from "../../_componentes/ui/TabelaComMensagensProgramadas";
import { MdOutlineNotificationAdd } from "react-icons/md";
import SessaoComBorda from "../../../../_componentes/ui/SessaoComBorda";
import SessaoConfigMensagem from "./_componentes/ui/SessaoConfigMensagem";
import CelularFrame from "../_componentes/ui/CelularFrame";

type MensagemIdProps = {
    params: Promise<{ id: string}>
}

export default async function MensagemId( { params }: MensagemIdProps ) {

    const { id } = await params

    const mensagensConfiguradas: Mensagem[] = [
        {
            id: "1",
            idUsuario: "1",
            assunto: "Assunto da mensagem",
            saudacao: "Olá, tudo bem?",
            corpo: "Corpo da mensagem",
            lembreteLocal: false,
            localFixo: "Clinica",
            obs: false,
            obsFixo: "Clinica",
            chamadaParaAcao: "Confirme, por favor!",
            opcoes: JSON.stringify(["Opção 1", "Opção 2", "Opção 3", "Opção 4"]),
            saudacaoNome: false,
            totalNotificacoes: 10,
            notificacoesEnviadas: 5
        },
        {
            id: "2",
            idUsuario: "2",
            assunto: "Assunto da mensagem",
            saudacao: "Olá, tudo bem?",
            corpo: "Corpo da mensagem",
            lembreteLocal: false,
            localFixo: "Clinica",
            obs: false,
            obsFixo: "Clinica",
            chamadaParaAcao: "Confirme, por favor!",
            opcoes: JSON.stringify(["Opção 1", "Opção 2", "Opção 3", "Opção 4"]),
            saudacaoNome: false,
            totalNotificacoes: 10,
            notificacoesEnviadas: 5
        },
        {
            id: "3",
            idUsuario: "3",
            assunto: "Assunto da mensagem",
            saudacao: "Olá, tudo bem?",
            corpo: "Corpo da mensagem",
            lembreteLocal: false,
            localFixo: "Clinica",
            obs: false,
            obsFixo: "Clinica",
            chamadaParaAcao: "Confirme, por favor!",
            opcoes: JSON.stringify(["Opção 1", "Opção 2", "Opção 3", "Opção 4"]),
            saudacaoNome: false,
            totalNotificacoes: 10,
            notificacoesEnviadas: 5
        },
        {
            id: "4",
            idUsuario: "4",
            assunto: "Assunto da mensagem",
            saudacao: "Olá, tudo bem?",
            corpo: "Corpo da mensagem",
            lembreteLocal: false,
            localFixo: "Clinica",
            obs: false,
            obsFixo: "Clinica",
            chamadaParaAcao: "Confirme, por favor!",
            opcoes: JSON.stringify(["Opção 1", "Opção 2", "Opção 3", "Opção 4"]),
            saudacaoNome: false,
            totalNotificacoes: 10,
            notificacoesEnviadas: 5
        }
    ]

    const mensagem = mensagensConfiguradas.find(mensagem => mensagem.id === id)!

    return (
        <>
            <h1>Mensagem {id.slice(0, 8)}...</h1>
            
            <div className="flex flex-col lg:flex-row gap-5">
                <SessaoComBorda>
                    <h3>Configurações da mensagem</h3>
                    <SessaoConfigMensagem mensagem={mensagem} />
                    <BotaoLink
                        className="w-fit"
                        href={`/dashboard/mensagens/${id}/editar`}
                    >
                        <BiSolidMessageEdit className="text-2xl" />
                        Editar
                    </BotaoLink>
                </SessaoComBorda>

                <aside className="flex flex-col gap-5 items-center lg:items-end w-full">
                    <CelularFrame mensagem={mensagem} />
                </aside>
            </div>
            
            <hr  />

            <section className="flex flex-col gap-5 md:gap-8 border border-terciaria p-2 sm:p-6">

                <div className="flex flex-row items-center justify-between">
                    <h3>Notificações agendadas</h3>
                    <BotaoLink href={`/dashboard/mensagens/${id}/notificacoes/adicionar`}>
                        <MdOutlineNotificationAdd className="text-2xl" />
                        Adicionar
                    </BotaoLink>
                </div>

                <TabelaComMensagensProgramadas />

            </section>

        </>
    )
}