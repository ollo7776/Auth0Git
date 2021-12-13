import React, {createContext } from 'react'
import { FunctionMenuContext } from './FunctionMenuContext'
import { MenuProvider } from './MenuContext'

export const MenuContext = createContext()

export const MenuBarUp = () => {
    return (
        <MenuProvider>
            <FunctionMenuContext />
        </MenuProvider>
    )
}
