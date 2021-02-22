import React from 'react'
import logo from '../../img/l-header-logo.png'
import './header.scss';

const Header = () => {
    return(
        <header>
            <img src ={logo}></img>
            <h1>Everybody Gets<br/> Rewarded!</h1>
            <p>Turn your everyday customer into a loyal one. It’s never been easier.</p>
        </header>
    )
}

export default Header