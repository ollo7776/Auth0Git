import React from 'react'
import '../styles/style.css'
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
                            <h1>JAVA,
                                Spring, Maven Boot2</h1>
                            <h6>ORACLE CERTIFKAT 1Z0-811 <br /> (Certified Foundations Associate)</h6>
                            <p>Junit5Test,
                                JavaTomcatEmbeded, SQLite Database, SQL commands
                                JAVA-Übungen -- www.codewars.com, Rank: 4kyu.
                                (Über 100 JAVA-Programmieraufgaben)
                                LeetCode Übungen.</p>
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
                                Am häufigsten erstelle ich Seiten in funktionalen Komponenten React Hooks.

                            </p>
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
                            <h1>Inspirierende Grafiken für jede Seite</h1>
                            <p>Jedes Grafikelement wird von mir erstellt, normalerweise in InkScape oder Gimp. Erstellt oder zeichnet jedes Grafikzeichen im .png .svg-path oder anderen Formaten</p>
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
                            <p>Über den Autor:
                            Code schreiben ist mein Hobby!
                            Ich schreibe hauptsächlich Code in der Programmiersprache Java und auch Frontend-Sprachen wie 
                            JavaScript, HTML, SCSS, ReactHooks, Ubuntu, Windows Apache2 server configuration ... Ich versuche ständig, neue Fähigkeiten zu erwerben. 
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
                            Auch das Gestalten von Grafiken für Websites macht mir großen Spaß. 
                            Alle grafischen Elemente dieser Website wurden von mir geschrieben oder in grafischen Programmen akkurat wiedergegeben. 
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
