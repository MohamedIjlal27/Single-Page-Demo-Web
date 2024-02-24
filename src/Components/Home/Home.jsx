import React from 'react'
import Header from '../Headers&Slides/Header';
import AboutPage from '../Home/Pages/About/AboutPage';
import Destination from './Pages/Destination/Destination';
import Experience from './Pages/Experience/Experience';
import Offers from './Pages/Offers/Offers';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <AboutPage />
            <Destination />
            <Experience />
            <Offers />
            <Footer />
        </div>
    )
}
