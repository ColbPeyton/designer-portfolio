import React,{useState, useEffect, Props} from 'react';
import {Header} from './Header';
import {About} from './About';
import {Banner} from './Banner';
import {WorkContainer} from './WorkContainer';
import {Footer} from './Footer';


export const App = ():JSX.Element => {

    return(
        <div>
            <Header />
            <About  />
            <Banner title={'work'} color={'#F15F57'}/>
            <WorkContainer screenSize={'mobile'}/>
            <Footer />
            <Banner color={'#F7C05D'}/>
        </div>
    )
}