"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import BotaoPadrao from "@/app/_componentes/ui/BotaoPadrao"
import { Contato } from "@/app/_lib/types"

export function SelecaoDeContato( { contatos }: {contatos: Contato[]}) {
    
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [search, setSearch] = React.useState("")

  const contatosFiltrados = search.length > 0 ? contatos.filter((contato) => {
    if (!contato.pushName) {
      return
    }
    return contato.pushName.toLowerCase().includes(search.toLowerCase())
  }).slice(0, 7) : contatos.slice(0, 7)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex" asChild>
        <BotaoPadrao
          role="combobox"
          aria-expanded={open}
          className="w-[250px] sm:w-[300px] justify-between"
        >
          {value
            ? contatos.find((contato) => contato.id === value)?.pushName
            : "Selecione um contato"}
            <input type="text" name="telefone" value={value.slice(2).trim().replace(/[^0-9]/g, "")} readOnly className="hidden" />
          <ChevronsUpDown className="opacity-50" />
        </BotaoPadrao>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[250px] sm:w-[300px] bg-white dark:bg-gray-700">
        <Command>
          <CommandInput onValueChange={setSearch} placeholder="Busque um contato..." className="h-9" />
          <CommandList>
            <CommandEmpty>Contato não encontrado</CommandEmpty>
            <CommandGroup>
              {contatosFiltrados.map((contato) => (
                <CommandItem className="cursor-pointer"
                  key={contato.id}
                  value={contato.pushName}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : contatos.find((contato) => contato.pushName === currentValue)!.id)
                    setOpen(false)
                  }}
                >
                  {contato.pushName}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === contato.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
