import React, { useContext, useState } from 'react'

const SubMenuContext = React.createContext()
const SubMenuUpdateContext = React.createContext()
// const SubMenuCloseContext = React.createContext()

export function useSubMenu() {
    return useContext(SubMenuContext)
}
export function useSubMenuUpdate() {
    return useContext(SubMenuUpdateContext)
}
// export function useSubMenuClose() {
//     return useContext(SubMenuCloseContext)
// }

export function SubMenuProvider({ children }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    
    function toggleSubMenu() {
        setSubMenuOpen(value => !value)
    }
    
    // function closeSubMenu() {
    //     setSubMenuOpen(value => !value)
    // }

    return (
        <div>
            <SubMenuContext.Provider value={subMenuOpen}>
                <SubMenuUpdateContext.Provider value={toggleSubMenu}>
                    {/* <SubMenuCloseContext.Provider value={closeSubMenu}> */}
                        {children}
                    {/* </SubMenuCloseContext.Provider> */}
                </SubMenuUpdateContext.Provider>
            </SubMenuContext.Provider>
        </div>
    )
}
