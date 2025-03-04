import React from "react";
import toast from "react-hot-toast";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { signIn } from "next-auth/react";

import BotaoLogin from "../ui/BotaoLogin";

describe("BotaoLogin Component", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("deve renderizar o componente corretamente", () => {
    render(<BotaoLogin />);

    expect(screen.getByText("Entrar com Google")).toBeInTheDocument();
    expect(screen.getByTestId("icone-google")).toBeInTheDocument();
    expect(screen.getByTestId("icone-cadeado")).toBeInTheDocument();
  });

  test("deve chamar signIn com 'google' e redirecionar para /dashboard em caso de sucesso", async () => {
    render(<BotaoLogin />);

    const botao = screen.getByText("Entrar com Google");
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