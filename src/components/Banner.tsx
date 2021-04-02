import React from 'react';


interface BannerProps{
    title?: string;
}

export const Banner = (props: BannerProps): JSX.Element => {
    return(
        <div>
            {props.title ? props.title : null}
        </div>
    )
}