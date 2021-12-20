import React, { useState, useEffect } from 'react'
import '../../styles/style.css'
import axios from 'axios'
import { NavBar } from '../../components/menu-bar-up/NavBar';
import url from '../../components/useURL.js'
import MyCode from '../../images/MyCode.png'

export const HumanTime =()=> {
    const [values, setValues] = useState({
        firstCode: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = event => {
        setValues({
            ...values,
            firstCode: event.target.value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            firstCode: "13:15"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstCode) {
            setValid(true);
        }
        setSubmitted(true);
        console.log(values.firstCode);
    }
    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            let dataToSend = `{"time":"${values.firstCode}","type":"com.reactcwqr.codewars.service.WhatTimeIsItService"}`
            console.log(dataToSend)
            //axios.post('http://localhost:8081/default', dataToSend, headerOption)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then(function (response) {
                    setDataResp(response.data + "")
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp("Data is invalid: " + error)
                })
        }
    });

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
                        <article>
                            <h1>Human Readable Time</h1>                            
                            <p>Dieses Programm konvertiert das numerische Zeitformat in das Wortformat.</p>
                            <button className="form-input-btn"
                                onClick={CopyToInputField}>
                                 In das Formular kopieren
                            </button>
                        </article>
                    </span>
                </div>
                <div className='item-2'>
                    <span className='card'>
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleFirstCodeInputChange}
                                value={values.firstCode}
                                className="form-inputs"
                                placeholder="type the hour to change into proper english"
                                name="firstCode"
                            />
                            <p>Antwort vom Server:</p>
                            {
                                submitted && !values.firstCode ?
                                    <p style={{ color: 'red' }}>No code is pasted</p>
                                    : dataResp === 'Data is invalid' ?
                                        <p style={{ color: 'yellow' }}>Data is invalid</p>
                                        : <p style={{ color: 'green' }}>{dataResp}</p>
                            }

                            <button className="form-input-btn"
                                type='submit'>
                                Absenden und an Server senden
                            </button>
                        </form>
                    </span>
                </div>
                <div className="item-3">
                    <span className="card">
                    <div className="thumb" style={{ backgroundImage: `url(${MyCode})` }}></div>
                        <article>
                        <p>In diesem Abschnitt stelle ich einige Anwendungen vor, die in JAVA geschrieben wurden.
                                Dies sind hauptsächlich Programme der Plattform codewars.com, aber auch meine eigenen.
                                Ich wünsche dir viel Spaß.</p>
                        </article>
                    </span>
                </div>
            </div>
        </>
    )
}

export default HumanTime;