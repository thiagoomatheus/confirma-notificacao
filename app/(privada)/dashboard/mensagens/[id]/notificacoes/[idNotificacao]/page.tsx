import React from "react"
import BotaoLink from "@/app/_componentes/ui/BotaoLink"
import CardConfiguracao from "../../_componentes/ui/CardConfiguracao"
import SessaoComBorda from "../../../../../../_componentes/ui/SessaoComBorda"
import { BiSolidMessageEdit } from "react-icons/bi"
import { Mensagem, Notificacao } from "@prisma/client"

type NotificacaoIdProps = {
    params: Promise<{ id: string, idNotificacao: string}>
}

export default async function NotificacaoId( { params }: NotificacaoIdProps ) {

    const { id, idNotificacao } = await params

    const mensagem: Mensagem = {
        id: "1",
        idUsuario: "1",
        assunto: "Assunto da mensagem",
        saudacao: "Olá, tudo bem?",
        corpo: "Corpo da mensagem",
        lembreteLocal: "",
        obs: false,
        acaoTexto: "Confirme, por favor!",
        saudacaoNome: false,
        totalNotificacoes: 10,
        notificacoesEnviadas: 5
    }

    const notificacao: Notificacao = {
        id: "1",
        idUsuario: "1",
        idMensagem: "1",
        nome: "João",
        data: new Date(),
        hora: "10:00",
        local: "Clinica",
        obsTexto: "Chegar com dez minutos de antecedência",
        dataEnvio: new Date(),
        horaEnvio: "10:00",
        telefone: "14997249510",
        status: false
    }

    return (
        <>
            <h1>Notificação {idNotificacao.slice(0, 6)}</h1>

            <SessaoComBorda>

                <h3>Configurações da notificação</h3>
                
                <section className="w-full flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap">

                    <CardConfiguracao
                        label="Assunto"
                        valor={mensagem?.assunto}
                    />
                    <CardConfiguracao
                        label="Nome na saudação"
                        valor={notificacao.nome || "N/A"}
                    />
                    <CardConfiguracao
                        label="Data do compromisso"
                        valor={notificacao.data.toLocaleDateString()}
                    />
                    <CardConfiguracao
                        label="Hora do compromisso"
                        valor={notificacao.hora}
                    />
                    <CardConfiguracao
                        label="Local do compromisso"
                        valor={notificacao.local || "N/A"}
                        />
                    {mensagem?.obs && notificacao?.obsTexto && <CardConfiguracao
                        label="Observação"
                        valor={notificacao?.obsTexto}
                    />}
                    <CardConfiguracao
                        label="Data do envio"
                        valor={notificacao.dataEnvio.toLocaleDateString()}
                    />
                    <CardConfiguracao
                        label="Hora do envio"
                        valor={notificacao.horaEnvio}
                    />
                    <CardConfiguracao
                        label="Telefone"
                        valor={notificacao.telefone}
                    />
                    <CardConfiguracao
                        label="Status"
                        valor={notificacao.status ? "Enviada" : "Pendente"}
                    />

                </section>

                <BotaoLink
                    className="w-fit"
                    href={`/dashboard/mensagens/${id}/notificacoes/${idNotificacao}/editar`}
                >
                    <BiSolidMessageEdit className="text-2xl" />
                    Editar
                </BotaoLink>

            </SessaoComBorda>
        </>
    )
}