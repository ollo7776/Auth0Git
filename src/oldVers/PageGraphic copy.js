// import React, { useState } from 'react'
// import { SliderDataGraphic } from '../views/GrafikenComponents/SliderDataGraphic'

// const PageGraphic = ({ slides }) => {
//     const [current, setCurrent] = useState(0)
//     const length = slides.length
//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null
//     }

//     return (
//         <>
//             <section className='slider'>
//                 <div >
//                     <svg className='left-arrow' onClick={nextSlide}
//                      width="60 "
//                      height="60"
//                     >
//                         <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L15 30 27 45 27 36 48 36 48 24 27 24 27 15 15 30 15 30' />
//                     </svg>
//                 </div>
//                 <div>
//                     {SliderDataGraphic.map((slide, i) => {
//                         return (
//                             <>
//                                 <div className={i === current ? 'slide active' : 'slide'} key={slide.id}>
//                                     {i === current && (
//                                         <img src={slide.image} key={slide.id} alt='img' className='image' />
//                                     )}
//                                 </div>
//                             </>
//                         )
//                     })}
//                 </div>
//                 <div className='right-arrow'>
//                     <svg  onClick={prevSlide} 
//                      width="60"
//                      height="60"
//                      >
//                         <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L15 30 15 36 33 36 33 45 48 30 33 15 33 24 15 24 15 30 15 30' />
//                     </svg>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default PageGraphic