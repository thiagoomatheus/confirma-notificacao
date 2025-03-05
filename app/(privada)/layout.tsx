import { estaLogado } from "../utils/estaLogado";
import BarraNavegacao from "./dashboard/_componentes/ui/BarraNavegacao";

export default async function LayoutPrivate( { children }: { children: React.ReactNode } ) {

    await estaLogado()

    return (
        <main className="min-h-screen flex flex-col">
            <BarraNavegacao />
            {children}
        </main>
    )
}