import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuSubJava } from './MenuSubJava'
// import { MenuSubDienst } from "./MenuSubDienst";
import { useMenuUpdate } from "./MenuContext";
import { motion } from 'framer-motion'

export const MenuMap = () => {
    // const [subMenuDienstApp, setSubMenuDienstApp] = useState(false)
    // const onClickSubMenuDienstApp = () => setSubMenuDienstApp(!subMenuDienstApp)
    const [subMenuJavaApp, setSubMenuJavaApp] = useState(false)
    const onClickSubMenuJavaApp = () => {
        setSubMenuJavaApp(!subMenuJavaApp)
        setOpenSub(value => !value)
    }

    const closeSubMenu = useMenuUpdate()

    useEffect(() => {
        if (closeSubMenu) {
            // setSubMenuDienstApp(false)
            setSubMenuJavaApp(false)
            setOpenSub(false)
        }
    }, [closeSubMenu]
    )

    const [openSub, setOpenSub] = useState(false)

    const variants = {
        active:
        {
            height: openSub ? 290 : 0,
            transition: { duration: 0.8 }
        }

    }

    return (
        <div className='menu-map'>
            <Link to='/'>HOME</Link>
            <span onClick={onClickSubMenuJavaApp} >JAVA-APP</span>
            <motion.span initial={false} variants={variants} animate='active'>
                {subMenuJavaApp ? <MenuSubJava /> : ''}
            </motion.span>
            {/* <span onClick={onClickSubMenuDienstApp} >
                    DIENST-APP
                </span>
                 */}
            {/* {subMenuDienstApp ? <MenuSubDienst /> : ''} */}

            <Link to='/gallery'>GALLERY</Link>
            <Link to='/profile'>PROFILE</Link>
        </div>
    )
}

