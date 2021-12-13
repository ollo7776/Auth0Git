// copy from hook router
import React, { useState } from 'react'
import '../../styles/style.css'
import { motion } from 'framer-motion'
import { useMenuUpdate } from './MenuContext'

export const IconMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = useMenuUpdate()

    const iconCrossVariants = {
        opened: {
            rotate: 45,
        },
        closed: {
        }
    }

    const openCloseMenu = () => {
        setIsOpen(state => !state)
    }


    return (
        <>
            <div className='menu' onClick={toggleMenu} >
                <motion.svg className='menuSVG'
                    initial={false}
                    variants={iconCrossVariants}
                    animate={isOpen ? 'opened' : 'closed'}
                    //onClick={openCloseMenu}
                    onClick={openCloseMenu}
                    width="15"
                    height="15"
                    //viewBox="-2 -2 24 24"
                   // fill="none"
                >
                    <path
                        d='M 8 5 L 13 5 L 13 8 L 8 8 L 8 13 L 5 13 L 5 8 L 0 8 L 0 5 L 5 5 L 5 0 L 8 0 L 8 5'
                        //d='M8 5 13 5 13 8 8 8 8 13 5 13 5 8 0 8 0 5 5 5 5 0 8 0 8 5'
                        // d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                        fill="grey" // fill="currentColor"
                    />
                </motion.svg>
            </div>

        </>
    )
}


