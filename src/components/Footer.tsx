import React from 'react';
import '../styles/Footer.scss';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';
import logo from '../assets/branding/Pixel Bee Logo.png'
interface FooterProps{
    width:number;
}

export const Footer = (props:FooterProps):JSX.Element => {

    const mobileFooter = ():JSX.Element => {
        return(
            <div className='mobile-footer'>
                <div className='top'>
                    <img src={logo} alt='contact message' />
                </div>
                <div className='mid'>
                        <a href=''>etsy</a>
                        <a href=''>insta</a>
                </div>
                <div className='bot'>
                    <div className='letter-container'>
                        <img src={logo} alt='contact message' />
                    </div>
                    <div className='contact-container'>
                        <h2>get in touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eius debitis ullam laborum reprehenderit corrupti.</p>
                    </div>
                </div>
            </div>
        )
    }

    const desktopFooter = ():JSX.Element => {
        return(
            <div className='desktop-footer'>
                <div className='top'>
                    <div className='left'>
                        <a href=''>etsy</a>
                        <a href=''>insta</a>
                    </div>
                    <div className='right'>
                        <img src={logo} alt='contact message' />
                    </div>
                </div>
                <div className='bot'>
                    <div className='letter-container'>
                        <img src={logo} alt='contact message' />
                    </div>
                    <div className='contact-container'>
                        <h2>get in touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eius debitis ullam laborum reprehenderit corrupti.</p>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className='container-footer'>
            {renderBasedOnScreen(props.width, mobileFooter, desktopFooter)}
        </div>
    )
}