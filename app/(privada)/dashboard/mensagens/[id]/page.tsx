import { Mensagem } from "@prisma/client"
import CardConfiguracao from "./_componentes/ui/CardConfiguracao"
import BotaoLink from "@/app/_componentes/ui/BotaoLink"
import { BiSolidMessageEdit } from "react-icons/bi";
import TabelaComMensagensProgramadas from "../../_componentes/ui/TabelaComMensagensProgramadas";
import { MdOutlineNotificationAdd } from "react-icons/md";
import SessaoComBorda from "./_componentes/ui/SessaoComBorda";

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
            lembreteLocal: "",
            obs: false,
            acaoTexto: "Confirme, por favor!",
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
            lembreteLocal: "",
            obs: false,
            acaoTexto: "Confirme, por favor!",
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
            lembreteLocal: "",
            obs: false,
            acaoTexto: "Confirme, por favor!",
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
            lembreteLocal: "",
            obs: false,
            acaoTexto: "Confirme, por favor!",
            saudacaoNome: false,
            totalNotificacoes: 10,
            notificacoesEnviadas: 5
        }
    ]

    const mensagem = mensagensConfiguradas.find(mensagem => mensagem.id === id)!

    return (
        <>
            <h1>Mensagem {id.slice(0, 8)}...</h1>
            
            <SessaoComBorda>

                <h3>Configurações da mensagem</h3>

                <section className="w-full flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap">

                    <CardConfiguracao
                        label="Assunto"
                        valor={mensagem?.assunto}
                    />
                    <CardConfiguracao
                        label="Saudação"
                        valor={mensagem?.saudacao || "Nao informado"}
                    />
                    <CardConfiguracao
                        label="Saudação com nome"
                        valor={mensagem?.saudacaoNome ? "Sim" : "Nao"}
                    />
                    <CardConfiguracao
                        label="Corpo"
                        valor={mensagem?.corpo.slice(0, 50)} />
                    <CardConfiguracao
                        label="Lembrete local"
                        valor={mensagem?.lembreteLocal ? "Sim" : "Nao"}
                    />
                    <CardConfiguracao
                        label="Observação"
                        valor={mensagem?.obs ? "Sim" : "Nao"}
                    />
                    {mensagem?.obs && <CardConfiguracao
                        label="Observação"
                        valor={mensagem?.obs ? "Sim" : "Nao"}
                    />}
                    <CardConfiguracao
                        label="Ação do texto"
                        valor={mensagem?.acaoTexto || "Nao informado"}
                    />

                </section>

                <BotaoLink
                    className="w-fit"
                    href={`/dashboard/mensagens/${id}/editar`}
                >
                    <BiSolidMessageEdit className="text-2xl" />
                    Editar
                </BotaoLink>

            </SessaoComBorda>
            
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