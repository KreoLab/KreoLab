import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Inicio/Hero";
import CasaRenta from "@/components/Inicio/CasasRenta";
import DepartamentoSueños from "@/components/Inicio/DepartamentoSueños";
import Contacto from "@/components/Inicio/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>
        <Navbar />
            <Hero />
            <CasaRenta />
            <DepartamentoSueños />
            <Contacto />
        <Footer />
    </div>
  );
}
