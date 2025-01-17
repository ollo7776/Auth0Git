// Home Home with GRID with consecutive blocks (item-0 to 9)
// displayed responsively depending on the size of the user's device

import React from 'react'
import '../styles/style.css'
import { Link } from "react-router-dom";
//import logoBackEnd from '../images/backend1.png'
//import BackEndSky from '../images/BackEndSky.png'
import BackEndGradUpDown from '../images/BackEndGradUpDown.png'
//import FrontEndSky from '../images/FrontEndSky.png'
//import FrontEndEmpty from '../images/FrontEndEmpty.png'
import MyCode from '../images/MyCode.png'
import Certificate from '../images/Certificate.png'
import FrontEndJSReact from '../images/FrontEndJSReact.png'
import FrontEndHTMLCSSFrame from '../images/FrontEndHTMLCSSFrame.png'
import FrontSystems from '../images/FrontSystems.png'
import GraphicSVG from '../images/GraphicSVG.png'
import FormDesign from '../images/FormDesign.png'
//import ComaBlue from '../images/ComaBlue.png'
import { NavBar } from '../components/menu-bar-up/NavBar'
import { LettersAnim } from './HomeComponents/LettersAnim'
import PimkGong from '../images/PimkGong.png'
// import { AppUserContext } from '../componentUserContext/AppUserContext'

export const Home = () => {

    return (
        <>
            <div className="body-container">
                <div className='item-0'>
                    <div>
                        <NavBar />
                    </div>
                </div>
                <div className="item-1">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${BackEndGradUpDown})` }}></div>
                        <article>
                            <p>Auf dieser Seite finden Sie Informationen zu meiner Leidenschaft
                                und in welchen Bereichen ich versuche mich weiterzuentwickeln.</p>
                            Im Oktober 2021 habe ich ein Zertifikat erhalten:
                            <h6>ORACLE Certified Foundations Associate 1Z0-811</h6>
                            <p><Link to='/java-apps'>Beispielanwendungsprojekte</Link></p>
                            <p>JAVA, Spring, Maven Boot2, Junit5Test,
                                JavaTomcatEmbeded, SQLite Database, SQL commands
                                JAVA-Übungen -- www.codewars.com, Rank: 4kyu.
                                (Über 100 JAVA-Programmieraufgaben)
                                LeetCode oder Exercism.org Übungen.</p>
                            <span>Back - End</span>
                            {/* <div class="thumb" ></div> */}
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-2">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${FrontEndJSReact})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            <h1>Frontend: JavaScript, React Hooks, Jquery</h1>
                            <p>Ich verwende geeignete Programmiersprachen und Frameworks, um eine One-Page-App-Website zu erstellen.
                                Am häufigsten - React Hooks. <br /><br />
                                Spiel mein Spiel. Viel Spaß!    
                            </p>
                            <Link to='/spielchen'
                                >
                                    <div className="thumb" style={{ backgroundImage: `url(${PimkGong})` }}></div>
                                </Link>
                            <span>Front - End</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-3">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${FrontEndHTMLCSSFrame})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            <h1>Html, CSS, Framer - Motion </h1>
                            <p>Ich erstelle Websites in HTML, CSS und Sass (Stylesheet-Sprache) SASS. Ich verwende Framer Motion (eine produktionsbereite React-Animations- und Gestenbibliothek) oder CSS @keyframes für Animationseffekte</p>
                            <span>FRONT - END</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-4">
                    {/* <a href="ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${FrontSystems})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            <h1>Server Platforms und Systeme Konfiguration</h1>
                            <p>AWS Amazon, GoogleCloud, Apache2, dyndns.sh,
                                DomainAWS Route53 configuration, Ionos Server Configuration auf Ubuntu 20.04
                                mit free SSL LetsEncrypt
                                oder auch auf eigene Server (Zuhause) auch Ubuntu 20.04. mit SSL</p>
                            <span>SERVERS SYSTEME</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-5">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${FormDesign})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            <h1>UI-UX-Formulare für jeden Benutzer</h1>
                            <p>Ich lerne ständig dazu und suche nach neuen Lösungen, um Benutzerformulare zu erstellen.
                                Benutzerfreundliche Schnittstelle mit Berücksichtigung von Gewohnheiten und Kenntnissen der Online-Umgebung,
                                Ich benutze Bootstrap, React-Hook-Form oder JavaFX</p>
                            {/* <p>User-friendly interface with attention to habits and knowledge of the online environment</p> */}
                            <span>UI - UX</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-6">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${GraphicSVG})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            <h1>Vektor- oder Rastergrafiken</h1>
                            <p>Jedes Grafikelement auf alle meine Webseiten wird von mir erstellt (in InkScape oder Gimp). Viele grafische Elemente erfinde ich selbst. Alle Grafiken und Logos auf dieser Webseite die Grafiken und Logos wurden von mir im Grafikprogramm neu gezeichnet.</p>
                            <LettersAnim />
                            <span>GRAFIKEN</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-7">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${MyCode})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            {/* <h1>ollo</h1> */}
                            <p>Über den Autor:</p>
                            Code schreiben ist mein Hobby!
                            Ich schreibe hauptsächlich Code in der Programmiersprache Java und auch Frontend-Sprachen wie
                            JavaScript, HTML, SCSS, ReactHooks mit Animation in CSS oder Framer Motion.
                            Ich konfiguriere Systeme und Servers wie Ubuntu, Windows Apache2 ...
                            Ich versuche ständig, neue Fähigkeiten zu erwerben.
                            <p>Auf GitHub können Sie den Quellcode meiner Anwendungen einsehen:</p>
                            <p> https://github.com/ollo7776

                            </p>
                            <span>ollo.link</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-9">
                    {/* <a href="https://ollo.link" className="card"> */}
                    <span className="card">
                        <div className="thumb" style={{ backgroundImage: `url(${Certificate})` }}></div>
                        {/* <div className="thumb" ></div> */}
                        <article>
                            {/* <h1>ollo</h1> */}
                            <p>Im Jahr 2021 habe ich das Zertifikat 1Z0-811 JAVA ORACLE Java (Certified Foundations Associate) erhalten.
                            </p>
                            <span>ollo.link</span>
                        </article>
                        {/* </a> */}
                    </span>
                </div>
                <div className="item-8">
                    <span className="card">
                        <article>
                            {/* <AppUserContext /> */}
                            <span> www.ollo.link - - adress: Eschborn - - email: ollo7776@gmail.com - - telefon: 015207073112 </span>
                        </article>
                    </span>
                </div>
            </div>

        </>
    )
}

export default Home
