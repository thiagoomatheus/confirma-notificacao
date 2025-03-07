type EditarMensagemProps = {
    params: Promise<{ id: string}>
}

export default async function EditarMensagem( { params }: EditarMensagemProps ) {

    const { id } = await params

    return (
        <>
            <h1>Editar Mensagem</h1>
            
        </>
    )
}