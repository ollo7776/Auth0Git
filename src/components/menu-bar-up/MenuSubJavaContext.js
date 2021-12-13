import React, { useContext, useState } from 'react'

const SubMenuContext = React.createContext()
const SubMenuUpdateContext = React.createContext()

export function useSubMenu() {
    return useContext(SubMenuContext)
}

export function useSubMenuUpdate() {
    return useContext(SubMenuUpdateContext)
}

export function SubMenuProvider ({children}) {
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    function toggleSubMenu() {
        setSubMenuOpen(value => !value)
    }
    
    return (
        <div>
            <SubMenuContext.Provider value={subMenuOpen}>
                <SubMenuUpdateContext.Provider value={toggleSubMenu}>
                    {children}
                </SubMenuUpdateContext.Provider>
            </SubMenuContext.Provider>
        </div>
    )
}
