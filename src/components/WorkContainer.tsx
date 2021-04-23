import React,{useState, useContext} from 'react';
import {WidthContext} from '../contexts/WidthContext';
// import axios from 'axios';
import {Work} from './Work';

interface WorkContainerProps{
    width: number;
}

interface WorkContainerState{
    workData: string[][];
}

export const WorkContainer = (): JSX.Element => {

    const [workData, setWorkData] = useState<WorkContainerState['workData']>([]);
    const width = useContext<WorkContainerProps['width']>(WidthContext);
    
    const addClassBasedOScreenSize = ():String => {
        return width <= 480 
        ? 'mobile'
        : 'desktop';
    }

    return(
        <div className={`container-work-container ${addClassBasedOScreenSize()}`}>
            Work Container
            <Work imageUrl="url" title="title" desc={'desc'}/>
        </div>
    )
    
}