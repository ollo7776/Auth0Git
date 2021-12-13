import React, { useState, useEffect } from 'react'
import url from '../../components/useURL'
import axios from 'axios'
import '../../styles/style.css'

export const FormDienstList = () => {
    //AXIOS GET ALL DIENSTS
    const [diensts, setDiensts] = useState([])
    const [urlDB, setUrlDB] = useState()
    const [nothingToShow, setNothingToShow] = useState(true)
    useEffect(() => {
        setUrlDB(url + ':8080/diensts')
        console.log(urlDB)
        axios.get(urlDB)
            .then(function (response) {
                setNothingToShow(false)
                setDiensts(response.data)
                console.log(response.data)
                if ((response.data).length === 0) {
                    setNothingToShow(true)
                    // return 'Keine Ergebnisse, aber sei nicht glücklich, dass etwas mit Sicherheit kaputt geht'
                }
            })
            .catch(function (error) {
                setNothingToShow(true)
                console.log(error)
            })
    }, [urlDB])

    return (
            <>
                {/* DIENSTEN MAP LISTE */}
                <div className="diensts-list">
                    {nothingToShow ? <>
                        Es gibt keine Ergebnisse,<br />
                        aber sei nicht glücklich,<br />
                        es wird definitiv bald wieder brechen.<br /></> : ''}

                    {diensts.map((dienst) => (
                        <div className="item-dienstslist" key={dienst.id}>
                            <h5 className="card-header">Dienst Nr: {dienst.number}</h5>
                            <div className="card-body">
                                <span className="label">Datum: {dienst.date}</span><br />
                                <span className="label">von {dienst.hourBegin}:{dienst.minutesBegin} bis {dienst.hourEnd}:{dienst.minutesEnd}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </>
    )
}