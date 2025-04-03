"use client"

import React from "react"
import { Mensagem, Notificacao } from "@prisma/client"
import useNotificacoes from "../../_hooks/useNotificacoes"
import { LinhaDeProgresso } from "@/app/_componentes/ui/LinhaDeProgresso"
import CardComIcone from "@/app/_componentes/ui/CardComIcone"
import BotaoPadrao from "@/app/_componentes/ui/BotaoPadrao"
import { IoPlay } from "react-icons/io5"
import CelularFrame from "../../../../_componentes/ui/CelularFrame"
import SessaoComBorda from "@/app/_componentes/ui/SessaoComBorda"
import Formulario from "../../../../_componentes/ui/Formulario"
import Label from "../../../../_componentes/ui/Label"
import Input from "../../../../_componentes/ui/Input"
import Fieldset from "../../../../_componentes/ui/Fieldset"
import AccordionContatoParticipante from "./AccordionInformarTelefone"
import { Contato } from "@/app/_lib/types"
import SessaoConfigNotificacao from "./SessaoConfigNotificacao"
import { BiSolidMessageEdit } from "react-icons/bi"
import { FaSave } from "react-icons/fa"

type SessaoCriaNotificacaoProps = {
    mensagem: Mensagem
    notificacaoExisitente?: Notificacao
    contatos?: Contato[]
}

export default function SessaoCriaNotificacao( { contatos, mensagem, notificacaoExisitente }: SessaoCriaNotificacaoProps ) {

    const {
        notificacao,
        totalDeCampos,
        camposPreenchidos,
        iniciarNotificacao,
        definirComplementoMensagem,
        definirMomentoDoEnvio,
        definirTelefone,
        handleSubmit,
        registerCondicional,
        errors
    } = useNotificacoes(mensagem.id, notificacaoExisitente)

    return (
        <>
            {notificacao && (
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

            {!notificacao && !notificacaoExisitente && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

                        <CardComIcone
                            className="border-yellow-400"
                            titulo="Complete a mensagem"
                            texto="Defina as informações complementares a mensagem como o nome na saudação, se necessário, e o lembrete."
                            icone="✏️"
                        />
                        <CardComIcone
                            className="border-red-400"
                            titulo="Defina o momento do envio"
                            texto="Você selecionará o que deseja incluir na notificação como lembrete, por exemplo, você poderá incluir data, horário e local."
                            icone="⏰"
                        />
                        <CardComIcone
                            className="border-yellow-900"
                            titulo="Recebedor da notificação"
                            texto="Aqui você poderá definir a ação que deseja que seus usuários executem, por exemplo, confirmar o recebimento."
                            icone="📤"
                        />
                    </div>
                    <BotaoPadrao
                        className="self-center w-full max-w-32"
                        onClick={iniciarNotificacao}
                    >
                        <IoPlay className="text-2xl" />
                        Iniciar
                    </BotaoPadrao>
                </>
            )}
            {notificacao && (
                <section className="flex flex-col lg:flex-row gap-8">
                    <div className="flex flex-col gap-8 w-full">
                        {camposPreenchidos === 0 && (
                            <SessaoComBorda>

                                <h3>Complete a mensagem</h3>
                                <p>Aqui é onde você define as informações que vão completar sua mensagem, incluindo o lembrete.</p>

                                <Formulario onSubmit={handleSubmit(definirComplementoMensagem)}>
                                    {mensagem.saudacaoNome && 
                                        <Fieldset legenda="Saudação">
                                            <Label obrigatorio texto="Nome da saudação">
                                                <Input
                                                    {...registerCondicional("nome")}
                                                    erro={errors?.nome}
                                                    maxLength={100}
                                                />
                                            </Label>
                                        </Fieldset>
                                    }
                                    <Fieldset legenda="Lembrete">
                                        <Label obrigatorio texto="Data e hora:">
                                            <div className="flex gap-5">
                                                <Input
                                                    {...registerCondicional("dataEHora")}
                                                    erro={errors?.dataEHora}
                                                    type="datetime-local"
                                                />
                                            </div>
                                        </Label>
                                        {mensagem.lembreteLocal && !mensagem.localFixo &&
                                            <Label obrigatorio texto="Local:">
                                                <Input
                                                    {...registerCondicional("local")}
                                                    erro={errors?.local}
                                                    maxLength={100}
                                                />
                                            </Label>
                                        }
                                        {mensagem.obs && !mensagem.obsFixo &&
                                            <Label obrigatorio texto="Observação:">
                                                <Input
                                                    {...registerCondicional("obsTexto")}
                                                    erro={errors?.obsTexto}
                                                    maxLength={500}
                                                />
                                            </Label>
                                        }
                                    </Fieldset>
                                </Formulario>
                            </SessaoComBorda>
                        )}
                        {camposPreenchidos === 1 && (
                            <SessaoComBorda>

                                <h3>Configure o momento do envio</h3>
                                <p>Aqui você pode configurar quando deseja enviar a mensagem. Você seleciona o dia e a hora para que a notifficação seja enviada.</p>

                                <Formulario onSubmit={handleSubmit(definirMomentoDoEnvio)}>
                                    <Fieldset legenda="Momento do envio">
                                        <Label obrigatorio texto="Data e hora:">
                                            <Input
                                                {...registerCondicional("dataEHoraEnvio")}
                                                erro={errors?.dataEHoraEnvio}
                                                type="datetime-local"
                                            />
                                        </Label>
                                    </Fieldset>
                                </Formulario>
                            </SessaoComBorda>
                        )}

                        {camposPreenchidos === 2 && (
                            <SessaoComBorda>

                                <h3>Configure o telefone do usuário</h3>
                                <p>Agora só falta você informar o telefone do usuário para que a notificação seja agendada.</p>

                                <Formulario onSubmit={handleSubmit(definirTelefone)}>
                                    <Fieldset legenda="Telefone">

                                        {contatos && contatos.length > 0 && 
                                            <AccordionContatoParticipante>
                                                <Label obrigatorio texto="Número do WhatsApp:">
                                                    <Input
                                                        {...registerCondicional("telefone")}
                                                        erro={errors?.telefone}
                                                        type="tel"
                                                    />
                                                </Label>
                                            </AccordionContatoParticipante>
                                        }

                                        {!contatos && 
                                           <Label obrigatorio texto="Número do WhatsApp:">
                                                <Input
                                                    {...registerCondicional("telefone")}
                                                    erro={errors?.telefone}
                                                    type="tel"
                                                />
                                            </Label> 
                                        }

                                    </Fieldset>
                                </Formulario>
                            </SessaoComBorda>
                        )}

                        {camposPreenchidos === totalDeCampos && (
                            <SessaoComBorda>
                                <h3>Verifique as informações </h3>

                                <p>Chegamos na etapa final! Agora é só você verificar se as informações estão corretas.</p>

                                <SessaoConfigNotificacao notificacao={notificacao as Notificacao} />

                                <div className="flex gap-5 items-center justify-end">

                                    <BotaoPadrao
                                        className="self-end w-full max-w-40"
                                        onClick={iniciarNotificacao}
                                    >
                                        <BiSolidMessageEdit className="text-lg md:text-2xl" />
                                        Editar
                                    </BotaoPadrao>

                                    <BotaoPadrao
                                        className="self-end w-full max-w-40"
                                        onClick={() => {}}
                                    >
                                        <FaSave className="text-lg md:text-2xl" />
                                        Salvar
                                    </BotaoPadrao>
                                </div>

                            </SessaoComBorda>
                        )}
                    </div>
                    {camposPreenchidos >= 0 && (
                        <aside className="flex flex-col gap-5 items-center lg:items-end w-full">
                            <CelularFrame
                                mensagem={mensagem}
                                notificacao={notificacao}
                            />
                        </aside>
                    )}
                </section>
            )}
        </>
    )
}