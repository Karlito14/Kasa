import React, { useState } from "react";
import flecheHaut from '../../images/fleche-haut.png';
import flecheBas from '../../images/fleche-bas.png';

const Description = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(true);

    return isOpen ? (
        <div className="div-description">
            <h3 className="h3-description" onClick={() => {
                setIsOpen(false)
            }}>{title} <span><img src={flecheHaut} alt="fleche" className="img-description"/></span></h3>
            <p className="p-description">{description}</p>
        </div>
    ) : (
        <div className="div-description">
            <h3 className="h3-description" onClick={() => {
                setIsOpen(true)
            }}>{title} <span><img src={flecheBas} alt="fleche" className="img-description"/></span></h3>
        </div>
    )
}

export default Description;