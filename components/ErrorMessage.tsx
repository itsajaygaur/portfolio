import { cn } from "@/lib/utils"
import { FieldError } from "react-hook-form"

export default function ErrorMessage({error, className}: {error: FieldError | undefined , className?: string | null}){
    console.log('error -> ', error)
    if(!error || !error?.message) return null
    return <p className={cn('text-red-500 text-xs', className)} >{error.message}</p>
}