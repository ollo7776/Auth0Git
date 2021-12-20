import React, { useState, useEffect } from 'react'
import '../../styles/style.css'
import axios from 'axios'
import { NavBar } from '../../components/menu-bar-up/NavBar';
import { motion, useAnimation } from 'framer-motion'
import url from '../../components/useURL.js'

export const Letters = () => {
    const [values, setValues] = useState({
        firstCode: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const controls = useAnimation()

    // const styleMo = {
    //     width: 25,
    //     height: 25,
    //     borderRadius: 3,
    //     backgroundColor: "grey",
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     marginRight: 4
    // }

    const handleFirstCodeInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            letters: "",
        })
        setValues({
            letters: "literak",
        })
    }
    const EmptyField = e => {
        e.preventDefault()
        setValues({
            letters: "",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        controls.start(i => ({
            opacity: [0, 1],
            rotate: [-360, 0, 360],
            //x: 100,
            transition: { delay: i * 0.5, duration: 3 },
        })
        )
        //controls.start('visible')
        //console.log(values.letters)
        if (values.letters) {
            setValid(true);
        }
        setSubmitted(true);
        console.log(values.letters);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            //values.letters = values.letters.toLocaleLowerCase()
            console.log(values)
            let dataToSend = `{"letters":"${values.letters}","type":"com.reactcwqr.codewars.service.Letters"}`
            console.log(Headers)
            console.log(dataToSend)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    console.log(response.data)
                    setDataResp(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp("Data is invalid: " + error)
                })

        }
    })

    return (
        <>
            <div className="body-container">
                <div className="item-0">
                    <span className='nav-bar'>
                        <NavBar />
                    </span>
                </div>

                <div className="item-1">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <form className="form" onSubmit={handleSubmit}>
                            <article>
                                <div>
                                    <button className="form-input-btn"
                                        onClick={CopyToInputField}>
                                        Copy
                                    </button>
                                    <button className="form-input-btn"
                                        onClick={EmptyField}>
                                        Empty
                                    </button>
                                    <button className="form-input-btn"
                                        type='submit'>
                                        Submit
                                    </button>
                                </div>
                                <input
                                    name="letters"
                                    onChange={handleFirstCodeInputChange}
                                    value={values.letters}
                                    className="form-inputs"
                                    placeholder="letters"
                                    style={{ width: '100%' }}
                                />

                                <motion.div style={{ display: 'flex' }} >
                                    {/* <motion.div custom={0} animate={controls} style={styleMo} >L</motion.div> */}
                                    <motion.div custom={0} animate={controls} className='style-mo' style={{ backgroundColor: "yellow" }}  >L</motion.div>
                                    <motion.div custom={1} animate={controls} className='style-mo' style={{ backgroundColor: "magenta" }}>I</motion.div>
                                    <motion.div custom={2} animate={controls} className='style-mo' style={{ backgroundColor: "green" }}>T</motion.div>
                                    <motion.div custom={3} animate={controls} className='style-mo' style={{ backgroundColor: "red" }}>E</motion.div>
                                    <motion.div custom={4} animate={controls} className='style-mo' style={{ backgroundColor: "orange" }}>R</motion.div>
                                    <motion.div custom={5} animate={controls} className='style-mo' >A</motion.div>
                                    <motion.div custom={6} animate={controls} className='style-mo' style={{ backgroundColor: "lightblue" }}>K</motion.div>
                                    <motion.div custom={7} animate={controls} className='style-mo' style={{ backgroundColor: "brown" }}>I</motion.div>
                                </motion.div>
                                <p>Antwort vom Server:</p>
                                {
                                    submitted && !values.letters ?
                                        <p style={{ color: 'red' }}>No code is pasted</p>
                                        : dataResp === 'Data is invalid' ?
                                            <p style={{ color: 'yellow' }}>Data is invalid</p>
                                            // : <p style={{ color: 'green' }}>{dataResp}</p>
                                            : <div style={{ color: 'green' }}>
                                                {dataResp.toString().split('newLine').map((item, index) => {
                                                    console.log(item)
                                                    return (
                                                        <div key={index}>
                                                            {item}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                }

                            </article>
                        </form>
                    </span>
                </div>
                <div className='item-2'>
                    <span className='card'>
                        <h1>LETTERS <br />FOR<br /> SCRABBLE</h1>
                    </span>
                </div>
                <div className="item-3">
                    <span className="card">
                        <div className="thumb" >
                            <article>
                                <h1>LETTERS</h1>
                                <p>Dieses Programm hilft Ihnen beim Scrabble-Spielen. 
                                    Geben Sie einfach die Buchstaben ein, aus denen das Wort zusammengesetzt werden soll, 
                                    und Sie erhalten alle Kombinationswörter, die sich aus diesem Buchstabensatz zusammensetzen lassen.</p>
                            </article>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}
