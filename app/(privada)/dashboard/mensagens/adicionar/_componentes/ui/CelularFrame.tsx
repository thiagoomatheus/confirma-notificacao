"use client"

import React from "react"
import { Mensagem } from "@prisma/client"
import { FaList } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import { MdOutlineClose } from "react-icons/md";

type CelularFrameProps = {
    mensagem: Partial<Mensagem>
}

export default function CelularFrame( { mensagem }: CelularFrameProps ) {

    const [mostrarOpcoes, setMostrarOpcoes] = React.useState<boolean>(false)

    const dadosMensagem = {
        assunto: mensagem?.assunto,
        saudacao: mensagem?.saudacao === "" ? "Cumprimente o usuário com uma saudação" : mensagem?.saudacao,
        corpo: mensagem?.corpo || "Descreva o que você deseja lembrar ao usuário",
        lembreteLocal: mensagem?.lembreteLocal,
        obs: mensagem?.obs,
        chamadaParaAcao: mensagem?.chamadaParaAcao || "Indique o que o usuário precisa fazer",
        localFixo: mensagem?.localFixo,
        obsFixo: mensagem?.obsFixo,
        opcoes: mensagem?.opcoes || JSON.stringify(["Opção 1", "Opção 2", "Opção 3", "Opção 4"])
    }

    return (
        <div className="celular-frame">
            <div className="celular-topo" />
            <div className="celular-conteudo">
                <div className="flex flex-row pl-5 md:pl-7 pr-2 justify-end">
                    <div className="celular-mensagem">
                        {dadosMensagem?.saudacao && <p className="font-bold">{dadosMensagem.saudacao}</p>}
                        <p>{dadosMensagem?.corpo}</p>
                        <p>Data: xx/xx/xxxx</p>
                        <p>Hora: xx:xx</p>
                        {dadosMensagem.lembreteLocal && <p>Local: {dadosMensagem.localFixo ? dadosMensagem.localFixo : "..... ..... ... ....."}</p>}
                        {dadosMensagem.obs && <p>Obs: {dadosMensagem.obsFixo ? dadosMensagem.obsFixo : "..... ..... ... ....."}</p>}
                        <button disabled={!mensagem.chamadaParaAcao} className="flex justify-center items-center gap-2 text-primaria pt-5" onClick={() => setMostrarOpcoes(true)}>
                            <FaList className="text-lg" />
                            <p className="font-bold">{dadosMensagem.chamadaParaAcao}</p>
                        </button>
                    </div>
                    <span className="celular-mensagem-detalhe" />
                </div>
                {!mostrarOpcoes && 
                <div className="celular-rodape">
                    <div className="bg-gray-100 dark:bg-gray-600 w-10/12 h-10 rounded-full" />
                    <div className="bg-primaria p-3 rounded-full flex items-center justify-center">
                        <IoSend className="text-lg text-bg" />
                    </div>
                </div>
            }
            {mensagem.opcoes && mostrarOpcoes && 
                <div className="celular-opcoes">
                    <header className="flex items-center border-b border-gray-100 dark:border-gray-600 py-2">
                        <MdOutlineClose className="text-2xl text-gray-600 absolute cursor-pointer" onClick={() => setMostrarOpcoes(false)} />
                        {mensagem?.chamadaParaAcao && <p className="font-bold m-auto">{mensagem.chamadaParaAcao}</p>}
                    </header>
                    {JSON.parse(mensagem.opcoes as string).map((opcao: string, index: number) => (
                        <div key={index} className="flex flex-row justify-between items-center">
                            <p>{opcao}</p>
                            <input type="radio" disabled />
                        </div>
                    ))}
                    <footer className="py-3">
                        <p className="text-sm text-center">Toque para selecionar um item.</p>
                    </footer>
                </div>
            }
            </div>
        </div>
    )
}