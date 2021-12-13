import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import '../styles/style.css'
import { NavBar } from '../components/menu-bar-up/NavBar'

export const DrSchiffbruch = () => {
    return (
        <div className="wrapper">
            <div className="box-1">
                <span className='nav-bar'>
                    <NavBar />
                </span>
            </div>
            <div className="box-2"><span className='card'>AUSFALL ! ! !</span></div>
            <div className="box-3"><span className='card'>Three</span></div>
            <div className="box-4"><span className='card'>Four</span></div>
            <div className="box-5"><span className='card'>Five</span></div>
            <div className="box-6"><span className='card'>Six</span></div>
            <div className="box-7"><span className='card'>Seven</span></div>
            <div className="box-8"><span className='card'>Eight</span></div>

            {/* <div className="box"> <NavBar /> </div>
            <div className="box">Two</div>
            <div className="box">Three</div>
            <div className="box">Four</div>
            <div className="box">Five</div>
            <div className="box">Six</div>
            <div className="box">Seven</div>
            <div className="box">Eight</div> */}

            {/* <span > <NavBar /> </span>
            <span >Two</span>
            <span >Three</span>
            <span >Four</span>
            <span >Five</span>
            <span >Six</span>
            <span >Seven</span>
            <span >Eight</span> */}
        </div>
    )

}
