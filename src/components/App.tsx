import React, {useRef} from 'react';
import {WidthProvider} from '../contexts/WidthContext';
import {Header} from './Header';
import {About} from './About';
import {Banner} from './Banner';
import {WorkContainer} from './WorkContainer';
import {Footer} from './Footer';
import '../styles/App.scss';


export const App = ():JSX.Element => {

    // refs to container divs
    // used to call scroll method in Header component
    const aboutRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToComponent = (ref:any):void => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <div className ='container-app'>
            <WidthProvider>
                <Header scrollToComponent={scrollToComponent} refs={{aboutRef, workRef, footerRef}}/>
                <div className='container-app-about' ref={aboutRef}>
                    <About />
                </div>
                <div className='container-app-banner' ref={workRef}>
                    <Banner title={'work'} color={'#F15F57'}/>
                </div>
                <div className='container-app-work' >
                    <WorkContainer />
                </div>
                <div className='container-app-footer' ref={footerRef}>
                    <Footer />
                </div>
                <Banner color={'#F7C05D'}/>
            </WidthProvider>
        </div>
        
    )
}