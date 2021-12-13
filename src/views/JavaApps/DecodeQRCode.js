import React, { useState, useEffect } from 'react'
import '../../styles/style.css'
import axios from 'axios'
import { NavBar } from '../../components/menu-bar-up/NavBar';
import url from '../../components/useURL.js'

export const DecodeQRCode = () => {
    const [values, setValues] = useState({
        firstCode: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)
    const [dataResp, setDataResp] = useState([])

    const handleFirstCodeInputChange = e => {
        setValues({
            ...values,
            firstCode: e.target.value
        })
    }

    const CopyToInputField = e => {
        e.preventDefault()
        setValues({
            firstCode: '[[1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],[1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1],[1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1],[1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1],[0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1],[0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1],[0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0],[1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0],[1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1],[1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0],[1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1],[1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0],[1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1]]'
        })
    }

    const handleSubmit = e => {
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
            let dataToSend = `{"qrcode":${values.firstCode}, "type":"com.reactcwqr.codewars.service.QrCodeService"}`

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
                            <h1></h1>
                            <p><label htmlFor="firstCode"
                                className="form-label">
                                <h1>Decode QR code!</h1>
                                Your code!<br />
                                Sample part of the code:<br />
                                <span className="form-sample-data"> int[][] qrcode = new int[][]<br />&#123;&#123;1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 &#125;,<br />
                                    &#123;1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1 &#125;,<br />
                                    &#123;1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1 &#125;,<br />
                                    &#123;1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 &#125;,<br />
                                    &#123;1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1 &#125;,<br />
                                    &#123;1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 &#125;,<br />
                                    &#123;1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 &#125;,<br />
                                    &#123;0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 &#125;,<br />
                                    &#123;0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1 &#125;,<br />
                                    &#123;1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1 &#125;,<br />
                                    &#123;1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1 &#125;,<br />
                                    &#123;1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0 &#125;,<br />
                                    &#123;1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 &#125;,<br />
                                    &#123;0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0 &#125;,<br />
                                    &#123;1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1 &#125;,<br />
                                    &#123;1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1 &#125;,<br />
                                    &#123;1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1 &#125;,<br />
                                    &#123;1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0 &#125;,<br />
                                    &#123;1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1 &#125;,<br />
                                    &#123;1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0 &#125;,<br />
                                    &#123;1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1 &#125;&#125;;<br />

                                    it Schould equals: "Hello"<br /></span>
                            </label>
                            </p>
                            <button className="form-input-btn"
                                onClick={CopyToInputField}>
                                Copy sample code
                            </button>
                        </article>
                    </span>

                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-inputs">
                                <textarea
                                    onChange={handleFirstCodeInputChange}
                                    value={values.firstCode}
                                    className="form-inputs"
                                    placeholder='Paste your QR code as a multi array'
                                    name="firstCode"
                                />
                                <p>Answer from server:</p>
                                {
                                    submitted && !values.firstCode ?
                                        <p style={{ color: 'red' }}>No code is pasted</p>
                                        : dataResp === 'Data is invalid' ?
                                            <p style={{ color: 'yellow' }}>Data is invalid</p>
                                            : <p style={{ color: 'green' }}>{dataResp}</p>
                                }
                            </div>
                            <button className="form-input-btn"
                                type='submit'>
                                Submit and send Data to server
                            </button>
                        </form>
                    </span>
                </div>
                {/* <div className="item-3">
                    <span className="card">
                        <div className="thumb" ></div>
                        <article>
                            <h1>ITEM 3</h1>
                            <p></p>
                            <span></span>
                        </article>
                    </span>
                </div> */}

            </div>
        </>
    )
}







