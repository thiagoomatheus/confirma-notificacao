export default function LayoutPerfil( { children }: { children: React.ReactNode } ) {
    return (
        <main className="p-4 md:p-10 w-full max-w-7xl flex flex-col self-center gap-5 md:gap-10">
            {children}
        </main>
    )
}