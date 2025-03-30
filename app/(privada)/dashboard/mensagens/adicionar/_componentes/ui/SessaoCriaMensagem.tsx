"use client"

import React from "react";
import BotaoPadrao from "@/app/_componentes/ui/BotaoPadrao";
import CardComIcone from "@/app/_componentes/ui/CardComIcone";
import useMensagem from "../../_hooks/useMensagem";
import { LinhaDeProgresso } from "@/app/_componentes/ui/LinhaDeProgresso";
import SessaoComBorda from "@/app/_componentes/ui/SessaoComBorda";
import { FaSave } from "react-icons/fa";
import CelularFrame from "./CelularFrame";
import SessaoConfigMensagem from "../../../[id]/_componentes/ui/SessaoConfigMensagem";
import { Mensagem } from "@prisma/client";
import { BiSolidMessageEdit } from "react-icons/bi";
import { IoPlay } from "react-icons/io5";
import Label from "./Label";
import Formulario from "./Formulario";
import Fieldset from "./Fieldset";
import Input from "./Input";

type SessaoCriaMensagemProps = {
    mensagemExistente?: Mensagem
}

export default function SessaoCriaMensagem( { mensagemExistente }: SessaoCriaMensagemProps ) {

    const { mensagem, totalDeCampos, camposPreenchidos, iniciarMensagem, definirAssunto, definirSaudacao, definirCorpo, definirObsELocal, definirChamadaParaAcao, handleSubmit, register, errors } = useMensagem(mensagemExistente)

    return (
        <>
            {mensagem && (
                <>
                    <LinhaDeProgresso
                        variant="success"
                        max={totalDeCampos}
                        value={camposPreenchidos}
                        className="w-full max-w-xl"
                        label={`${parseInt((camposPreenchidos / totalDeCampos * 100).toString())}%`}
                        showAnimation={true}
                    />
                </>
            )}
            {!mensagem && !mensagemExistente && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">

                        <CardComIcone
                            className="border-purple-400"
                            titulo="Mensagem padrão"
                            texto="Defina um assunto, uma saudação e um corpo da mensagem que servirá de padrão para as notificações."
                            icone="💬"
                        />
                        <CardComIcone
                            className="border-blue-400"
                            titulo="Lembrete"
                            texto="Você selecionará o que deseja incluir na notificação como lembrete, por exemplo, você poderá incluir data, horário e local."
                            icone="📘"
                        />
                        <CardComIcone
                            className="border-yellow-500"
                            titulo="Chamada para ação"
                            texto="Aqui você poderá definir a ação que deseja que seus usuários executem, por exemplo, confirmar o recebimento."
                            icone="⚡"
                        />
                        <CardComIcone
                            className="border-primaria"
                            titulo="Notificações"
                            texto="Depois disso, você já poderá configurar suas notificações personalizadas para os seus usuários."
                            icone="🔔"
                        />
                    </div>
                    <BotaoPadrao
                        className="self-center w-full max-w-32"
                        onClick={iniciarMensagem}
                    >
                        <IoPlay className="text-2xl" />
                        Iniciar
                    </BotaoPadrao>
                </>
            )}

            {mensagem && (
                <section className="flex flex-col lg:flex-row gap-8">
                    <div className="flex flex-col gap-8 w-full">
                        {camposPreenchidos === 0 && (
                            <>
                                <SessaoComBorda>
                                    <h3>Para começar, defina um assunto...</h3>
                                    
                                    <p>Em poucas palavras descreva qual o assunto principal dessa mensagem. Isso vai te ajudar depois a identificar o objetivo da mensagem.</p>
                                    <p>Ex.: Confirmar presença.</p>
                        
                                    <Formulario funcao={handleSubmit(definirAssunto)}>
                                        <Label texto="Assunto:" obrigatorio >
                                            <Input
                                                {...register("assunto", { required: true })}
                                                erro={errors?.assunto}
                                                maxLength={50}
                                                placeholder="Ex.: Confirmar presença"
                                            />
                                        </Label>
                                    </Formulario>
                                </SessaoComBorda>
                            </>
                        )}
                        {camposPreenchidos === 1 && (
                            <>
                                <SessaoComBorda>
                                    <h3>Defina uma saudação...</h3>
                                    <p>A saudação é a primeira coisa que seus usuários verão ao abrir a notificação. Aqui você pode definir uma saudação simples.</p>
                                    <p>Ex.: Olá, tudo bem?</p>
                                    <p>Se desejar incluir um nome na saudação use a chave {`{nome}`}.</p>
                                    <p>Ex.: Olá, {`{nome}`}, tudo bem?</p>
                                    <p>Se desejar que não haja uma saudação na mensagem, deixe o campo em branco.</p>
                                    <Formulario funcao={handleSubmit(definirSaudacao)}>
                                        <Label texto="Saudação:">
                                            <Input
                                                {...register("saudacao")}
                                                erro={errors?.saudacao}
                                                maxLength={50}
                                                placeholder="Ex.: Olá, {nome}, tudo bem?"
                                            />
                                        </Label>
                                    </Formulario>
                                </SessaoComBorda>
                            </>
                        )}
                        {camposPreenchidos === 2 && (
                            <>
                                <SessaoComBorda>
                                    <h3>Defina o corpo da mensagem...</h3>
                                    <p>O corpo da mensagem é um dos aspectos mais importantes que você irá definir. Aqui você pode descrever do que se trata o lembrete.</p>
                                    <p>Ex.: Passando aqui pra lembrar seu compromisso. Segue a data e o horário abaixo:</p>
                                    <Formulario funcao={handleSubmit(definirCorpo)} >
                                        <Label texto="Corpo:" obrigatorio>
                                            <textarea
                                                {...register("corpo", { required: true })}
                                                className="max-w-xl max-h-60 p-2"
                                                maxLength={500}
                                                aria-invalid={errors.corpo ? "true" : "false"}
                                                placeholder="Ex.: Passando aqui pra lembrar seu compromisso. Segue a data e o horário abaixo:"
                                            />
                                            {errors.corpo?.message && <p className="text-red-600" role="alert">{errors.corpo?.message}</p>}
                                        </Label>
                                    </Formulario>
                                </SessaoComBorda>
                            </>
                        )}
                        {camposPreenchidos === 3 && (
                            <>
                                <SessaoComBorda>
                                    <h3>Defina alguns detalhes do lembrete...</h3>
                                    <p>A seção de lembrete de sua mensagem, por padrão, exibirá a data e o horário do compromisso, o qual será configurado no momento de criar a notificação. No entanto, também é possivel adicionar a informação de local e uma observação.</p>
                                    <p>Aqui você pode configurar se as informações de local e observação serão exibidas. Se aplicar ao seu caso, você poderá definir o local e uma observação padrão para todas as notificações a serem criadas.</p>
                                    <p>Defina as informações a seguir:</p>
                                    <Formulario funcao={handleSubmit(definirObsELocal)}>
                                        <Fieldset legenda="Local">
                                            <Label
                                                texto="Marque essa opção se deseja lembrar o local:"
                                                className="items-start justify-center md:gap-5"
                                            >
                                                <input type="checkbox" {...register("lembreteLocal")} />
                                            </Label>
                                            <Label
                                                texto="Preencha aqui o local se este se aplica a todas às notificações:"
                                                className="items-start justify-center md:gap-5"
                                            >
                                                <Input
                                                    {...register("localFixo")}
                                                    erro={errors?.localFixo}
                                                    maxLength={100}
                                                    placeholder="Ex.: Sala de reunião"
                                                />
                                            </Label>
                                        </Fieldset>
                        
                                        <Fieldset legenda="Observação">
                                            <Label
                                                texto="Marque essa opção se deseja adicionar uma observação:"
                                                className="items-start justify-center md:gap-5"
                                            >
                                                <input type="checkbox" {...register("obs")} />
                                            </Label>
                                            <Label
                                                texto="Preencha aqui uma observação se esta se aplica a todas às notificações:"
                                                className="justify-center md:gap-5"
                                            >
                                                <Input
                                                    {...register("obsFixo")}
                                                    erro={errors?.obsFixo}
                                                    maxLength={100}
                                                    placeholder="Ex.: Chegar com 10 min de antecedência."
                                                />
                                            </Label>
                                        </Fieldset>
                                    </Formulario>
                                </SessaoComBorda>
                            </>
                        )}
                        {camposPreenchidos === 4 && (
                            <>
                                <SessaoComBorda>
                                    <h3>Defina a chamada para ação</h3>
                                    <p>Aqui você pode definir a ação que deseja que seus usuários executem. Primeiro, você definirá a chamada para ação e em seguida as opções disponíveis ao usuário. Você pode definir até 4 opções para seu usuário escolher, sendo uma opção obrigatória.</p>
                                    <p>Ex.: Chamada para ação: Escolha uma opção | Opções: Opção1 - Confirmar presença, Opção2 - Cancelar compromisso</p>
                                    <Formulario funcao={handleSubmit(definirChamadaParaAcao)}>
                                        <Label obrigatorio texto="Chamada para ação:">
                                            <Input
                                                {...register("chamadaParaAcao", { required: true })}
                                                className="max-h-60"
                                                erro={errors?.chamadaParaAcao}
                                                maxLength={100}
                                                placeholder="Ex.: Escolha uma opção"
                                            />
                                        </Label>
                                        <Fieldset legenda="Opções">
                                            <p>Preencha as opções que deseja oferecer ao usuário:</p>
                                            <Label texto="Opção 1:" obrigatorio>
                                                <Input
                                                    {...register("opcao1", { required: true })}
                                                    erro={errors?.opcao1}
                                                    maxLength={100}
                                                    placeholder="Obrigatório"
                                                />
                                            </Label>
                                            <Label texto="Opção 2:">
                                                <Input
                                                    {...register("opcao2")}
                                                    erro={errors?.opcao2}
                                                    maxLength={100}
                                                    placeholder="Opcional"
                                                />
                                            </Label>
                                            <Label texto="Opção 3:">
                                                <Input
                                                    {...register("opcao3")}
                                                    erro={errors?.opcao3}
                                                    maxLength={100}
                                                    placeholder="Opcional"
                                                />
                                            </Label>
                                            <Label texto="Opção 4:">
                                                <Input
                                                    {...register("opcao4")}
                                                    erro={errors?.opcao4}
                                                    maxLength={100}
                                                    placeholder="Opcional"
                                                />
                                            </Label>
                                        </Fieldset>
                                    </Formulario>
                                </SessaoComBorda>
                            </>
                        )}
                        {camposPreenchidos === totalDeCampos && (
                            <SessaoComBorda>
                                <h3>Confira os dados de sua mensagem</h3>
                                <SessaoConfigMensagem mensagem={mensagem as Mensagem} />
                                <div className="flex gap-5 items-center justify-end">
                                    <BotaoPadrao className="self-end w-full max-w-40" onClick={iniciarMensagem}>
                                        <BiSolidMessageEdit className="text-lg md:text-2xl" />
                                        Editar
                                    </BotaoPadrao>
                                    <BotaoPadrao className="self-end w-full max-w-40" onClick={() => {}}>
                                        <FaSave className="text-lg md:text-2xl" />
                                        Salvar
                                    </BotaoPadrao>
                                </div>
                            </SessaoComBorda>
                        )}
                    </div>
                    {camposPreenchidos > 0 && (
                        <aside className="flex flex-col gap-5 items-center lg:items-end w-full">
                            <CelularFrame mensagem={mensagem} />
                        </aside>
                    )}
                </section>
            )}
        </>
    )
}