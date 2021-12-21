import React, { useContext, useState, createContext } from "react"

// Passing variables and functions via global scope for the top main menu
const MenuContext = createContext()
const MenuUpdateContext = createContext()
const subMenuOpen = createContext()

export function useMenu() {
    return useContext(MenuContext)
}

export function useMenuUpdate() {
    return useContext(MenuUpdateContext)
}

export function useSubMenuOpen() {
    return useContext(subMenuOpen)
}

export function MenuProvider({ children }) {
    const [openMenu, setOpenMenu] = useState(false)
    
    function toggleMenu() {
        setOpenMenu(prevOpenMenu => !prevOpenMenu)
    }

    return (
        <MenuContext.Provider value={openMenu} >
            <MenuUpdateContext.Provider value={toggleMenu}>          
                {children}
            </MenuUpdateContext.Provider>
        </MenuContext.Provider>
    )

}