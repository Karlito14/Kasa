import React from 'react';
import Header from '../Components/header/Header';
import Banner from '../Components/header/Banner';
import Footer from '../Components/footer/Footer';
import DropDown from '../Components/about/Dropdown';

const recommandation = [
    {
        key : 'recommandation-1',
        title : "Fiabilité",
        description : 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        key : 'recommandation-2',
        title : "Respect",
        description : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        key : 'recommandation-3',
        title : "Service",
        description : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {   
        key : 'recommandation-4',
        title : "Sécurité",
        description : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]

const About = () => { 
    return (
        <React.Fragment>
            <Header />
            <Banner title={null} className='banner-about' />
            <div className='div-dropdown'>
                <ul>
                    {recommandation.map(({ key, title, description}) => (
                        <li key={key}>
                            <DropDown title={title} description={description} />
                        </li> 
                    ))}
                </ul>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default About;