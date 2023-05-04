import React from 'react';
import flecheBas from '../../images/fleche-bas.png';
import flecheHaut from '../../images/fleche-haut.png';
import '../../styles/about.css';
import { useState } from 'react';

const DropDown = ({ title, data, className, className2, classP }) => {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div>
            <h3 className={className} onClick={() => setIsOpen(false)}>{title} <span><img src={flecheHaut} alt='fleche-directionnel'/></span></h3>
            {typeof data === 'string' ? 
                <p className={classP}>{data}</p> : 
                <ul className='ul-equipements'>
                    {data.map((element, index) => {
                        return (
                            <li key={`${index}-${element}`}>{element}</li>
                        )
                    })}
                </ul> 
            }         
        </div>        
    ) : (
        <div>
            <h3 className={className2} onClick={() => setIsOpen(true)}>{title} <span><img src={flecheBas} alt='fleche-directionnel'/></span></h3> 
        </div>      
    )
}

export default DropDown;
