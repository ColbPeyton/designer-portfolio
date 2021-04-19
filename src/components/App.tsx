import React,{useState, useEffect} from 'react';
import {Header} from './Header';
import {About} from './About';
import {Banner} from './Banner';
import {WorkContainer} from './WorkContainer';

export const App = ():JSX.Element => {
    const [width, setWidth] = useState(window.innerWidth);

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
            <Banner title={'work'} />
            <WorkContainer screenSize={'mobile'}/>
            <Banner />
        </div>
    )
}