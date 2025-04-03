import React from "react"
import { Notificacao } from "@prisma/client";
import CardConfiguracao from "../../../_componentes/ui/CardConfiguracao";

type SessaoConfigNotificacaoProps = {
    notificacao: Notificacao
}

export default function SessaoConfigNotificacao( { notificacao }: SessaoConfigNotificacaoProps ) {

    return (
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap">

            <CardConfiguracao
                label="Id da Mensagem"
                valor={notificacao.idMensagem}
            />

            {notificacao?.nome &&
                <CardConfiguracao
                    label="Nome"
                    valor={notificacao?.nome}
                />
            }

            <CardConfiguracao
                label="Data do compromisso"
                valor={notificacao.data.toLocaleDateString("pt-BR").split(",")[0]}
            />

            <CardConfiguracao
                label="Hora do compromisso"
                valor={notificacao.hora}
            />

            {notificacao?.local &&
                <CardConfiguracao
                    label="Local"
                    valor={notificacao?.local}
                />
            }

            {notificacao?.obsTexto &&
                <CardConfiguracao
                    label="Observação"
                    valor={notificacao?.obsTexto}
                />
            }

            <CardConfiguracao
                label="Dia da notificação"
                valor={notificacao.data.toLocaleString("pt-BR").split(",")[0]}
            />

            <CardConfiguracao
                label="Hora da notificação"
                valor={notificacao.horaEnvio}
            />

            {notificacao?.telefone &&
                <CardConfiguracao
                    label="Telefone"
                    valor={notificacao?.telefone}
                />
            }

            <CardConfiguracao
                label="Status"
                valor={notificacao.status ? "Enviado" : "Pendente"}
            />

        </section>
    )
}