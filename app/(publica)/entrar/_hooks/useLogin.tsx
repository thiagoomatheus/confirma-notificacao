"use client"

import { signIn } from "next-auth/react"
import toast from "react-hot-toast"

export default function useLogin() {
    
    const acaoLogin = async () => {
        const toastId = toast.loading("Entrando...")

        try {
            const result = await signIn('google', { redirectTo: '/dashboard' });
            if (result?.error) {
                toast.error(result.error, { id: toastId });
            } else {
                toast.success('Prossiga com o login', { id: toastId });
            }
        } catch (error) {
            toast.error('Erro ao fazer login', { id: toastId });
            console.error("Erro no login:", error); // Log do erro para debug
        }
    }

    return { acaoLogin }
}