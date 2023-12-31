import React from 'react';
import Hero from "../components/Hero";
import MarketUpdate from "../components/MarketUpdates";
import WhyUs from "../components/WhyUs";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import {useAuth} from "../hooks/use-auth";
import  {Toaster} from "react-hot-toast";


function Home() {
    const {email} = useAuth();
    return (
        <>
            <Toaster />
            {/*{email && <Modal/>}*/}
            <Navbar/>
            <Hero/>
            <MarketUpdate/>
            <WhyUs/>
            <Join/>
            <Footer/>
        </>
    );
}

export default Home;