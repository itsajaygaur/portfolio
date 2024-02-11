'use client'

import { ThemeProvider } from "next-themes"
import {NextUIProvider} from '@nextui-org/react'

export function ProvideTheme({children}: {children: React.ReactNode}){
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >{children}</ThemeProvider>
}

export function ProvideNextUI({children}: {children: React.ReactNode}){
    return  <NextUIProvider>{children}</NextUIProvider>
}