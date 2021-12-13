import React, {useState} from 'react'
import FuncContextSimple from './FuncContextSimple'

export const SimpleContext = React.createContext()

export const AppWSimple = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <>
            <SimpleContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
                <FuncContextSimple />
            </SimpleContext.Provider>
        </>
    )
}

