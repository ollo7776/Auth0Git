import React from 'react'
import { motion, useAnimation } from 'framer-motion'

export const LettersAnim = () => {
    const controls = useAnimation()
    
        controls.start(i => ({
            // opacity: [1, 1],
            rotate: [-360, 0, 360, 15, -15, 15, -15, 15, -15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            //x: 10,
            transition: { delay: i * 5, duration: 25, repeat: Infinity },
        })
        )
    
    
    return (
        <div>
                <motion.div style={{ display: 'flex' }}  >
                    {/* <motion.div custom={0} animate={controls} style={styleMo} >L</motion.div> */}
                    <motion.div custom={0} animate={controls} className='style-mo' style={{ backgroundColor: "yellow" }}  >L</motion.div>
                    <motion.div custom={1} animate={controls} className='style-mo' style={{ backgroundColor: "magenta" }}>E</motion.div>
                    <motion.div custom={2} animate={controls} className='style-mo' style={{ backgroundColor: "green" }}>T</motion.div>
                    <motion.div custom={3} animate={controls} className='style-mo' style={{ backgroundColor: "red" }}>T</motion.div>
                    <motion.div custom={4} animate={controls} className='style-mo' style={{ backgroundColor: "orange" }}>E</motion.div>
                    <motion.div custom={5} animate={controls} className='style-mo' >R</motion.div>
                    <motion.div custom={6} animate={controls} className='style-mo' style={{ backgroundColor: "lightblue" }}>S</motion.div>
                </motion.div>
        </div>
    )
}
