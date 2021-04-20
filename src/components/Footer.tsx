import React from 'react';
import '../styles/Footer.scss';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';

interface FooterProps{
    width:number;
}

export const Footer = (props:FooterProps):JSX.Element => {

    const mobileFooter = ():JSX.Element => {
        return(
            <div className='mobile-footer'>

            </div>
        )
    }

    const desktopFooter = ():JSX.Element => {
        return(
            <div className='mobile-footer'>

            </div>
        )
    }


    return(
        <div className='container-footer'>
            {renderBasedOnScreen(props.width, mobileFooter, desktopFooter)}
        </div>
    )
}