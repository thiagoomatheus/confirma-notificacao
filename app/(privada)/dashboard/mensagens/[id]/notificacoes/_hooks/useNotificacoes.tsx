"use client"

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from 'dayjs'

const notificacaoInicial: Partial<Notificacao> = {
    nome: null,
    telefone: "",
    status: false
}

export default function useNotificacoes(idMensagem?: Mensagem["id"], notificacaoExistente?: Notificacao) {
    
    const [notificacao, setNotificacao] = useState<Partial<Notificacao> | undefined>(notificacaoExistente || undefined)
    
    const totalDeCampos = 3
    const [camposPreenchidos, setCamposPreenchidos] = useState<number>(0)

    const schema = z.object({
        nome: z.optional(
            z.string()
            .min(1, "O nome da saudação precisa ser preenchido.")
            .max(100, "O nome da saudação precisa ter no máximo 100 caracteres.")
        ),
        dataEHora: z.optional(
            z.string()
            .refine(data => !data || dayjs(data).isValid(), "Data inválida")
            .refine(data => dayjs().isBefore(data), "Menor que momento atual.")
        ),
        local: z.optional(
            z.string()
            .min(1, "O local do lembrete precisa ser preenchido.")
            .max(100, "O local do lembrete precisa ter no máximo 100 caracteres.")
        ),
        obsTexto: z.optional(
            z.string()
            .min(1, "A observação do lembrete precisa ser preenchida.")
            .max(500, "A observação do lembrete precisa ter no máximo 500 caracteres.")
        ),
        dataEHoraEnvio: z.optional(
            z.string()
            .refine(data => !data || dayjs(data).isValid(), "Data inválida")
            .refine(data => dayjs().isBefore(data), "Menor que momento atual.")
            .refine(data => !data || dayjs(data).isAfter(dayjs(notificacao?.data || '')), "Antes do compromisso.")
        ),
        telefone: z.optional(
            z.string()
            .min(10, "O telefone precisa ser preenchido.")
            .refine(telefoneBruto => {
                const regexTelefone: RegExp = /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/
                const telefone = telefoneBruto.startsWith("+") ? telefoneBruto.slice(3).trim().replace(/[^0-9]/g, "") : telefoneBruto.trim().replace(/[^0-9]/g, "")
                return regexTelefone.test(telefone)
            }, "Telefone inválido.")
        ),
    })
    
    type Inputs = z.infer<typeof schema>

    const stringData = `${notificacaoExistente?.dataEnvio.toLocaleString("pt-BR").split(",")[0]} ${notificacaoExistente?.horaEnvio}`
    
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema),
        defaultValues: notificacaoExistente && {
            ...notificacaoExistente,
            nome: notificacaoExistente?.nome || "",
            dataEHora: dayjs(stringData).format("YYYY-MM-DD HH:mm"),
            local: notificacaoExistente?.local || "",
            obsTexto: notificacaoExistente?.obsTexto || "",
            telefone: notificacaoExistente?.telefone || "",
            dataEHoraEnvio: undefined,
        }
    });

    const [notificacao, setNotificacao] = useState<Partial<Notificacao> | undefined>(undefined)

    const totalDeCampos = 5
    const [camposPreenchidos, setCamposPreenchidos] = useState<number>(0)

    function iniciarNotificacao() {
        setNotificacao(notificacaoInicial)
        setCamposPreenchidos(0)
    }

    return {
        notificacao,
        camposPreenchidos,
        totalDeCampos,
        errors,
        iniciarNotificacao,
        register,
        handleSubmit,
    }
}