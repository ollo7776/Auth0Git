import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/style.css'
import { NavBar } from '../../components/menu-bar-up/NavBar'
import url from '../../components/useURL.js'
import MyCode from '../../images/MyCode.png'

export const Validate24hours = () => {
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
            firstCode: "13:03"
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
            let dataToSend = `{"time":"${values.firstCode}","type":"com.reactcwqr.codewars.service.Regex24HoursService"}`
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then(function (response) {
                    setDataResp(response.data + "")
                })
                .catch(function (error) {
                    console.log(error)
                    setDataResp("Daten sind ungültig: " + error)
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
                    <span className="card">
                        <article>
                            <h1>Validate24hours</h1>
                            <p>Dieses Programm prüft, ob das eingegebene Zeitformat korrekt ist.<br />
                                Beispielfragment zum Einfügen: 13:03
                                <button className="form-input-btn"
                                    onClick={CopyToInputField}>
                                    In das Formular kopieren
                                </button>
                            </p>
                        </article>
                    </span>

                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                onChange={handleFirstCodeInputChange}
                                value={values.firstCode}
                                className="form-inputs"
                                placeholder="type the hour to check..."
                                name="firstCode"
                            />
                            <p style={{ color: 'white' }}>Antwort vom Server:</p>
                            {
                                submitted && !values.firstCode ?
                                    <p style={{ color: 'red' }}>Es wird kein Code eingefügt</p>
                                    : dataResp === 'false' ?
                                        <p style={{ color: 'red' }}>falsh</p>
                                        : dataResp === 'true' ?
                                            <p style={{ color: 'green' }}>richtig</p>
                                            : <p style={{ color: 'red' }}></p>
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







