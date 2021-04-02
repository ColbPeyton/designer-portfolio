import React from 'react';

interface WorkProps{
    imageUrl: string;
    title: string;
    desc: string;
}

export const Work = (props: WorkProps):JSX.Element => {
    return(
        <div>
            {props.imageUrl}
            {props.title}
            {props.desc}
        </div>
    )
}