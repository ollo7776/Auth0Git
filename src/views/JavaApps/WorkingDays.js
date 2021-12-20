import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/style.css'
import { NavBar } from '../../components/menu-bar-up/NavBar'
import url from '../../components/useURL.js'
import MyCode from '../../images/MyCode.png'

export const WorkingDays = () => {
    const [values, setValues] = useState({
        startDate: "",
        endDate: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

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
            startDate: "2022-06-01",
            endDate: "2022-08-01"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.startDate && values.endDate) {
            setValid(true);
        }
        setSubmitted(true);
        console.log(values.startDate);
        console.log(values.endDate);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            console.log(values)
            let dataToSend = `{"start":"${values.startDate}", "end":"${values.endDate}","type":"com.reactcwqr.codewars.service.WorkingDaysService"}`
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(response.data + "")
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
                            <h1>WorkingDays</h1>
                            <h1>JAVA</h1>
                            Wie viele Arbeitstage?
                            Geben Sie ein Startdatum und ein Enddatum ein, um zu überprüfen, 
                            wie viele Arbeitstage dazwischen liegen.<br/>
                            Beispielteil des Codes:<br />
                            Startdatum: 2022, 6, 1<br />
                            Enddatum: 2022, 8, 1<br />

                            <button className="form-input-btn"
                                onClick={CopyToInputField}>
                                In das Formular kopieren
                            </button>

                        </article>
                    </span>

                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-inputs">
                                <input
                                    name="startDate"
                                    onChange={handleFirstCodeInputChange}
                                    value={values.startDate}
                                    className="form-inputs"
                                    placeholder="type a start date"
                                />
                                <input
                                    name="endDate"
                                    onChange={handleFirstCodeInputChange}
                                    value={values.endDate}
                                    className="form-inputs"
                                    placeholder="type an end date"
                                />
                                <p style={{ color: 'white' }}>Antwort vom Server:</p>
                                {
                                    submitted && !values.startDate && !values.endDate ?
                                        <p style={{ color: 'red' }}>No code is pasted</p>
                                        : dataResp === 'Data is invalid' ?
                                            <p style={{ color: 'yellow' }}>Data is invalid</p>
                                            : <p style={{ color: 'green' }}>{dataResp} days</p>
                                }
                            </div>
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







