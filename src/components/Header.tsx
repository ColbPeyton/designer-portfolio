import React,{useContext, useState, useEffect} from 'react';
import {WidthContext} from '../contexts/WidthContext';
import beeIcon from '../assets/branding/Bee Icon.png';
import logo from '../assets/branding/Pixel Bee Logo.png';
import '../styles/Header.scss';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';

interface ContextProps{
    width: number;
}

interface HeaderState{
    height: number;
}


// App refs to Component divs and scroll method
interface HeaderProps{
    refs: {
        aboutRef: React.RefObject<HTMLDivElement>;
        workRef: React.RefObject<HTMLDivElement>;
        footerRef: React.RefObject<HTMLDivElement>;
    };
    scrollToComponent: (ref: any) => void;
}

export const Header = (props:HeaderProps):JSX.Element => {

    const width = useContext<ContextProps['width']>(WidthContext);
    const [height, setHeight] = useState<HeaderState['height']>(window.pageYOffset);

    // check current YOffset of page, render bee icon once threshold is met
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
        : 'disabled'
    }

    const callParentScroll = (ref: React.RefObject<HTMLDivElement>):void => {
        props.scrollToComponent(ref);
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
                    <button onClick={()=> callParentScroll(props.refs.aboutRef)}>about</button>
                    <button onClick={()=> callParentScroll(props.refs.workRef)}>work</button>
                    <button onClick={()=> callParentScroll(props.refs.footerRef)}>contact</button>
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

