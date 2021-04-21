import React from 'react';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';
import logo from '../assets/branding/Pixel Bee Logo.png'

import '../styles/Footer.scss';

interface FooterProps{
    width:number;
}

const urls = {
    insta : 'https://www.instagram.com/pixelbeecreative/',
    etsy: 'https://www.etsy.com/shop/PixelBeeCreativeShop'
};

export const Footer = (props:FooterProps):JSX.Element => {

    const mobileFooter = ():JSX.Element => {
        return(
            <div className='mobile-footer'>
                <div className='top'>
                    <img src={logo} alt='contact message' />
                </div>
                <div className='mid'>
                        <a href={urls.etsy} className='link-btn'>etsy</a>
                        <a href={urls.insta} className='link-btn'>insta</a>
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
                        <a href={urls.etsy} className='link-btn'>etsy</a>
                        <a href={urls.insta} className='link-btn'>insta</a>
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