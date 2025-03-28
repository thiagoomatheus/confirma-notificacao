import React from "react"
import { Mensagem } from "@prisma/client";
import CardConfiguracao from "./CardConfiguracao";

type SessaoConfigMensagemProps = {
    mensagem: Mensagem
}

export default function SessaoConfigMensagem( { mensagem }: SessaoConfigMensagemProps ) {

    const opcoes: string = JSON.parse(mensagem.opcoes as string).join(" | ")

    return (
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
                valor={mensagem?.corpo.slice(0, 50) + (mensagem?.corpo.length > 50 ? "..." : "")}
            />
            <CardConfiguracao
                label="Lembrete local"
                valor={mensagem?.lembreteLocal ? "Sim" : "Nao"}
            />
            {mensagem?.localFixo && <CardConfiguracao
                label="Local fixo"
                valor={mensagem?.localFixo || "Nao informado"}
            />}
            <CardConfiguracao
                label="Observação"
                valor={mensagem?.obs ? "Sim" : "Nao"}
            />
            {mensagem?.obsFixo && <CardConfiguracao
                label="Observação"
                valor={mensagem?.obsFixo || "Nao informado"}
            />}
            <CardConfiguracao
                label="Ação do texto"
                valor={mensagem?.chamadaParaAcao || "Nao informado"}
            />
            <CardConfiguracao
                label="Opções"
                valor={opcoes.slice(0, 50) + (opcoes.length > 50 ? "..." : "") || "Nao informado"}
            />

        </section>
    )
}