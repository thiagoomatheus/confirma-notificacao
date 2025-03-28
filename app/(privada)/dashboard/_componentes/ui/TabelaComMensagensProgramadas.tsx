import React from "react"
import { CabecalhoTabela, CelulaCabecalhoTabela, CelulaTabela, CorpoTabela, LegendaTabela, LinhaTabela, Tabela, TabelaRaiz } from "@/app/_componentes/ui/Tabela"
import Tooltip from "@/app/_componentes/ui/Tooltip";
import { Notificacao } from "@prisma/client";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TabelaComMensagensProgramadas() {

  const notificacoes: Notificacao[] = [
    {
      id: "1",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "2",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "3",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "1",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "2",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "3",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "1",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "2",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "3",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "1",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "2",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
    {
      id: "3",
      idUsuario: "1",
      idMensagem: "1",
      nome: "João",
      data: new Date(),
      hora: "10:00",
      local: "Clinica",
      obsTexto: "Chegar com dez minutos de antecedência",
      dataEnvio: new Date(),
      horaEnvio: "10:00",
      telefone: "14997249510",
      status: false,
    },
  ]

  return (
    <TabelaRaiz className="w-full max-w-7xl max-h-[700px] flex flex-col gap-5 flex-auto bg-gray-200 dark:bg-secundaria rounded-xl shadow-lg dark:shadow-gray-900">
      <Tabela>

        <LegendaTabela>
          Noficações agendadas para esta mensagem
        </LegendaTabela>

        <CabecalhoTabela className="sticky top-0 bg-gray-200 dark:bg-secundaria">
          <LinhaTabela>
            <CelulaCabecalhoTabela>
              Ações
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Status
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Telefone
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Nome na saudação
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Data do Compromisso
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Horário do Compromisso
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Local do Compromisso
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Momento do envio
            </CelulaCabecalhoTabela>
            <CelulaCabecalhoTabela>
              Obs
            </CelulaCabecalhoTabela>
          </LinhaTabela>
        </CabecalhoTabela>
        
        <CorpoTabela>
          {notificacoes.map((item) => (
            <LinhaTabela key={item.id}>
              <CelulaTabela className="flex items-center gap-x-3">

                <Link href={`/dashboard/mensagens/${item.id}/notificacoes/${item.id}/editar`} className="has-tooltip">
                  <Tooltip className="-ml-5 md:-ml-7" texto="Editar" />
                  <MdEdit className="text-xl" />
                </Link>

                <button className="has-tooltip">
                  <Tooltip className="-mt-8 md:-mt-12 -ml-6 md:-ml-8" texto="Excluir" />
                  <MdDelete className="text-xl text-red-700" />
                </button>

                <button className="has-tooltip">
                  <Tooltip className='-mt-8 md:-mt-12 -ml-10 md:-ml-12' texto="Enviar agora" />
                  <MdNotificationsActive className="text-xl text-primaria" />
                </button>
              </CelulaTabela>
              <CelulaTabela>
                {item.status ? "Enviado" : "Pendente"}
              </CelulaTabela>
              <CelulaTabela>
                {item.telefone}
              </CelulaTabela>
              <CelulaTabela>
                {item.nome || "N/A"}
              </CelulaTabela>
              <CelulaTabela>
                {item.data.toLocaleDateString()}
              </CelulaTabela>
              <CelulaTabela>
                {item.hora}
              </CelulaTabela>
              <CelulaTabela>
                {item.local || "N/A"}
              </CelulaTabela>
              <CelulaTabela>
                {item.dataEnvio.toLocaleDateString() + " às " + item.horaEnvio}
              </CelulaTabela>
              <CelulaTabela>
                {item.obsTexto?.slice(0, 20) + "..." || "N/A"}
              </CelulaTabela>
            </LinhaTabela>
          ))}
        </CorpoTabela>
        
      </Tabela>
    </TabelaRaiz>
  );
}