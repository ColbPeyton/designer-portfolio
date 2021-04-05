import React from 'react';
import beeIcon from '../assets/branding/Bee Icon.png';
import logo from '../assets/branding/Pixel Bee Logo.png';

interface HeaderProps{
    width: number;
}

export const Header = (props: HeaderProps):JSX.Element => {

    // TODO: add mobile button to scroll to top of page. 

    const mobileHeader = ():JSX.Element => {
        return (
            <div className='header-mobile'>
                <button className='bee-icon-container'>
                    <img src={beeIcon} alt='bee' />
                </button>
                <div className='logo'>
                    <img src={logo} alt='Pixel Bee Banner' />
                </div>
            </div>
        )
    }

    const desktopHeader = ():JSX.Element => {
        return (
            <div className= 'header-desktop'>
                <div className='logo'>
                    <img src={logo} alt='Pixel Bee Banner' />
                </div>
                <nav className='links'>
                    <a href='#container-about'>about</a>
                    <a href='#container-work'>work</a>
                    <a href='#container-contact'>contact</a>
                </nav>
            </div>
        )
    }

    const renderHeaderBasedOnScreenSize = ():JSX.Element => {
        return props.width <= 480 
            ? mobileHeader() 
            : desktopHeader();
    }


    return(
        <div className='container-header'>
            {renderHeaderBasedOnScreenSize()}
        </div>
    )
}

