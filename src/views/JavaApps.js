import React from 'react'
import '../styles/style.css'
import { NavBar} from '../components/menu-bar-up/NavBar'
import BackEndGradUpDown from '../images/BackEndGradUpDown.png'
import MyCode from '../images/MyCode.png'
import Certificate from '../images/Certificate.png'


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
                            <p>Am 7. Oktober 2021 habe ich die Oracle-Zertifizierung erhalten</p>
                            <p>Certified Foundations Associate 1Z0-811</p>
                            <span></span>
                        </article>
                    </span>
                </div>

            </div>
        </>
    )
}







