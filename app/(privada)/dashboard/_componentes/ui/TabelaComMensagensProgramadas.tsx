import { CabecalhoTabela, CelulaCabecalhoTabela, CelulaTabela, CorpoTabela, LegendaTabela, LinhaTabela, RodapeTabela, Tabela, TabelaRaiz } from "@/app/_componentes/ui/Tabela"

export default function TabelaComMensagensProgramadas() {

    const data: Array<{
        id: number
        name: string
        sales: string
        region: string
        status: string
        deltaType: string
        hours: number
      }> = [
        {
          id: 1,
          name: "Peter McCrown",
          sales: "1,000,000",
          region: "Region A",
          status: "overperforming",
          deltaType: "moderateIncrease",
          hours: 100,
        },
        {
          id: 2,
          name: "Jon Mueller",
          sales: "2,202,000",
          region: "Region B",
          status: "overperforming",
          deltaType: "moderateIncrease",
          hours: 110,
        },
        {
          id: 3,
          name: "Peter Federer",
          sales: "1,505,000",
          region: "Region C",
          status: "underperforming",
          deltaType: "moderateDecrease",
          hours: 90,
        },
        {
          id: 4,
          name: "Maxime Bujet",
          sales: "500,000",
          region: "Region D",
          status: "overperforming",
          deltaType: "moderateDecrease",
          hours: 92,
        },
        {
          id: 5,
          name: "Emma Nelly",
          sales: "600,000",
          region: "Region E",
          status: "underperforming",
          deltaType: "moderateDecrease",
          hours: 95,
        },
      ]
    

    return (
        <TabelaRaiz className="w-full flex flex-col items-center justify-center gap-5 flex-auto bg-gray-100 dark:bg-secundaria p-5 rounded-xl shadow-lg dark:shadow-gray-900 overflow-x-auto">
            <Tabela>
                <LegendaTabela>Recent invoices.</LegendaTabela>
                <CabecalhoTabela>
                    <LinhaTabela>
                        <CelulaCabecalhoTabela>
                            Assunto
                        </CelulaCabecalhoTabela>
                        <CelulaCabecalhoTabela>
                            Data do Compromisso
                        </CelulaCabecalhoTabela>
                        <CelulaCabecalhoTabela>
                            Horário do Compromisso
                        </CelulaCabecalhoTabela>
                        <CelulaCabecalhoTabela>
                            Momento do envio
                        </CelulaCabecalhoTabela>
                        <CelulaCabecalhoTabela className="text-right">
                            Status
                        </CelulaCabecalhoTabela>
                    </LinhaTabela>
                </CabecalhoTabela>
                <CorpoTabela>
                {data.map((item) => (
                    <LinhaTabela key={item.id}>
                        <CelulaTabela>{item.name}</CelulaTabela>
                        <CelulaTabela className="text-right">{item.sales}</CelulaTabela>
                        <CelulaTabela>{item.region}</CelulaTabela>
                        <CelulaTabela>{item.status}</CelulaTabela>
                        <CelulaTabela className="text-right">{item.hours}</CelulaTabela>
                    </LinhaTabela>
                ))}
                </CorpoTabela>
                <RodapeTabela>
                    <LinhaTabela>
                        <CelulaCabecalhoTabela colSpan={2} scope="row" className="text-right">
                        4,642
                        </CelulaCabecalhoTabela>
                        <CelulaCabecalhoTabela colSpan={3} scope="row" className="text-right">
                        497
                        </CelulaCabecalhoTabela>
                    </LinhaTabela>
                </RodapeTabela>
            </Tabela>
        </TabelaRaiz>
    );
}