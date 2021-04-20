import React,{useState, useEffect, Props} from 'react';
import {Header} from './Header';
import {About} from './About';
import {Banner} from './Banner';
import {WorkContainer} from './WorkContainer';
import {Footer} from './Footer';

interface AppState{
  width: number;
}

export const App = ():JSX.Element => {
    const [width, setWidth] = useState<AppState['width']>(window.innerWidth);

    // Header will change based on size of screen, detect change in width
    useEffect(()=>{
        window.addEventListener("resize", updateWidth);
        return () => {
          window.removeEventListener("resize", updateWidth);
        }
    })
  
    function updateWidth(){
      setWidth(window.innerWidth);
    }
    return(
        <div>
            <Header width={width}/>
            <About width={width} />
            <Banner title={'work'} color={'#F15F57'}/>
            <WorkContainer screenSize={'mobile'}/>
            <Footer width={width}/>
            <Banner color={'#F7C05D'}/>
        </div>
    )
}