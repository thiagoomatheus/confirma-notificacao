import React from "react"
import { Notificacao } from "@prisma/client";
import { z } from "zod";

const notificacaoInicial: Partial<Notificacao> = {
    nome: "",
    telefone: "",
    status: false
}

const schema = z.object({
    idMensagem: z.string(),
    nome: z.optional(z.string().min(1, "O nome da saudação precisa ser preenchido.").max(100, "O nome da saudação precisa ter no máximo 100 caracteres.")),
    data: z.optional(z.date()),
    hora: z.optional(z.string().time("HH:mm")),
    local: z.optional(z.string().min(1, "O local do lembrete precisa ser preenchido.").max(100, "O local do lembrete precisa ter no máximo 100 caracteres.")),
    obsTexto: z.optional(z.string().min(1, "A observação do lembrete precisa ser preenchida.").max(500, "A observação do lembrete precisa ter no máximo 500 caracteres.")),
    dataEnvio: z.optional(z.date()),
    horaEnvio: z.optional(z.string().time("HH:mm")),
    telefone: z.optional(z.string().regex(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/, "O telefone precisa ser preenchido.")),
    status: z.optional(z.boolean())
})

export type Inputs = z.infer<typeof schema>

export default function useNotificacoes(notificacaoExistente?: Notificacao) {


}