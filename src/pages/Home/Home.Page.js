import React from 'react';

import logo from '../../assets/image/logo.png';
import './Home.Page.css';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';

function HomePage() {
    return (
        <div className="Webchannel">
            <Header />
            <header className="Webchannel-header">
                <img src={logo} className="Webchannel-logo" alt="logo" />
            </header>
            <Footer />
        </div>
    );
}

export default HomePage;
