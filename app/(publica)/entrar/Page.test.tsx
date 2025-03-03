import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { redirect } from "next/navigation";
import { auth } from "@/app/_lib/auth/auth";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

import Page from "./page";

describe("Pagina Entrar", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve verificar sessao nula', async () => {
    render(await Page ());

    await waitFor(() => {
      expect(auth).toHaveBeenCalled();
    });

    expect(auth).toHaveReturnedTimes(1);
    const mockReturnValue = await (auth as jest.Mock).mock.results[0].value;
    expect(mockReturnValue).toBeNull();
    
    expect(redirect).not.toHaveBeenCalled();
  });

  test('deve renderizar pagina se sessao for nula', async () => {
    const { getByText, getByAltText, getByRole } = render(await Page ());

    await waitFor(() => {
      expect(auth).toHaveBeenCalled();
    });

    const titulo = getByText("Conecte-se");
    const imagem = getByAltText("Foto retirada de https://storyset.com/online")
    const botaoLogin = getByRole("button", { name: "Entrar com Google" });

    expect(titulo).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(botaoLogin).toBeInTheDocument();

  })

  test("deve renderizar opções de login", async () => {
    const { getByText } = render(await Page());

    expect(getByText("Entrar com Google")).toBeInTheDocument();
  });

  test("deve exibir links para paginas de politica de privacidade e termos de servico", async () => {
    const { getByText } = render(await Page());

    const termosDeServico = getByText("Termos de serviço");
    const politicasDePrivacidade = getByText("Políticas de privacidade");

    expect(termosDeServico).toBeInTheDocument();
    expect(politicasDePrivacidade).toBeInTheDocument();

    expect(termosDeServico).toHaveAttribute("href", "/termos-de-servico");
    expect(politicasDePrivacidade).toHaveAttribute("href", "/politicas-de-privacidade");

  });

  test("deve chamar signIn com 'google' e redirecionar para /dashboard em caso de sucesso", async () => {
    const { getByText } = render(await Page());

    const botao = getByText("Entrar com Google");
    fireEvent.click(botao);

    expect(toast.loading).toHaveBeenCalledWith("Entrando...");

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("google", { redirectTo: "/dashboard" });
    });

    await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith("Prossiga com o login", expect.any(Object));
      });
  });

});