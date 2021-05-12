import React,{useContext, useState, useEffect} from 'react';
import {WidthContext} from '../contexts/WidthContext';
import beeIcon from '../assets/branding/Bee Icon.png';
import logo from '../assets/branding/Pixel Bee Logo.png';
import '../styles/Header.scss';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';

interface HeaderProps{
    width: number;
}

interface HeaderState{
    height: number;
}

export const Header = ():JSX.Element => {

    // TODO: add mobile button to scroll to top of page. 

    const width = useContext<HeaderProps['width']>(WidthContext);
    const [height, setHeight] = useState<HeaderState['height']>(window.pageYOffset);

    const updateHeight = () =>{
        setHeight(window.pageYOffset);
    }

    useEffect(()=>{
        window.addEventListener("scroll", updateHeight);
        return () => {
          window.removeEventListener("scroll", updateHeight);
        }
    })
  
    const renderButtonAtYOffset = ():string => {
        return height >= 150 
        ? 'active'
        : ''
    }


    const mobileHeader = ():JSX.Element => {
        return (
            <div className='header-mobile'>
                <button className={`bee-container ${renderButtonAtYOffset()}`} onClick={()=> {window.scrollTo({top: 0, behavior: 'smooth'})}}>
                    <img src={beeIcon} alt='bee'/>
                </button>
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
            </div>
        )
    }
    
    return(
        <div className='container-header'>
            {renderBasedOnScreen(width, mobileHeader, desktopHeader)}
        </div>
    )
}

