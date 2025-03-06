import { Mensagem } from "@prisma/client";
import CardMensagem from "./CardMensagem";
import BotaoLink from "@/app/_componentes/ui/BotaoLink";
import { FaPlus } from "react-icons/fa6";

type SessaoMensagensType = {
    mensagensConfiguradas: Mensagem[]
    limiteExibicao?: number
}

export default function SessaoMensagens( { mensagensConfiguradas, limiteExibicao }: SessaoMensagensType ) {

    const mensagensASeremExibidas = limiteExibicao ? mensagensConfiguradas.slice(0, limiteExibicao) : mensagensConfiguradas

    return (
        <section className="flex flex-col md:flex-row gap-4 w-full flex-wrap">

            {mensagensASeremExibidas.length <= 0 && (
                <>
                    <p>Voce ainda nao possui mensagens configuradas. Clique no botão abaixo para adicionar uma nova.</p>
                    <BotaoLink href="/dashboard/mensagens/novo">
                        <FaPlus />
                        Adicionar
                    </BotaoLink>
                </>
            )}

            {mensagensASeremExibidas.map((mensagem) => (
                <CardMensagem key={mensagem.id} mensagem={mensagem} />
            ))}
        </section>
    );
}