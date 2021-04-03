import React from 'react';

interface HeaderProps{
    width: number;
}

export const Header = (props: HeaderProps):JSX.Element => {

    const mobileHeader = ():JSX.Element => {
        return (
            <div className='header-mobile'>
                <p>Logo</p>
            </div>
        )
    }

    const desktopHeader = ():JSX.Element => {
        return (
            <div className= 'header-desktop'>
                <div className='logo'>
                    <p>Logo</p>
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

