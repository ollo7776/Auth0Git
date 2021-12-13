import React from 'react'
import { useSubMenu, useSubMenuUpdate } from './MenuSubJavaContext'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { MenuDataJava } from './MenuData'

export const MenuSubJava = () => {
    const openSubMenu = useSubMenu()
    const toggleSubMenu = useSubMenuUpdate()

    const variants = {
        open: {
            height: openSubMenu ? 280:0,
            transition: {
                duration: 1,
            },
        },
        close: {
            height: !openSubMenu? 0:280,
            transition: {
                // delay: i * 0.1,
                delay: 0.5,
            },
        },

        // visible: i => ({
        visible: {
            opacity: openSubMenu ? 1 : 0,
            transition: {
                // delay: i * 0.1,
                delay: 0.5,
            },
        },
        hidden: {
            opacity: openSubMenu ? 0 : 1,
        },
    }

    const menuStyle = {
        // backgroundColor: 'grey',
    }

    return (
        <>

            <div onClick={toggleSubMenu}>JAVA APP</div>
            <div>
                <motion.div style={menuStyle} initial='close' animate="open" variants={variants} >
                    {MenuDataJava.map((item, i) => (
                        <motion.span key={item.path} custom={i} initial={{ opacity: 0 }} animate="visible" variants={variants} >
                            <Link to={item.path}
                            >
                                +{item.title}<br />

                            </Link>
                        </motion.span>
                    )
                    )
                    }
                </motion.div>
            </div>
        </>
    )
}