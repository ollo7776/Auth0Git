import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/style.css'
import { NavBar } from '../../components/menu-bar-up/NavBar'
import url from '../../components/useURL.js'
import MyCode from '../../images/MyCode.png'

export const Meetings = () => {
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
            sampleCode: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
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
            let dataToSend = `{"list":"${values.sampleCode}", "type":"com.reactcwqr.codewars.service.Meetings"}`
            console.log(dataToSend)
            axios.post(url + ':8081/default', dataToSend, headerOption)
                .then((response) => {
                    setDataResp(response.data)
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
                            <h1>Meetings</h1>
                            Beispielteil des Codes:<br />
                            Dieses Programm sortiert die Liste der Nachnamen alphabetisch nach den Anfangsbuchstaben des Nachnamens.
                            Die Nachnamen stehen in der zur Sortierung vorgesehenen Liste an zweiter Stelle nach dem Vornamen.
                            <span className="form-sample-data">
                                "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;
                                <br />Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
                                <br />
                            </span>
                            <span>Beispielantwort vom Server:</span>
                            <span style={{ color: 'green' }}>"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"</span><br />
                            <button className="form-input-btn"
                                onClick={CopyToInputField}>
                                Beispielcode kopieren
                            </button>
                        </article>
                    </span>

                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <form className="form" onSubmit={handleSubmit}>
                            <textarea
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
                            <span></span>
                        </article>
                    </span>
                </div>

            </div>
        </>
    )
}







