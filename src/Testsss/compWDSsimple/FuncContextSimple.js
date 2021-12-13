import React, {useContext} from 'react'
import { SimpleContext } from './AppWSimple'

const FuncContextSimple = () => {
    const simpleDarkTheme = useContext(SimpleContext)
    const simpleStyles = {
        backgroundColor: simpleDarkTheme? '#333':'#CCC',
        color: simpleDarkTheme?'#CCC':'#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
        <div style={simpleStyles} >
            Simple Theme
        </div>
    </>
    )
}
export default FuncContextSimple
