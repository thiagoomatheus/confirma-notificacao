import React from "react"
import { Mensagem, Notificacao } from "@prisma/client"
import SessaoCriaNotificacao from "../../_componentes/ui/SessaoCriaNotificacao"

type EditarNotificacaoProps = {
    params: Promise<{ id: string, idNotificacao: string}>
}

export default async function EditarNotificacao( { params }: EditarNotificacaoProps ) {

    const { id, idNotificacao } = await params

    const mensagem: Mensagem = {
        id: "4",
        idUsuario: "4",
        assunto: "Assunto da mensagem",
        saudacao: "Olá {nome}, tudo bem?",
        corpo: "Corpo da mensagem de teste, esse é um exemplo",
        lembreteLocal: true,
        localFixo: null,
        obs: true,
        obsFixo: null,
        chamadaParaAcao: "Confirme, por favor!",
        opcoes: JSON.stringify(["Opção 1", "Opção 2", "Opção 3", "Opção 4"]),
        saudacaoNome: true,
        totalNotificacoes: 10,
        notificacoesEnviadas: 5
    }

    const notificacaoExisitente: Notificacao = {
        id: "4",
        idMensagem: "4",
        idUsuario: "4",
        nome: "João",
        data: new Date(),
        hora: "10:00",
        local: "Clinica",
        obsTexto: "Observação",
        dataEnvio: new Date(),
        horaEnvio: "10:00",
        telefone: "11999999999",
        status: false
    }

    return (
        <>
            <h1>Editar Notificação</h1>

            <SessaoCriaNotificacao mensagem={mensagem} notificacaoExisitente={notificacaoExisitente} />
        </>
    )
}