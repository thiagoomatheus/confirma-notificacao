import React from "react"
import { Mensagem } from "@prisma/client"
import SessaoCriaMensagem from "../../adicionar/_componentes/ui/SessaoCriaMensagem"

type EditarMensagemProps = {
    params: Promise<{ id: string}>
}

export default async function EditarMensagem( { params }: EditarMensagemProps ) {

    const { id } = await params

    const mensagem: Mensagem = {
        id: "4",
        idUsuario: "4",
        assunto: "Assunto da mensagem",
        saudacao: "Olá {nome}, tudo bem?",
        corpo: "Corpo da mensagem de teste, esse é um exemplo",
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

    return (
        <>
            <h1>Editar Mensagem</h1>
            
        </>
    )
}