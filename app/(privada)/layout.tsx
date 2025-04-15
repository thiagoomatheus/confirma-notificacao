import { estaLogado } from "../utils/estaLogado";
import BarraNavegacao from "./dashboard/_componentes/ui/BarraNavegacao";

export default async function LayoutPrivate( { children }: { children: React.ReactNode } ) {

    await estaLogado()

    return (
        <div className="flex flex-col w-full">
            <BarraNavegacao />
            <main className="p-4 w-full max-w-7xl flex flex-col self-center gap-5 md:gap-10">
                {children}
            </main>
        </div>
    )
}