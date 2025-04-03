import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SelecaoDeContato } from "./SelecaoDeContato";
import { Contato } from "@/app/_lib/types";

type AccordionContatoParticipanteProps = {
    contatos?: Contato[]
    children: React.ReactNode
}

export default function AccordionContatoParticipante({ contatos, children }: AccordionContatoParticipanteProps) {

    return (
        <Accordion
            type="single" 
            collapsible
        >
            {contatos && contatos.length > 1 && (
                <AccordionItem 
                    value="item-1"
                >
                    <AccordionTrigger>
                        <p>Usar um contato do meu WhatsApp</p>
                    </AccordionTrigger>
                    <AccordionContent>
                        <SelecaoDeContato contatos={contatos} />
                    </AccordionContent>
                </AccordionItem>
            )}
            <AccordionItem 
                value="item-2"
            >
                <AccordionTrigger>
                    <p>Inserir número de WhatsApp</p>
                </AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}