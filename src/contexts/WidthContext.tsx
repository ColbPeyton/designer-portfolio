import React, {createContext, useEffect, useState} from 'react';
const defaultValue = 480;


export const WidthContext = createContext(defaultValue);

interface WidthState{
    width: number;
  }

export const WidthProvider = (props:any):JSX.Element => {
    const [width, setWidth] = useState<WidthState['width']>(window.innerWidth);

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
        <WidthContext.Provider value={width}>
            {props.children}
        </WidthContext.Provider>
    )
}