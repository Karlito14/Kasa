import React from 'react';
import Logo from './Logo.js';
import Navigation from './Navigation.js';
import '../../styles/header.css';

const Header = () => {
    return(
        <header className='header'>
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header;