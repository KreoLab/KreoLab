import React from "react";
import Navbar from "@/components/Navbar";
import HeroContacto from "@/components/Contacto/Hero";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
                <HeroContacto />
            <Footer />
        </div>
    );
}
