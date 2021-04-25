import React, {createContext, useState} from 'react';

interface defaultContext{
    isLightTheme: boolean, 
    toggleTheme: () => void;
}

const defaultValue:defaultContext ={
    isLightTheme: true,
    toggleTheme: () => {}
}

export const ThemeContext = createContext(defaultValue);

interface ThemeState{
    themeColor: boolean;
}

export const ThemeProvider = (props:any):JSX.Element => {
    const [isLightTheme, setIsLightTheme] = useState<ThemeState['themeColor']>(true);

    const toggleTheme = ():void => {
        setIsLightTheme(!isLightTheme);
    }

    const contextValue = {
        isLightTheme, 
        toggleTheme
    }

    return(
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}
