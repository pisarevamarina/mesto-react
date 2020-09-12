import React from 'react'
import Logo from '../images/header__logo.png'

export default function Header () {
   return(
    <header className="header">
    <img
      src={Logo}
      alt="Логотип Место"
      className="header__logo"
    />
  </header>
   ) 
}