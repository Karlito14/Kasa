import React from 'react';
import '../../styles/header.css';

const Banner = ({title}) => {
    return (
        <div className='div-banner'>
            <h2 className='h2-banner'>{title}</h2>
        </div>
    )
}

export default Banner;