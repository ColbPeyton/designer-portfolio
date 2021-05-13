import React,{useContext} from 'react';
import {WidthContext} from '../contexts/WidthContext';
// import axios from 'axios';
import {Work} from './Work';
import {dataInfo, data} from '../_data/data';


interface WorkContainerProps{
    width: number;
}

export const WorkContainer = (): JSX.Element => {

    const width = useContext<WorkContainerProps['width']>(WidthContext);
    
    const addClassBasedOScreenSize = ():String => {
        return width <= 480 
        ? 'mobile'
        : 'desktop';
    }

    const renderProjects = ():JSX.Element => {
        return(
            <div className='container-projects'>
                {data.map((project)=>{
                    return <Work key={project.id} project={project} />
                })}
            </div>
        )
    }

    return(
        <div className={`container-work-container ${addClassBasedOScreenSize()}`}>
            {renderProjects()}
        </div>
    )
    
}