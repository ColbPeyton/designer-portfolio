import React from 'react';
import {Header} from './Header';
import {About} from './About';
import {Banner} from './Banner';
import {WorkContainer} from './WorkContainer';

export class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <About />
                <Banner title={'work'} />
                <WorkContainer screenSize={'mobile'}/>
                <Banner />
            </div>
        )
    }
}