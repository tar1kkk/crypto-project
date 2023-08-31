import React from 'react';
import Hero from "../components/Hero";
import MarketUpdate from "../components/MarketUpdates";
import WhyUs from "../components/WhyUs";
import Join from "../components/Join";
import Footer from "../components/Footer";
import {useAuth} from "../hooks/use-auth";

function Home() {
    return (
        <>
            <Hero/>
            <MarketUpdate/>
            <WhyUs/>
            <Join/>
            <Footer/>
        </>
    );
}

export default Home;