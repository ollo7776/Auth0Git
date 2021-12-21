import React from "react";
import { MenuBarUp } from "../menu-bar-up/MenuBarUp";
// Additional container for the top menu. Here you can add some more items in the top menu bar

export const NavBar = () => {
  return (
    <div  className='nav-bar'>
      <MenuBarUp />
    </div>
  )
}