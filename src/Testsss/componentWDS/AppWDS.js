import React from 'react'
import { FunctionContextComponent } from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

export const AppWDS = () => {
    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    )
}
