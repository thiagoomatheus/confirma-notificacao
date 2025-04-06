import { estaLogado } from "../utils/estaLogado";
import BarraNavegacao from "./dashboard/_componentes/ui/BarraNavegacao";
import Menu from "./dashboard/_componentes/ui/Menu";

export default async function LayoutPrivate( { children }: { children: React.ReactNode } ) {

    await estaLogado()

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-start">
            <Menu />
            <div className="flex flex-col w-full">
                <BarraNavegacao />
                <main className="p-4 w-full max-w-7xl flex flex-col self-center gap-5 md:gap-10">
                    {children}
                </main>
            </div>
        </div>
    )
}