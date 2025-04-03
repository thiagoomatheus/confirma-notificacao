import React from "react"
import { Mensagem } from "@prisma/client"
import SessaoCriaNotificacao from "../_componentes/ui/SessaoCriaNotificacao"

type AdicionarNotificacaoProps = {
    params: Promise<{ id: string, idNotificacao: string}>
}

export default async function AdicionarNotificacao( { params }: AdicionarNotificacaoProps ) {

    const { id } = await params

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

    return (
        <>
            <SessaoCriaNotificacao mensagem={mensagem} />
        </>
    )
}