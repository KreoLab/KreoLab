import React from "react";
import Navbar from "@/components/Navbar";
import HeroNosotros from "@/components/Nosotros/Hero";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
                <HeroNosotros />
            <Footer />
        </div>
    );
}
