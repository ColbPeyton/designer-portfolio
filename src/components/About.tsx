import React from 'react';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';
import logo from '../assets/branding/Pixel Bee Logo.png';

interface AboutProps{
    width: number;
}

export const About = (props:AboutProps):JSX.Element => {

    const mobileAbout = ():JSX.Element =>{
        return(
            <div className='about-mobile'>
                <div className='top'>
                    <div className='image-container'>
                        <img src={logo} alt='projects'/>
                    </div>
                    <div className='title-container'>
                        <h1>hi there</h1>
                    </div>
                </div>
                <div className='bot'>
                    <div className='desc-container'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sequi temporibus cumque exercitationem similique accusantium totam!
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const desktopAbout = ():JSX.Element => {
        return(
            <div className='about-desktop'>
                <div className='left'>
                    <div className='image-container'>
                        <img src={logo} alt='projects'/>
                    </div>
                </div>
                <div className='right'>
                    <div className='title-container'>
                        <h1>hi there</h1>
                    </div>
                    <div className='desc-container'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sequi temporibus cumque exercitationem similique accusantium totam!
                        </p>
                    </div>
             </div>
        </div>
        )
       
    }

    return (
        <div  className='about-container'>
            {renderBasedOnScreen(props.width, mobileAbout, desktopAbout)}
        </div>
    )
}