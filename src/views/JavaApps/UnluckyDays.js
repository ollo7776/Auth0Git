import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/style.css'
import { NavBar } from '../../components/menu-bar-up/NavBar'
import url from '../../components/useURL.js'
import MyCode from '../../images/MyCode.png'

export const UnluckyDays = () => {
    const [values, setValues] = useState({
        sampleCode: "",
    });
    // const [clicked, setClicked] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = e => {
        setValues({
            ...values,
            sampleCode: e.target.value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            sampleCode: "2023"
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (values.sampleCode) {
            setValid(true);
        }
        setSubmitted(true);
        //console.log(values.sampleCode);
    }

    let headerOption = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        if (submitted && valid) {
            //here have to set the name of a variable/s and change the ending of the type link for the name of class in java backend
            let dataToSend = `{"year":"${values.sampleCode}", "type":"com.reactcwqr.codewars.service.UnluckyDays"}`
            console.log(dataToSend)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(`There is ${response.data} unlucky day(s) in ${values.sampleCode}`)
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp('Data is invalid: ' + error)
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
                            <h1>UnluckyDays</h1>
                            <p>Ein unglücklicher Tag ist Freitag der dreizehnte. Überprüfen Sie,
                                wie viele solcher Tage in einem bestimmten Jahr waren.</p>
                            <button className="form-input-btn"
                                onClick={CopyToInputField}>
                                Fügen Sie das Beispiel in das Formular ein
                            </button>
                        </article>
                    </span>

                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                onChange={handleFirstCodeInputChange}
                                value={values.sampleCode}
                                className="form-inputs"
                                placeholder='paste your list of names'
                                name="sampleCode"
                            />
                            <p style={{ color: 'white' }}>Antwort vom Server:</p>
                            {
                                submitted && !values.sampleCode ?
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







