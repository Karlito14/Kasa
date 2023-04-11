import React from 'react';
import flecheBas from '../../images/fleche-bas.png';
import flecheHaut from '../../images/fleche-haut.png';
import '../../styles/about.css';
import { useState } from 'react';

const DropDown = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div>
            <h3 className='titre-deroule' onClick={() => setIsOpen(false)}>{title} <span><img src={flecheHaut} alt='fleche-directionnel'/></span></h3>
            <p className='p-deroulant'>{description}</p>
        </div>
         
    ) : (
        <h3 className='titre-deroulant' onClick={() => setIsOpen(true)}>{title} <span><img src={flecheBas} alt='fleche-directionnel'/></span></h3> 
    )
}

export default DropDown;
