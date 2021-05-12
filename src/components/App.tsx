import React from 'react';
import {WidthProvider} from '../contexts/WidthContext';
import {ThemeProvider} from '../contexts/ThemeContext';
import {Header} from './Header';
import {About} from './About';
import {Banner} from './Banner';
import {WorkContainer} from './WorkContainer';
import {Footer} from './Footer';
import '../styles/App.scss';


export const App = ():JSX.Element => {

    return(
        <div className ='container-app'>
            <WidthProvider>
                <Header />
                <About  />
                <Banner title={'work'} color={'#F15F57'}/>
                <WorkContainer />
                <Footer />
                <Banner color={'#F7C05D'}/>
            </WidthProvider>
        </div>
        
    )
}