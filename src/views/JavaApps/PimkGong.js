import React, { useState, useEffect, useRef } from 'react'
// import './Spielchen.css'
import { motion } from 'framer-motion'

function PimkGong() {
    // const [startScreen, setStartScreen] = useState(true)
    const xBallRef = useRef(30)
    const yBallRef = useRef(20)
    const xMoveRef = useRef(1)
    const yMoveRef = useRef(-1)
    const [moving, setMoving] = useState(false)
    const [move, setMove] = useState(15)
    const [score, setScore] = useState(0)

    // const hideStartScreen = () => setStartScreen(!startScreen)

    const moveBall = () => {
        setMoving(!moving)
    }
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        if (moving) {
            const interval = setInterval(() => {

                setSeconds(seconds => seconds + 1)
                // console.log(yBallRef.current)
                console.log(xBallRef.current)
                if (xBallRef.current === -20) {
                    xMoveRef.current = 1
                }
                if (xBallRef.current === 71) {
                    xMoveRef.current = -1
                }
                if (yBallRef.current === -1) {
                    yMoveRef.current = 1
                }
                if (yBallRef.current === 41) {
                    yMoveRef.current = -1
                }
                if (xBallRef.current === -19) {
                    clearBall()
                }

                // change the ball movement
                if (score === 2 && xBallRef.current === 4 && yBallRef.current > 17 && xMoveRef.current === -1) {
                    xMoveRef.current = 0
                    yMoveRef.current = -1
                }
                if (score === 2 && xBallRef.current === 4 && yBallRef.current === 10 && yBallRef.current < move - 1) {
                    xMoveRef.current = -1
                    yMoveRef.current = 0
                }
                if (score === 2 && xBallRef.current === 4 && yBallRef.current === 35 && yBallRef.current > move + 11) {
                    xMoveRef.current = -1
                    yMoveRef.current = 0
                }
                if (xBallRef.current === 1) {
                    if (yBallRef.current > move - 1 && yBallRef.current < move + 11) {
                        xMoveRef.current = 1
                        setScore(score + 1)

                    }
                }


                xBallRef.current = xBallRef.current + xMoveRef.current
                yBallRef.current = yBallRef.current + yMoveRef.current

            }, 50)
            return () => clearInterval(interval)
        }
    }, [moving, seconds, move, score])

    const clearBall = () => {
        setMoving(false)
        xBallRef.current = 30
        yBallRef.current = 20
        xMoveRef.current = 1
        yMoveRef.current = -1
        setSeconds(0)
        setMove(15)
        setScore(0)
    }

    const moveUp = () => {
        console.log(move)
        setMove(move - 2)
        if (move === -1) {
            setMove(move + 2)
        }
    }
    const moveDown = () => {
        console.log(move)
        setMove(move + 2)
        if (move === 33) {
            setMove(move - 2)
        }
    }


    return (
        <>
            <div>
                Es besteht kein Grund zur Panik!
                Es ist nur ein Spiel... 
                Verwenden Sie die Pfeile, um zu verhindern, dass der Ball über den linken Rand entweicht.
                Denken Sie daran, dieser Ball ist schlau. <br />
                Versuche 3 Punkte zu bekommen! Viel Glück! ;-)
            </div>
            <div>
                <div>
                    <button> Punkte: {score} </button>
                    <motion.button className='pimkGong-button'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={moveBall}
                    >
                        START/STOP
                    </motion.button>

                    <motion.button className='pimkGong-button'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={clearBall}
                    >
                        CLEAR
                    </motion.button>
                </div>
            </div>
            <div className='play-box'>
                <svg viewBox='-1 -5 100 50'>

                    <rect x='0' y='0' width="70" height="40"
                        fill="lightgrey" stroke="black"
                        strokeWidth="0.5" />

                    <motion.circle
                        animate={{ x: xBallRef.current, y: yBallRef.current }}
                        x='10' y='10' r='0.7'
                        transition={{ ease: "easeOut", duration: 0.3 }}>
                    </motion.circle>

                    <motion.rect x='0' y='0' width='1' height='9'
                        animate={{ y: move, x: 1 }}
                        transition={{ ease: "easeOut", duration: 1 }}>
                    </motion.rect>
                </svg>
            </div>
            <div>
                <motion.button className='button-clue'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={moveUp}
                >
                    &#8613;
                </motion.button>
                <motion.button className='button-clue'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={moveDown}
                >
                    &#8615;
                </motion.button>
            </div>
        </>
    )
}


export default PimkGong;

