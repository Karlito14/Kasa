import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Caroussel from "./Caroussel";
import Info from "./Info-logement";

const Fiche = () => {
    // Je récupère le ID de la fiche sélectionnée
    const {id} = useParams();

    // Je récupère l'ensemble des locations avec useState et useEffect
    const [locations, setLocations] = useState([]);
    
    useEffect( () => {
        fetch('/locations.json')
        .then(res => res.json())
        .then(data => {
            setLocations(data)
        });
    },[]);

    // J'utilise la méthode find pour récupérer l'objet qui correspond à mon ID
    let locationSelected = locations.find(element => element.id === id);
    
    return locations.length === 0 ? (
        <div><p>Loading...</p></div>
    ) : (
        <React.Fragment>
            <Caroussel location={locationSelected}/>
            <Info location={locationSelected} />
        </React.Fragment>
    )  
}

export default Fiche;