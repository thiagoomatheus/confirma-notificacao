type SessaoComBordaProps = {
    children: React.ReactNode
}

export default function SessaoComBorda( { children }: SessaoComBordaProps ) {
    return (
        <section className="flex flex-col gap-5 md:gap-8 border border-terciaria p-2 sm:p-6">
            {children}
        </section>
    )
}