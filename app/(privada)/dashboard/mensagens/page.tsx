import { Mensagem } from "@prisma/client"
import SessaoMensagens from "../_componentes/ui/SessaoMensagens"

export default function MensagemPage() {
    
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

    return (
        <>

            <h1>Minhas mensagens</h1>

            <SessaoMensagens mensagensConfiguradas={mensagensConfiguradas} />
            
        </>
    )
}