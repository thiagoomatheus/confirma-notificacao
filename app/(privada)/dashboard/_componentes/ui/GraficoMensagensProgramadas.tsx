import { GraficoEmCirculo } from "@/app/_componentes/ui/GraficoEmCirculo";
import CardBase from "./CardBase";

type GraficoMensagensProgramadasProps = {
    dados: {
        totalMensagensProgramadas: number
        mensagensProgramadasJaEnviadas: number
    }
}

export default function GraficoMensagensProgramadas ({ dados }: GraficoMensagensProgramadasProps) {
    
    const porcentagem: string = `${dados.totalMensagensProgramadas > 0 ? dados.mensagensProgramadasJaEnviadas / dados.totalMensagensProgramadas * 100 : 0}%`

    return (
        <CardBase className="flex-col gap-5">

            <h3 className="text-center">
                Notificações enviadas
            </h3>

            <p className="text-xs bg-terciaria py-2 px-4 rounded-lg text-white font-bold shadow-lg">{new Date().toLocaleDateString()}</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5">

                <GraficoEmCirculo
                    variant="success"
                    value={dados.mensagensProgramadasJaEnviadas}
                    max={dados.totalMensagensProgramadas}
                    className="w-32 h-32 lg:w-48 lg:h-48"
                    showAnimation={true}
                >
                    <span className="text-sm md:text-base font-medium text-texto">
                        {porcentagem}
                    </span>
                </GraficoEmCirculo>

            </div>

        </CardBase>
    )
}