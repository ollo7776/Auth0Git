import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#333' : '#CCC',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </div>
    )
}

export default FunctionContextComponent
