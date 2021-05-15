import React,{useContext} from 'react';
import {WidthContext} from '../contexts/WidthContext';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreen';
import logo from '../assets/branding/Pixel Bee Logo.png';
import '../styles/About.scss';

interface AboutProps{
    width: number;
}

export const About = ():JSX.Element => {

    const width = useContext<AboutProps['width']>(WidthContext);

    const mobileAbout = ():JSX.Element =>{
        return(
            <div className='about-mobile'>
                <div className='top'>
                    <div className='image-container'>
                        <img src={logo} alt='projects'/>
                    </div>
                    <div className='title-container'>
                        <h1 className='large'>Hi</h1> 
                        <h1 className='small'>I'm Hanna!</h1>
                    </div>
                </div>
                <div className='bot'>
                    <div className='tagline-container'>
                        <h2>Let's work together!</h2>
                    </div>
                    <div className='desc-container'>
                        <p>
                            My career in graphic design started in 2015. 
                            Since then, I've worked as an in-house, agency, and freelance designer. 
                            I love collaborating with clients to help them achieve their goals. 
                            Whether it's building a cohesive brand identity, designing an eye-catching brochure, or creating a strategic social media campaign, I'm here to help!
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
                            My career in graphic design started in 2015. 
                            Since then, I've worked as an in-house, agency, and freelance designer. 
                            I love collaborating with clients to help them achieve their goals. 
                            Whether it's building a cohesive brand identity, designing an eye-catching brochure, or creating a strategic social media campaign, I'm here to help!
                        </p>
                    </div>
             </div>
        </div>
        )
       
    }

    return (
        <div  className='container-about'>
            {renderBasedOnScreen(width, mobileAbout, desktopAbout)}
        </div>
    )
}