import React from 'react'
import '../styles/style.css'
import { NavBar } from '../components/menu-bar-up/NavBar'
import PageGraphic from './GraphicGallery/PageGraphic'

export const Grafiken = () => {
    return (
        <>
            <div className="item-0">
                <span className='nav-bar'>
                    <NavBar />
                </span>
            </div>
            <PageGraphic />
        </>
    )

}
