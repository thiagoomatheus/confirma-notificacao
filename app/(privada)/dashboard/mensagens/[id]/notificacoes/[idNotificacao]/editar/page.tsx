type EditarNotificacaoProps = {
    params: Promise<{ id: string, idNotificacao: string}>
}

export default async function EditarNotificacao( { params }: EditarNotificacaoProps ) {

    const { id, idNotificacao } = await params

    return (
        <>
        </> 
    )
}