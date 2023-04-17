import React, { useState } from 'react';
import flecheHaut from '../../images/fleche-haut.png';
import flecheBas from '../../images/fleche-bas.png';
import '../../styles/fiche-logement.css'

const Equipements = ({title, description}) => {
    const equipements = description;
    const [isOpen, setIsOpen] = useState(true);

    return isOpen ? (
        <div className='div-equipements'>
            <h3 className='h3-equipements' onClick={() => {
                setIsOpen(false)
            }}>{title} <span><img src={flecheHaut} alt='fleche-haut' className='img-description' /></span></h3>
            <ul className='ul-equipements'>
                {equipements.map((element, index) => {
                    return (
                        <li key={`${index}-${element}`}>{element}</li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className='div-equipements'>
            <h3 className='h3-equipements' onClick={() => {setIsOpen(true)}}>{title} <span><img src={flecheBas} alt='fleche-bas' className='img-description'/></span></h3>
        </div>
    )
}

export default Equipements;
