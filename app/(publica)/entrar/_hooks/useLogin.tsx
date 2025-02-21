"use client"

import { signIn } from "next-auth/react"
import toast from "react-hot-toast"

export default function useLogin() {
    
    const acaoLogin = async () => {
        const toastId = toast.loading("Entrando...")

        const result = await signIn("google", { redirectTo: "/dashboard" })

        if (result?.error) return toast.error(result.error, { id: toastId })
            
        return toast.success("Prossiga com o login", { id: toastId })
    }

    return { acaoLogin }
}