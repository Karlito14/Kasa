import React from 'react';
import fleche from '../../images/fleche-bas.png';
import '../../styles/dropDown.css';

const DropDown = ({ title }) => {
    return (
        <h3 className='titre-deroulant'>{title} <span><img src={fleche} alt='fleche-directionnel'/></span></h3>
    )
}

export default DropDown;
