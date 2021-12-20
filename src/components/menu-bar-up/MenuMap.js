import React from "react";
import { Link } from "react-router-dom";
import { MenuSubJava } from "./MenuSubJava";
import { SubMenuProvider } from "./MenuSubJavaContext";

export const MenuMap = () => {

    return (
        <div className='menu-map'>
            <div><Link to='/'>HOME</Link></div>
            <SubMenuProvider><MenuSubJava/></SubMenuProvider>  
            <div><Link to='/grafiken'>GRAFIKEN</Link></div>
            <div><Link to='/profile'>PROFILE</Link></div>
        </div>
    )
}

