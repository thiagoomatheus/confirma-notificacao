import CardBase from "./CardBase";

type CardProps = {
    numero: number
    descricao: string
    icone?: React.ReactNode
}

export default function CardNumeros( { numero, descricao, icone }: CardProps ) {
    return (
        <CardBase className="md:w-[47%]">
            {icone}
            <div className="flex flex-col">
                <p className="font-bold text-xl md:text-2xl">
                    {numero}
                </p>
                <p>
                    {descricao}
                </p>
            </div>
        </CardBase>
    );
}