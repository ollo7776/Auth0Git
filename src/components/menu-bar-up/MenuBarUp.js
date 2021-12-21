import React, {createContext } from 'react'
import { FunctionMenuContext } from './FunctionMenuContext'
import { MenuProvider } from './MenuContext'

export const MenuContext = createContext()

export const MenuBarUp = () => {
    return (
        // Setting the global scope context for the top menu
        <MenuProvider>
            <FunctionMenuContext />
        </MenuProvider>
    )
}
