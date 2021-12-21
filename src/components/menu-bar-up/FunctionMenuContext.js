import React, { useEffect } from 'react'
import { useMenu, useMenuUpdate } from './MenuContext'
import { motion, useAnimation } from 'framer-motion'
import AuthenticationButton from './AuthenticationButton';
import { MenuMap } from './MenuMap';
import { IconMenu } from './IconMenu';

export const FunctionMenuContext = () => {
    const controls = useAnimation()
    // openMenu and toggleMenu the variable allows you to control the slide out of the top menu
    const openMenu = useMenu()
    const toggleMenu =  useMenuUpdate() 

    useEffect(() => {
        // Controls the height of the top menu slide with Framer Motion when going down
        if (openMenu) {
            controls.start({
                top: '30px',
                width: '250px',
                transition: { duration: 0.7 }
            })
            controls.start({ x: 35, transition: { duration: 0.7, delay: 0.6 } })
        }
        else {
            //Controls the height of the top menu slide with Framer Motion when going up
            controls.start({
                top: '-123px',
                width: '100vw',
                transition: { duration: 1, delay: 1 }
            })
            controls.start({
                x: '0px',
                transition: { duration: 0.7, delay: 0 }
            })
        }
    }, [openMenu, controls])

    return (
        <div>
            <motion.div className='links-menu'
            //Control of the initial state in which the top menu is located
                initial={{ top: '-123px', width: '100vw' }}
                animate={controls}
            >
                <MenuMap />
            </motion.div>
            <AuthenticationButton />
            <IconMenu onClick={toggleMenu} />
        </div>
    )
}

export default FunctionMenuContext
