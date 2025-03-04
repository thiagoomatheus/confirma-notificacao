import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import '@testing-library/jest-dom/jest-globals';
import BotaoLink from "../ui/BotaoLink";

describe("BotaoLink", () => {
    
    test("Deve renderizar o componente BotaoLink", () => {
        render(<BotaoLink>Teste</BotaoLink>)
        expect(screen.getByText("Teste"))
    })

    test("Deve renderizar o componente com hover", () => {
        
        render(<BotaoLink>Teste</BotaoLink>)
        expect(screen.getByText("Teste")).toHaveClass("hover:text-white")
    })

    test("Deve renderizar o componente com href", () => {

        render(<BotaoLink href="#">Teste</BotaoLink>)
        expect(screen.getByText("Teste")).toHaveAttribute("href", "#")
    })

    test("Deve renderizar o componente com className", () => {

        render(<BotaoLink className="bg-transparent">Teste</BotaoLink>)
        expect(screen.getByText("Teste")).toHaveClass("bg-transparent")
    })
})