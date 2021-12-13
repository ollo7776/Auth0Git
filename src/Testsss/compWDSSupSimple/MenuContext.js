import React, { useContext, useState } from 'react'

const MenuContext = React.createContext()
const MenuUpdateContext = React.createContext()

export function useMenu() {
    return useContext(MenuContext)
}

export function useMenuUpdate() {
    return useContext(MenuUpdateContext)
}

export function MenuProvider ({children}) {
    const [menuOpen, setMenuOpen] = useState(false)
    function toggleMenu() {
        setMenuOpen(prevMenuOpen => !prevMenuOpen)
    }
    
    return (
        <div>
            <MenuContext.Provider value={menuOpen}>
                <MenuUpdateContext.Provider value={toggleMenu}>
                    {children}
                </MenuUpdateContext.Provider>
            </MenuContext.Provider>

        </div>
    )
}
