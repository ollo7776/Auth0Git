import React from 'react'
import { useMenu, useMenuUpdate } from './MenuContext'
import { motion } from 'framer-motion'

export const FunctionContextWDSSS7 = () => {
    const openMenu = useMenu()
    const toggleMenu = useMenuUpdate()
    
    const variants = {
        visible: {
            height:  openMenu? 10:100,        
            transition: {
                duration: 1,
            },
        },
        hidden: { height: 10 },
    }
    
    const menuStyle = {
        backgroundColor:'grey',   
    }

    return (
        <div>
            <button  >Toggle Menu </button>
            <motion.div style={menuStyle} initial='hidden' animate="visible" variants={variants} onClick={toggleMenu}>DIV</motion.div>
        </div>
    )
}
