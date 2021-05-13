import React from 'react';
import {dataInfo} from '../_data/data';
import { SRLWrapper } from "simple-react-lightbox";

interface WorkProps{
    project: dataInfo
}

export const Work = (props: WorkProps):JSX.Element => {
    
    const updateStyleOnProp = ():string => {
        return props.project.isSquare
        ? 'square'
        : ''
    }



    return(
        <SRLWrapper>
            <button className={`container-work ${updateStyleOnProp()}`}>
                <img src={props.project.thumbnail.default} alt={props.project.name} />
            </button>
        </SRLWrapper>
    )
}