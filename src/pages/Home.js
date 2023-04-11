import React from 'react';
import Header from '../Components/header/Header';
import Banner from '../Components/header/Banner'
import Footer from '../Components/footer/Footer';
import Location from '../Components/main/Location';


const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Location />
            <Footer />
        </React.Fragment>
    )
};

export default Home;