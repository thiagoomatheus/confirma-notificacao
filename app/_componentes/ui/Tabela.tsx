// Tremor Table [v0.0.3]

import cx from "@/app/utils/cx"
import React from "react"

const TabelaRaiz = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, forwardedRef) => (
  <div
    ref={forwardedRef}
    // Activate if table is used in a float environment
    // className="flow-root"
  >
    <div
      // make table scrollable on mobile
      className={cx("w-full overflow-auto whitespace-nowrap", className)}
      {...props}
    >
      {children}
    </div>
  </div>
))

TabelaRaiz.displayName = "TabelaRaiz"

const Tabela = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...props }, forwardedRef) => (
  <table
    ref={forwardedRef}
    tremor-id="tremor-raw"
    className={cx(
      // base
      "w-full caption-bottom border-b",
      // border color
      "border-gray-200 dark:border-gray-800",
      className,
    )}
    {...props}
  />
))

Tabela.displayName = "Tabela"

const CabecalhoTabela = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <thead ref={forwardedRef} className={cx(className)} {...props} />
))

CabecalhoTabela.displayName = "CabecalhoTabela"

const CelulaCabecalhoTabela = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <th
    ref={forwardedRef}
    className={cx(
      // base
      "border-b px-4 py-3.5 text-left text-sm font-semibold",
      // text color
      "text-gray-900 dark:text-gray-50",
      // border color
      "border-gray-200 dark:border-gray-800",
      className,
    )}
    {...props}
  />
))

CelulaCabecalhoTabela.displayName = "CelulaCabecalhoTabela"

const CorpoTabela = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tbody
    ref={forwardedRef}
    className={cx(
      // base
      "divide-y",
      // divide color
      "divide-gray-200 dark:divide-gray-800",
      className,
    )}
    {...props}
  />
))

CorpoTabela.displayName = "CorpoTabela"

const LinhaTabela = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, forwardedRef) => (
  <tr
    ref={forwardedRef}
    className={cx(
      "[&_td:last-child]:pr-4 [&_th:last-child]:pr-4",
      "[&_td:first-child]:pl-4 [&_th:first-child]:pl-4",
      className,
    )}
    {...props}
  />
))

LinhaTabela.displayName = "LinhaTabela"

const CelulaTabela = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <td
    ref={forwardedRef}
    className={cx(
      // base
      "p-4 text-sm",
      // text color
      "text-gray-600 dark:text-gray-400",
      className,
    )}
    {...props}
  />
))

CelulaTabela.displayName = "CelulaTabela"

const RodapeTabela = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => {
  return (
    <tfoot
      ref={forwardedRef}
      className={cx(
        // base
        "border-t text-left font-medium",
        // text color
        "text-gray-900 dark:text-gray-50",
        // border color
        "border-gray-200 dark:border-gray-800",
        className,
      )}
      {...props}
    />
  )
})

RodapeTabela.displayName = "RodapeTabela"

const LegendaTabela = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, forwardedRef) => (
  <caption
    ref={forwardedRef}
    className={cx(
      // base
      "mt-3 px-3 text-center text-sm",
      // text color
      "text-gray-500 dark:text-gray-500",
      className,
    )}
    {...props}
  />
))

LegendaTabela.displayName = "LegendaTabela"

export {
  TabelaRaiz,
  Tabela,
  CabecalhoTabela,
  CelulaCabecalhoTabela,
  CorpoTabela,
  LinhaTabela,
  CelulaTabela,
  RodapeTabela,
  LegendaTabela
}