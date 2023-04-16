import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Caroussel from "./Caroussel";

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
    const locationSelected = locations.find(element => element.id === id);
    
    return (
        <Caroussel location={locationSelected}/>
    )
    
}

export default Fiche;