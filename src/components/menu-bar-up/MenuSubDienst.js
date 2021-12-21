// import React from 'react'
// //import { A } from 'hookrouter'
// import { Link } from "react-router-dom";
// import { MenuDienstApp } from './MenuData';
// import { motion } from 'framer-motion'

// export const MenuSubDienst = () => {
//     // Open a submenu with Framer Motion animations
//     const variants = {
//         visible: i => ({
//             opacity: 1,
//             transition: {
//                 delay: i * 0.3,
//             },
//         }),
//         hidden: { opacity: 0 },
//     }
//     return MenuDienstApp.map((item, i) => (
//         <motion.span key={item.path} custom={i} initial='hidden' animate="visible" variants={variants} >
//             <Link to={item.path} 
//             >
//                 +{item.title}<br />
//             </Link>
//         </motion.span>
//     )
//     )
// }