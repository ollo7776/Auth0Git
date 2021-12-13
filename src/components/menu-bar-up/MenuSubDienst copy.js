import React, { useState, useEffect } from 'react'
//import { A } from 'hookrouter'
import { Link } from "react-router-dom";
import { MenuDienstApp } from './MenuData';
import { motion, useAnimation } from 'framer-motion'

export const MenuSubDienst = () => {

    const variants = {
        visible: i => ({
            height: '30px',
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: i * 0.5,
            },
        }),
        hidden: i => ({
            height: '1px',
            opacity: 0,
            transition: {
                duration: 1,
                delay: i * 0.1,
            },
        })
    }

    return MenuDienstApp.map((item, i) => (
        <motion.span custom={i} initial='hidden' animate="visible" variants={variants} >
            <Link to={item.path} key={item.index}
            >
                +{item.title}<br />
            </Link>
        </motion.span>
    )
    )
}






    // const controls = useAnimation()
    // const [openSubMenu, setOpenSubMenu] = useState(true)


    // useEffect(() => {
    //     if (openSubMenu) {
    //         controls.start ({
    //             height: '50px',
    //             opacity: 1,
    //             transition: {
    //                 duration: 0.5,
    //                 delay: 1,
    //             },
    //         })
    //     } else {
    //         controls.start({
    //             height: '0px',
    //             opacity: 0,
    //             transition: {
    //                 duration: 0.5,
    //                 delay: 0,
    //             },
    //         })
    //     }
    // })


    // return MenuDienstApp.map((item, i) => (
    //     <motion.span custom={i} animate={controls} >
    //         <Link to={item.path} key={item.path}
    //         >
    //             +{item.title}<br />
    //         </Link>
    //     </motion.span>
    // ))
    // }
