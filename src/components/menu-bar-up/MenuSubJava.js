import React, { useEffect } from 'react'
import { useSubMenu, useSubMenuUpdate } from './MenuSubJavaContext'
import { motion, useAnimation } from 'framer-motion'
import { Link } from "react-router-dom";
import { MenuDataJava } from './MenuData'
import { useMenu } from './MenuContext';

export const MenuSubJava = () => {
    // Open a submenu with Framer Motion animations
    // Variables to control the animations
    const controlsHeight = useAnimation()
    const controlsOpacity = useAnimation()
    const openSubMenu = useSubMenu()
    const toggleSubMenu = useSubMenuUpdate()
    const openMenu = useMenu()

    // effects by opening the submenu changing th height
    useEffect(() => {
        if (openSubMenu) {
            controlsHeight.start({
                height: 280,
                transition: {
                    duration: 1,
                },
            })
        }
        else {
            controlsHeight.start({
                height: 0,
                transition: {
                    duration: 1,
                    delay: 0.5,
                },
            })
        }
    }, [openSubMenu, controlsHeight])

    // changing the opacity of submenu
    useEffect(() => {
        if (openSubMenu) {
            controlsOpacity.start({
                display: 'initial',
                opacity: 1,
                transition: {
                    delay: 0.7
                },
            })
        }
        else {
            controlsOpacity.start({
                opacity: 0,
                transition: {
                    delay: 0.5,
                },
            })
            controlsOpacity.start({
                display: 'none',
                transition: {
                    delay: 0.7,
                },
            })
        }
    }, [openSubMenu, controlsOpacity])

    useEffect(() => {
        if (!openMenu) {
            controlsHeight.start({
                height: 0,
                transition: {
                    duration: 1, delay: 0.7,
                },
            })
            controlsOpacity.start({
                display: 'none',
                transition: {
                },
            })
        }
    }, [controlsHeight, controlsOpacity, openMenu])

    return (
        // initial state for a submenu in Framer Motion animations
        <>
            <span onClick={toggleSubMenu}>JAVA APP</span>

            <motion.div initial={{ height: 0 }} animate={controlsHeight} >
                {MenuDataJava.map((item) => (
                    <motion.span key={item.id} initial={{ opacity: 0 }} animate={controlsOpacity} >
                        <Link to={item.path}
                        >
                            {item.title}<br />
                        </Link>
                    </motion.span>
                )
                )
                }
            </motion.div>
        </>
    )
}