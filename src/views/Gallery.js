import React from 'react'
import '../styles/style.css'
import { NavBar } from '../components/menu-bar-up/NavBar'
import { GraphicGallery } from './GraphicGallery/GraphicGallery'

export const Gallery = () => {
    return (
        <>
            <div className="item-0">
                <span className='nav-bar'>
                    <NavBar />
                </span>
            </div>
            <GraphicGallery />
        </>
    )

}
