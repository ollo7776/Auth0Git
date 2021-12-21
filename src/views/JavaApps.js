// Page with information about applications that work with 
// the backend written in JAVA. 
// Descriptions and a list of further sample applications

import React from 'react'
import '../styles/style.css'
import { NavBar } from '../components/menu-bar-up/NavBar'
import BackEndGradUpDown from '../images/BackEndGradUpDown.png'
import MyCode from '../images/MyCode.png'
import Certificate from '../images/Certificate.png'
import { MenuDataJava } from '../components/menu-bar-up/MenuData'
import { Link } from "react-router-dom";


export const JavaApps = () => {
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
                        <div className="thumb" style={{ backgroundImage: `url(${BackEndGradUpDown})` }}></div>
                        <article>
                            <h1>JAVA CODES!</h1>
                            <p>
                                I'm coding in Java!
                            </p>
                            <div className="item-8">
                    {MenuDataJava.map((item) => (
                        <span className="card list">
                            <article>
                                <span key={item.id}  >
                                    <Link to={item.path}
                                    >
                                        {item.title}<br />
                                    </Link>
                                    {item.description}
                                </span>
                            </article>
                        </span>

                    )
                    )
                    }
                </div>
                        </article>
                    </span>

                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${MyCode})` }}></div>
                        <p>In diesem Abschnitt stelle ich einige Anwendungen vor, die in JAVA geschrieben wurden.
                            Dies sind hauptsächlich Programme der Plattform codewars.com, aber auch meine eigenen.
                            Ich wünsche dir viel Spaß.</p>
                    </span>
                </div>
                <div className="item-3">
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${Certificate})` }}></div>
                        <article>
                            {/* <h1></h1> */}
                            <p>Am 7. Oktober 2021 habe ich die Oracle-Zertifizierung erhalten. 
                                Certified Foundations Associate 1Z0-811</p>
                            <span></span>
                        </article>
                    </span>
                </div>
                
            </div>
        </>
    )
}







