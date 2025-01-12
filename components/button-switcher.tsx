"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonSwitchProps {
  options: { value: string; label: string }[]
  defaultValue?: string
  onValueChange?: (value: string) => void
  children?: React.ReactNode
}

interface ButtonSwitchContentProps {
  value: string
  children: React.ReactNode
}

const ButtonSwitchContext = React.createContext<string | undefined>(undefined)

export function ButtonSwitch({ options, defaultValue, onValueChange, children }: ButtonSwitchProps) {
  const [activeValue, setActiveValue] = React.useState(defaultValue || options[0].value)

  const handleValueChange = (value: string) => {
    setActiveValue(value)
    onValueChange?.(value)
  }

  return (
    <ButtonSwitchContext.Provider value={activeValue}>
      <div className="space-y-4">
        <div className="flex space-x-2">
          {options.map((option) => (
            <Button
              key={option.value}
              onClick={() => handleValueChange(option.value)}
              className={cn(
                activeValue === option.value ? "text-primary border-b-2 border-white" : "text-muted-foreground" , 
                "bg-transparent hover:bg-transparent flex-grow "
              )}
              
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className={cn(activeValue === "post" ? "rounded-[10px]" : "rounded-t-[13px]","border-[0.1px] ")}>
          {children}
        </div>
      </div>
    </ButtonSwitchContext.Provider>
  )
}

export function ButtonSwitchContent({ value, children }: ButtonSwitchContentProps) {
  const activeValue = React.useContext(ButtonSwitchContext)

  return (
    <div className={cn(value === activeValue ? "block" : "hidden")}>
      {children}
    </div>
  )
}

