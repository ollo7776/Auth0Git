// import React, { useEffect, useState } from 'react'
// import '../styles/style.css'
// import {Link } from "react-router-dom";
// import { motion, useAnimation } from 'framer-motion'
// import { MenuData } from './MenuData'
// import { MenuSubJava } from './MenuSubJava'
// import { MenuSubAusf } from './MenuSubAusf'
// import AuthenticationButton from './AuthenticationButton';
// import { IconMenu } from './IconMenu';

// export const Menu = () => {
//     const controls = useAnimation()
//     const [isOpen, setIsOpen] = useState(false)

//     useEffect(() => {
//         if (isOpen) {
//             controls.start({
//                 top: '-250px',
//                 width: '40vw',
//                 transition: { duration: 0.7 }
//             })
//             controls.start({ x: 25, transition: { duration: 0.7, delay: 0.4 } })
//         } else {
//             controls.start({
//                 top: '-95vh',
//                 left: '0',
//                 width: '100vw',
//                 transition: { duration: 1 }
//             })
//             controls.start({ x: 0, transition: { duration: 0.7, delay: 0.4 } })
//         }
//     }, [isOpen, controls])

//     const openCloseMenu = () => {
//         setIsOpen(state => !state)
//     }

//     return (
//         <>
//         <IconMenu onClick={openCloseMenu} />
//             <div className='menu' onClick={openCloseMenu} >
//                 <div>
//                     <motion.div className='links-menu'
//                         initial={{
//                             top: '-50px',
//                             width: '400px',
//                         }}
//                         animate={controls}
//                     >
//                         <span>
//                             {MenuData.map((item, index) => {
//                                 if (item.subNav === 'MenuDataJava') {
//                                     return (
//                                         <>
//                                             <Link href={item.path} key={index} component={item.component} onClick={openCloseMenu}>
//                                                 {item.title}<br />
//                                             </Link>
//                                             <MenuSubJava />
//                                         </>
//                                     )
//                                 } else if (item.subNav === 'MenuDataAusf') {
//                                     return (<>
//                                         <Link href={item.path} key={index} onClick={openCloseMenu}>
//                                             {item.title}<br />
//                                         </Link>
//                                         <MenuSubAusf />
//                                     </>
//                                     )
//                                 } else {
//                                     return (
//                                         <Link href={item.path} key={index} onClick={openCloseMenu}>
//                                             {item.title}<br />
//                                         </Link>
//                                     )
//                                 }
//                             })}
//                         </span>
//                         <AuthenticationButton />
//                     </motion.div>
//                 </div>
//             </div>
            
//         </>
//     )
// }


