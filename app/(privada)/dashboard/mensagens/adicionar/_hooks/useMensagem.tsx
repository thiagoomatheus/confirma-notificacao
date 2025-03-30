"use client"

import { Mensagem } from "@prisma/client";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const mensagemInicial: Partial<Mensagem> = {
    assunto: "",
    saudacao: "",
    saudacaoNome: false,
    corpo: "",
    lembreteLocal: false,
    obs:  false
}

const schema = z.object({
    assunto: z.optional(z.string().min(1, "O assunto da mensagem precisa ser preenchido.").max(50, "O assunto da mensagem precisa ter no máximo 50 caracteres.")),
    saudacao: z.optional(z.string().min(0, "A saudação da mensagem precisa ser preenchida.").max(50, "A saudação da mensagem precisa ter no máximo 50 caracteres.")),
    corpo: z.optional(z.string().min(1, "O corpo da mensagem precisa ser preenchido.").max(500, "O corpo da mensagem precisa ter no máximo 1000 caracteres.")),
    lembreteLocal: z.optional(z.boolean()),
    localFixo: z.optional(z.string().min(0, "O local fixo da mensagem precisa ser preenchido.").max(100, "O local fixo da mensagem precisa ter no máximo 50 caracteres.")),
    obs: z.optional(z.boolean()),
    obsFixo: z.optional(z.string().min(0, "A observação da mensagem precisa ser preenchida.").max(100, "A observação da mensagem precisa ter no máximo 500 caracteres.")),
    chamadaParaAcao: z.optional(z.string().min(1, "A chamada para ação da mensagem precisa ser preenchida.").max(100, "A chamada para ação da mensagem precisa ter no.máximo 100 caracteres.")),
    opcao1: z.optional(z.string().min(1, "A primeira opção da mensagem precisa ser preenchida.").max(100, "A primeira opção da mensagem precisa ter no.maxcdn 100 caracteres.")),
    opcao2: z.optional(z.string().min(0, "A segunda opção da mensagem precisa ser preenchida.").max(100, "A segunda opção da mensagem precisa ter no.maxcdn 100 caracteres.")),
    opcao3: z.optional(z.string().min(0, "A terceira opção da mensagem precisa ser preenchida.").max(100, "A terceira opção da mensagem precisa ter no.maxcdn 100 caracteres.")),
    opcao4: z.optional(z.string().min(0, "A quarta opção da mensagem precisa ser preenchida.").max(100, "A quarta opção da mensagem precisa ter no.maxcdn 100 caracteres.")),
})

export type Inputs = z.infer<typeof schema>

export default function useMensagem(mensagemExistente?: Mensagem) {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema),
        defaultValues: mensagemExistente && {
            ...mensagemExistente,
            saudacao: mensagemExistente?.saudacao ? mensagemExistente.saudacao : "",
            localFixo: mensagemExistente?.localFixo ?? "",
            obsFixo: mensagemExistente?.obsFixo ?? "",
            chamadaParaAcao: mensagemExistente?.chamadaParaAcao ?? "",
            opcao1: mensagemExistente?.opcoes ? JSON.parse(mensagemExistente.opcoes as string)[0] : "",
            opcao2: mensagemExistente?.opcoes ? JSON.parse(mensagemExistente.opcoes as string)[1] : "",
            opcao3: mensagemExistente?.opcoes ? JSON.parse(mensagemExistente.opcoes as string)[2] : "",
            opcao4: mensagemExistente?.opcoes ? JSON.parse(mensagemExistente.opcoes as string)[3] : "",
        }
    });
    
    const [mensagem, setMensagem] = useState<Partial<Mensagem> | undefined>(mensagemExistente)
    const totalDeCampos = 5
    const [camposPreenchidos, setCamposPreenchidos] = useState<number>(0)

    function iniciarMensagem() {
        setMensagem(mensagemInicial)
        setCamposPreenchidos(0)
    }

    const definirAssunto: SubmitHandler<Inputs> = (data: Inputs) => {

        const assunto = data.assunto?.trim()
        
        setMensagem({
            ...mensagem,
            assunto
        })
        setCamposPreenchidos(camposPreenchidos + 1)
    }

    const definirSaudacao: SubmitHandler<Inputs> = (data: Inputs) => {

        const saudacao = data.saudacao?.trim()
       
        setMensagem({
            ...mensagem,
            saudacao: saudacao === "" ? null : saudacao,
            saudacaoNome: saudacao?.includes("{nome}")
        })
        setCamposPreenchidos(camposPreenchidos + 1)
    }

    const definirCorpo: SubmitHandler<Inputs> = (data: Inputs) => {

        const corpo = data.corpo?.trim()
       
        setMensagem({
            ...mensagem,
            corpo
        })
        setCamposPreenchidos(camposPreenchidos + 1)
    }

    const definirObsELocal: SubmitHandler<Inputs> = (data: Inputs) => {

        const lembreteLocal = data.lembreteLocal
        const localFixo = data.localFixo?.trim()
        const obs = data.obs
        const obsFixo = data.obsFixo?.trim()

        setMensagem({
            ...mensagem,
            lembreteLocal,
            localFixo,
            obs,
            obsFixo
        })
        setCamposPreenchidos(camposPreenchidos + 1)
    }

    const definirChamadaParaAcao: SubmitHandler<Inputs> = (data: Inputs) => {

        const chamadaParaAcao = data.chamadaParaAcao?.trim()
        const opcao1 = data.opcao1?.trim()
        const opcao2 = data.opcao2?.trim()
        const opcao3 = data.opcao3?.trim()
        const opcao4 = data.opcao4?.trim()

        const opcoes = [opcao1, opcao2, opcao3, opcao4].filter((opcao) => opcao !== "")

        setMensagem({
            ...mensagem,
            chamadaParaAcao,
            opcoes: JSON.stringify(opcoes)
        })
        setCamposPreenchidos(camposPreenchidos + 1)
    }

    return {
        mensagem,
        totalDeCampos,
        camposPreenchidos,
        iniciarMensagem,
        definirAssunto,
        definirSaudacao,
        definirCorpo,
        definirObsELocal,
        definirChamadaParaAcao,
        register,
        handleSubmit,
        errors
    }
}