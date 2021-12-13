// copy from hook router
import React, { useState } from 'react'
import '../styles/style.css'
import { motion } from 'framer-motion'
import { useMenu, useMenuUpdate } from '../components/menu-bar-up/MenuContext'

export const IconMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = useMenuUpdate()
    const iconHambVariants = {
        opened: {
            rotate: 0,
            // x: 30,
            opacity: 1
            //             visible: { opacity: 1 },
            //   hidden: { opacity: 0 },
        },
        closed: {
            rotate: 180,
            //x: 0,
            // transition: { duration: 0.2, delay: 1 },
            opacity: 0
        }
    }

    const iconCrossVariants = {
        opened: {
            rotate: 45,
            x: 30,
            opacity: 1
            //             visible: { opacity: 1 },
            //   hidden: { opacity: 0 },
        },
        closed: {
            rotate: 180,
            //x: 0,
            // transition: { duration: 0.2, delay: 1 },
            opacity: 0
        }
    }

    const openCloseMenu = () => {
        setIsOpen(state => !state)
    }

    return (
        <>
            <div className='menu'>
                 <motion.svg className='menuSVG'
                 onClick={toggleMenu}
                    width="30"
                    height="30"
                    viewBox="-5 -6 24 24"
                    // fill="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="grey" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                    <path fill="grey" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
                    <path fill="grey" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
                </motion.svg>

                <motion.svg className='menuSVG'
                    initial={false}
                    variants={iconHambVariants}
                    animate={isOpen ? 'closed' : 'opened'}
                    //onClick={openCloseMenu}

                    width="30"
                    height="30"
                    viewBox="-5 -6 24 24"
                    // fill="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="grey" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                    <path fill="grey" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
                    <path fill="grey" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
                </motion.svg>


                <motion.svg className='menuSVG'
                    initial={false}
                    variants={iconCrossVariants}
                    animate={isOpen ? 'opened' : 'closed'}
                    onClick={openCloseMenu}
                    width="30"
                    height="30"
                    viewBox="-2 -2 24 24"
                    // fill="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                        fill="grey" // fill="currentColor"
                    />
                </motion.svg>
            </div>

        </>
    )
}


