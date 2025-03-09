type AdicionarNotificacaoProps = {
    params: Promise<{ id: string, idNotificacao: string}>
}

export default async function AdicionarNotificacao( { params }: AdicionarNotificacaoProps ) {

    const { id, idNotificacao } = await params

    return (
        <>
        </>
    )
}