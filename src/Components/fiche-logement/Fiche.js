import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Caroussel from "./Caroussel";
import Info from "./Info-logement";
import Dropdown from '../about/Dropdown';
import MainError from "../../Components/error/main-error";

const Fiche = () => {
    // Je récupère le ID de la fiche sélectionnée
    const {id} = useParams();

    // Je récupère l'ensemble des locations avec useState et useEffect
    const [locations, setLocations] = useState([]);
    
    useEffect( () => {
        fetch('https://kasa-application.netlify.app/locations.json')
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
                <main>
                    <Caroussel location={locationSelected}/>
                    <Info location={locationSelected} />
                    <div className="div-description-equipement">
                        <Dropdown title='Description' data={locationSelected.description}/>
                        <Dropdown title='Equipements' data={locationSelected.equipments} />
                    </div>        
                </main>
            ) 
        } 
    } else {
        return (
            <div>loading...</div>
        )
    }    
}

export default Fiche;