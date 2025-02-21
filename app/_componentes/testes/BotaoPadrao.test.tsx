import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, jest, test } from "@jest/globals";
import '@testing-library/jest-dom/jest-globals';
import BotaoPadrao from "../ui/BotaoPadrao";

describe("BotaoPadrao", () => {
    
    test("Deve renderizar o componente BotaoPadrao", () => {
        render(<BotaoPadrao>Teste</BotaoPadrao>)
        expect(screen.getByText("Teste"))
    })

    test("Deve renderizar o componente com className", () => {

        render(<BotaoPadrao className="bg-transparent">Teste</BotaoPadrao>)
        expect(screen.getByText("Teste")).toHaveClass("bg-transparent")
    })

    test("Deve renderizar o componente com hover", () => {
        
        render(<BotaoPadrao>Teste</BotaoPadrao>)
        expect(screen.getByText("Teste")).toHaveClass("hover:text-white")
    })

    test("Deve verificar se o botão foi clicado", () => {

        const onClick = jest.fn()

        render(<BotaoPadrao onClick={onClick}>Teste</BotaoPadrao>)

        fireEvent.click(screen.getByText("Teste"))

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})