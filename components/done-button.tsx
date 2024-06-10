"use client"

import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DoneButtonProps {
  id: string
}

export default function DoneButton({ id }: DoneButtonProps) {
  const [done, setDone] = useState(false)

  // Memoized function to check if the item is marked as done in local storage
  const checkLocalStorage = useCallback(() => {
    const storedDone = localStorage.getItem(id)
    return storedDone === "true"
  }, [id])

  // Effect to initialize the done state based on local storage
  useEffect(() => {
    setDone(checkLocalStorage())
  }, [checkLocalStorage])

  // Function to handle button click
  const handleClick = () => {
    const newDoneState = !done
    setDone(newDoneState)
    localStorage.setItem(id, newDoneState.toString())
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {done && <span className="text-sm text-green-500/80">Kész</span>}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className={done ? "group hover:border-none hover:bg-destructive/50" : "group"}
              onClick={handleClick}
            >
              <div className="block group-hover:hidden">
                <Check size={18} />
              </div>
              <div className="hidden group-hover:block">
                {done ? <X size={18} /> : <Check size={18} />}
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {done ? (
              <p>Megjelölés törlése</p>
            ) : (
              <p>Megjelölés készként</p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}