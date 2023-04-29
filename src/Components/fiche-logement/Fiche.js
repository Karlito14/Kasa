import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Caroussel from "./Caroussel";
import Info from "./Info-logement";
import Description from "./Description";
import Equipements from "./Equipements";
import MainError from "../../Components/error/main-error";

const Fiche = () => {
    // Je récupère le ID de la fiche sélectionnée
    const {id} = useParams();

    // Je récupère l'ensemble des locations avec useState et useEffect
    const [locations, setLocations] = useState([]);
    
    useEffect( () => {
        fetch('/locations.json')
        .then(res => res.json())
        .then(data => {
            setLocations(data);
        })
        .catch(error => {
            console.error(error);
          });
    },[]);

    if(locations.length > 0) {
        let locationSelected = locations.find(element => element.id === id);
       
        if(!locationSelected) { 
            return <MainError />
        } else {
            return ( 
                <React.Fragment>
                    <Caroussel location={locationSelected}/>
                    <Info location={locationSelected} />
                    <div className="div-description-equipement">
                        <Description title='Description' description={locationSelected.description} />
                        <Equipements title='Equipements' materiel={locationSelected.equipments} />
                    </div>        
                </React.Fragment>
            ) 
        } 
    } else {
        return (
            <div>loading...</div>
        )
    }    
}

export default Fiche;