import { LinhaDeProgresso } from "@/app/_componentes/ui/LinhaDeProgresso";
import CardBase from "./CardBase";
import { Mensagem } from "@prisma/client";
import BotaoLink from "@/app/_componentes/ui/BotaoLink";
import { FaList } from "react-icons/fa";

type CardMensagemProps = {
    mensagem: Mensagem
}

export default function CardMensagem( { mensagem }: CardMensagemProps ) {

    const porcentagem: string = `${mensagem.totalNotificacoes > 0 ? mensagem.notificacoesEnviadas / mensagem.totalNotificacoes * 100 : 0}%`

    return (
        <CardBase className="flex-col items-start md:w-[48%] gap-5">
            <h3>{mensagem.assunto}</h3>
            <p className="text-justify">{mensagem.corpo}</p>
            <p className="text-justify">{mensagem.obs}</p>
            <LinhaDeProgresso
                variant="success"
                value={mensagem.notificacoesEnviadas}
                max={mensagem.totalNotificacoes}
                showAnimation={true}
                label={porcentagem}
            />
            <p className="w-full text-center font-medium">
                Notificações enviadas: {mensagem.notificacoesEnviadas} / Total de notificações: {mensagem.totalNotificacoes}
            </p>
            <BotaoLink href={`/dashboard/mensagens/${mensagem.id}`}>
                <FaList />
                Ver mais
            </BotaoLink>
        </CardBase>
    )
}