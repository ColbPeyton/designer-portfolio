import React,{useContext} from 'react';
import {WidthContext} from '../contexts/WidthContext';
import {ThemeContext} from '../contexts/ThemeContext';
import beeIcon from '../assets/branding/Bee Icon.png';
import logo from '../assets/branding/Pixel Bee Logo.png';
import '../styles/Header.scss';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';

interface HeaderProps{
    width: number;
    theme: {isLightTheme:boolean, toggleTheme: () => void}
}

export const Header = ():JSX.Element => {

    // TODO: add mobile button to scroll to top of page. 

    const width = useContext<HeaderProps['width']>(WidthContext);
    const themeContext = useContext<HeaderProps['theme']>(ThemeContext);

    const mobileHeader = ():JSX.Element => {
        return (
            <div className='header-mobile'>
                <img src={beeIcon} alt='bee' className='bee-icon'/>
                <div className='logo-container'>
                    <img src={logo} alt='Pixel Bee Banner' />
                </div>
            </div>
        )
    }

    const desktopHeader = ():JSX.Element => {
        return (
            <div className= 'header-desktop'>
                <div className='logo-container'>
                    <img src={logo} alt='Pixel Bee Banner' />
                </div>
                <nav className='links'>
                    <a href='#container-about'>about</a>
                    <a href='#container-work'>work</a>
                    <a href='#container-contact'>contact</a>
                </nav>
                <button onClick={() => themeContext.toggleTheme()}>Change Theme</button>
            </div>
        )
    }
    
    return(
        <div className='container-header'>
            {renderBasedOnScreen(width, mobileHeader, desktopHeader)}
        </div>
    )
}

