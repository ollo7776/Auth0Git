import React, { useEffect } from 'react'
import { useMenu, useMenuUpdate } from './MenuContext'
import { motion, useAnimation } from 'framer-motion'
import AuthenticationButton from './AuthenticationButton';
import { MenuMap } from './MenuMap';
import { IconMenu } from './IconMenu';

export const FunctionMenuContext = () => {
    const controls = useAnimation()
    const openMenu = useMenu()
    const toggleMenu =  useMenuUpdate() 

    useEffect(() => {
        if (openMenu) {
            controls.start({
                top: '30px',
                width: '250px',
                // height: '600px',
                transition: { duration: 0.7 }
            })
            controls.start({ x: 35, transition: { duration: 0.7, delay: 0.6 } })
        }
        else {
            controls.start({
                top: '-123px',
                width: '100vw',
                transition: { duration: 1, delay: 1 }
            })
            controls.start({
                // left: '0',
                x: '0px',
                transition: { duration: 0.7, delay: 0 }
            })
        }
    }, [openMenu, controls])

    return (
        <div>
            <motion.div className='links-menu'
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
