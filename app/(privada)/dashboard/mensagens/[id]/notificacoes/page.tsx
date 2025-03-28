import { redirect } from "next/navigation"

type NotificacoesProps = {
    params: Promise<{ id: string}>
}

export default async function Notificacoes( { params }: NotificacoesProps ) {

    const { id } = await params

    return redirect(`/dashboard/mensagens/${id}`)
}