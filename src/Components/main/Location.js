import React, { useEffect, useState } from 'react';
import '../../styles/main.css';

const Location = () =>{
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
        .then(res => res.json())
        .then((result) => {
            setLocations(result);
        })
    }, []);

    return (
        <ul className='ul-grid'>
            {locations.map(({id, title, cover}) => {
                return (
                    <li key={id}>
                        <figure className='figure-location'>
                            <img className='img-location' src={cover} alt={title}/>
                            <figcaption className='titre-location'>{title}</figcaption> 
                        </figure>      
                    </li>
                )
            })}
        </ul>
    );
}


export default Location;