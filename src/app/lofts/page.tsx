import React from "react";
import Navbar from "@/components/Navbar";
import LoftsUno from "@/components/Lofts/LoftsUno";
import PaquetesDeExperiencia from "@/components/Lofts/PaquetesDeExperiencia";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <div>
            <Navbar />
                <LoftsUno />
                <PaquetesDeExperiencia />
            <Footer />
        </div>
    );
}
