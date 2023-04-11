import React from 'react';
import Header from '../Components/header/Header';
import MainError from '../Components/error/main-error';
import Footer from '../Components/footer/Footer';

const Error = () => {
    return (
        <React.Fragment>
            <Header />
            <MainError />
            <Footer />
        </React.Fragment>
    )
};

export default Error;