import React from 'react'
//import { A } from 'hookrouter'
import { Link } from "react-router-dom";
import { MenuDataJava } from './MenuData'
import { motion } from 'framer-motion'

export const MenuSubJava = () => {
    const variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
        hidden: { opacity: 0 },
    }

    return MenuDataJava.map((item, i) => (
        <motion.span key={item.path} custom={i} initial='hidden' animate="visible" variants={variants} >
            <Link to={item.path} 
            >
                +{item.title}<br />

            </Link>
        </motion.span>
    )
    )
}