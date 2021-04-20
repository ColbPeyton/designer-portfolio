import React from 'react';
import '../styles/Banner.scss';

interface BannerProps{
    title?: string;
    color?: string;
}


export const Banner = React.memo((props: BannerProps): JSX.Element => {

    const renderText = ():JSX.Element => {
        return props.title
        ? <h1>{props.title}</h1>
        : <div></div>
    }

    return(
        <div className='container-banner'>
            <div className='banner-text' style={{backgroundColor: props.color}}>
                {renderText()}
            </div>
        </div>
    )
});