"use server"

import { redirect } from "next/navigation";
import { auth } from "../_lib/auth/auth";

export const estaLogado = async () => {

    const sessao = await auth();

    if (!sessao) redirect("/entrar");
}