export default function LayoutPublic( { children }: { children: React.ReactNode } ) {
    return (
        <main className="min-h-screen flex justify-center">
            {children}
        </main>
    )
}