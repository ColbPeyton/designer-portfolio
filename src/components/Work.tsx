import React from 'react';
import {dataInfo} from '../_data/data';
import { SRLWrapper } from "simple-react-lightbox";
import '../styles/Work.scss';

interface WorkProps{
    project: dataInfo
}

export const Work = (props: WorkProps):JSX.Element => {
    
    const updateStyleOnProp = ():string => {
        return props.project.isSquare
        ? 'square'
        : ''
    }

    const handleClick = ():JSX.Element => {
        return <SRLWrapper elements={props.project.elements} />
    }



    return(
        <div className={`container-work ${updateStyleOnProp()}`} >
            <SRLWrapper>
                <img src={props.project.thumbnail.default} alt={props.project.name}/>
            </SRLWrapper>
        </div>
    )
}