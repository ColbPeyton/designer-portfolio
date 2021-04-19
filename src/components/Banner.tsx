import React from 'react';
import '../styles/Banner.scss';

interface BannerProps{
    title?: string;
}

export const Banner = React.memo((props: BannerProps): JSX.Element => {

    const renderText = ():JSX.Element => {
        return props.title
        ? <h1>{props.title}</h1>
        : <div></div>
    }

    return(
        <div className='container-banner'>
            <div className='banner-text'>
                {renderText()}
            </div>
        </div>
    )
});