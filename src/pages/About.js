import React from 'react';
import Header from '../Components/header/Header';
import Banner from '../Components/header/Banner';
import Footer from '../Components/footer/Footer';
import DropDown from '../Components/about/Dropdown';

const About = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <div>
                <ul>
                    <li>
                        <DropDown title ='Fiabilité'/>
                    </li>
                    <li>
                        <DropDown title ='Respect'/>
                    </li>
                    <li>
                        <DropDown title ='Service'/>
                    </li>
                    <li>
                        <DropDown title ='Sécurité'/>
                    </li>
                </ul>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default About;