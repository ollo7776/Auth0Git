import React from 'react'
import '../../styles/style.css'
import { NavBar } from '../../components/menu-bar-up/NavBar'
import PimkGong from './PimkGong'
import MyCode from '../../images/MyCode.png'

export const Spielchen = () => {
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
                            <PimkGong />
                        </article>
                    </span>
                </div>

                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${MyCode})` }}></div>

                        <div>
                            There is no need to panic! <br />
                            It's only a game... <br />
                            Use the arrows to prevent the ball from escaping <br />over the left edge.<br />
                            Remember, this ball is smart. <br />
                            Try to get 3 points! Good Luck! ;-) 
                        </div>
                    </span>
                </div>
                <div className="item-3">
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${MyCode})` }}></div>
                        <article>
                        <p>In diesem Abschnitt stelle ich einige Anwendungen vor, die in ReactHooks mit Framer Motion geschrieben wurden.
                        </p>
                        <p>Computerspiele haben mich schon früh fasziniert. Das erste Spiel, das ich gespielt habe, war Tennis. Deshalb habe ich mir erlaubt, eine Nachbildung dieses Spiels zu machen.</p>
                            <span></span>
                        </article>
                    </span>
                </div>

            </div>
        </>
    )
}







