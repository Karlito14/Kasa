import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/main.css';

const Location = () =>{
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        fetch('locations.json')
        .then(res => res.json())
        .then((result) => {
            setLocations(result);
        })
    }, []);

    return (
        <div className='ul-grid'>
            {locations.map(({id, title, cover}) => {
                return (  
                    <NavLink to={`/fiche/${id}`} key={id}>
                        <figure className='figure-location'>
                            <img className='img-location' src={cover} alt={title}/>
                            <figcaption className='titre-location'>{title}</figcaption> 
                        </figure> 
                    </NavLink>  
                )
            })}
        </div>
    );
}


export default Location;