import React from 'react';
import {dataInfo} from '../_data/data';

interface WorkProps{
    project: dataInfo
}

export const Work = (props: WorkProps):JSX.Element => {
    return(
        <button className='container-work'>
            <img src={props.project.thumbnail.default} alt={props.project.name} />
        </button>
    )
}