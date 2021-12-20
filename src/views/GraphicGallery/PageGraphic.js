import React, { useState, useRef, useEffect } from 'react'
import { SliderDataGraphic } from './SliderDataGraphic'
// import { ThumbsPictures } from './ThumbsPictures'
import { motion, useAnimation} from 'framer-motion'

const PageGraphic = () => {
    const [current, setCurrent] = useState(0)
    const slides = SliderDataGraphic
    const length = slides.length
    //const [turnRight, setTurnRight] = useState(true)
    const controls = useAnimation()
    const xPosition = useRef(0)
    const [moveRight, setMoveRight] = useState(false)
    const [moveX, setMoveX] = useState(0)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    const setSlide = (i) => {
        setCurrent(i)
        console.log(i)
    }

    //Thumbs moving
    const turnRigthThumbs = () => {
       setMoveRight(true)
    }
    
    const turnLeftThumbs = () => {
        console.log(xPosition)
        setMoveX(moveX => moveX - 60)
        controls.start({ x: moveX, transition: { duration: 0.7 } })
    }

    return (
        <>
            <div className='graphic-gallery-page'>
                <div >
                    <section className='slider'>
                        <div >
                            <svg className='left-arrow' onClick={nextSlide}
                                // width="60" height="120"
                                width="60" height="260" viewBox='0 0 70 70'
                            >
                                <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L6 30M27 45 27 36 48 36 48 24 27 24 27 15 15 30 27 45' />
                                {/* <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L15 30 27 45 27 36 48 36 48 24 27 24 27 15 15 30 15 30' /> */}
                            </svg>
                        </div>
                        <div>
                            {SliderDataGraphic.map((slide, i) => {
                                return (
                                    <div className={i === current ? 'slide active' : 'slide'} key={slide.id}>
                                        {i === current && (
                                            <img src={slide.image} alt='img' className='image' />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='right-arrow'>
                            <svg onClick={prevSlide}
                                width="60" height="260" viewBox='0 0 70 70'
                            >
                                <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L6 30M15 36 35 36 35 45 48 30 35 15 35 24 15 24 15 36' />
                                {/* <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L15 30 15 36 33 36 33 45 48 30 33 15 33 24 15 24 15 30 15 30' /> */}
                                {/* <path d='M6 30C6-3 57-3 57 30 57 63 6 63 6 30L15 30 15 36 33 36 33 45 48 30 33 15 33 24 15 24 15 30 15 30M4 30C4 66 59 66 59 30 59-6 4-6 4 30'/> */}
                            </svg>
                        </div>
                    </section>
                </div>
                <div>
                    {/* <section className='thumbs-arrows'>
                        <svg className='left-arrow-thumbs' onClick={turnLeftThumbs}
                            width="200" height="30" viewBox='0 0 40 10'
                        >
                            <path d='M0 0 0 10 44 10 44 0 0 0M17 5 20 1 21 1 18 5 21 9 20 9 17 5M26 1 23 5 26 9 25 9 22 5 25 1 26 1' />
                        </svg>
                        <svg className='right-arrow-thumbs' onClick={turnRigthThumbs}
                            width="200" height="30" viewBox='0 0 40 10'
                        >
                            <path d='M0 0 0 10 44 10 44 0 0 0M21 5 18 1 19 1 22 5 19 9 18 9 21 5M24 1 27 5 24 9 23 9 26 5 23 1 24 1' />
                        </svg>
                    </section> */}
                    <motion.section animate={controls} className='thumbs-pictures'>
                        {SliderDataGraphic.map((slide, i) => {
                            return (
                                <img src={slide.image} key={slide.id} alt='img' className='thumbs' onClick={() => setSlide(i)} />
                            )
                        })}
                    </motion.section>
                </div>
            </div>
        </>
    )
}
export default PageGraphic