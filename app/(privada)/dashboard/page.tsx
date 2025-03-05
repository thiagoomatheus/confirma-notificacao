import Card from "./_componentes/ui/CardBase";
import GraficoMensagensProgramadas from "./_componentes/ui/GraficoMensagensProgramadas"
import { MdSchedule } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineScheduleSend } from "react-icons/md";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import CardNumeros from "./_componentes/ui/CardNumeros";
import BotaoLink from "@/app/_componentes/ui/BotaoLink";
import { FaPlus } from "react-icons/fa6";
import { RiGalleryView2 } from "react-icons/ri";
import CardMensagem from "./_componentes/ui/CardMensagem";
import { Mensagem } from "@prisma/client";

export default async function Dashboard() {

    const dados = {
        totalMensagensProgramadas: 10,
        mensagensProgramadasJaEnviadas: 5
    }

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
        }
    ]

    return (
        <section className="p-4 w-full max-w-7xl flex flex-col self-center gap-10">
            <h1>Dashboard</h1>

            <h2>Resumo de hoje</h2>

            <section className="flex flex-col md:flex-row gap-4 w-full">
                <GraficoMensagensProgramadas dados={dados} />
                <div className="w-full flex flex-col md:flex-row gap-4 flex-wrap">
                    <CardNumeros numero={dados.totalMensagensProgramadas} descricao="Notificações programadas para hoje" icone={<MdSchedule className="text-xl md:hidden lg:block lg:text-5xl text-terciaria" />} />
                    <CardNumeros numero={dados.mensagensProgramadasJaEnviadas} descricao="Notificações enviadas com sucesso" icone={<AiOutlineSchedule className="text-xl md:hidden lg:block lg:text-5xl text-primaria" />} />
                    <CardNumeros numero={dados.totalMensagensProgramadas - dados.mensagensProgramadasJaEnviadas} descricao="Notificações que ainda serão enviadas" icone={<MdOutlineScheduleSend className="text-xl md:hidden lg:block lg:text-5xl text-orange-500" />} />
                    <CardNumeros numero={1} descricao="Notificações com erro" icone={<MdOutlineCancelScheduleSend className="text-xl md:hidden lg:block lg:text-4xl text-red-700" />} />
                </div>
            </section>

            <div className="flex flex-row items-center justify-between">
                <h2>Resumo por mensagem</h2>
                <BotaoLink href="/dashboard/mensagens">
                    <RiGalleryView2 />
                    Ver todos
                </BotaoLink>
            </div>

            <section className="flex flex-col md:flex-row gap-4 w-full flex-wrap">

                {mensagensConfiguradas.length <= 0 && (
                    <>
                        <p>Voce ainda nao possui mensagens configuradas. Clique no botão abaixo para adicionar uma nova.</p>
                        <BotaoLink href="/dashboard/mensagens/novo">
                            <FaPlus />
                            Adicionar
                        </BotaoLink>
                    </>
                )}

                {mensagensConfiguradas.map((mensagem) => (
                    <CardMensagem key={mensagem.id} mensagem={mensagem} />
                ))}
            </section>
        </section>
    );
}