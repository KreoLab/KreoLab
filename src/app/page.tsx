import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import SomosDiferentes from "@/components/SomosDiferentes";
import SomosKreoLab from "@/components/SomosKreoLab";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";


export default function Home() {
  return (

    <div>
        <Navbar />
        <Hero />
        <Nosotros />
        <SomosDiferentes />
        <SomosKreoLab />
        <Servicios />
        <Proyectos />
        <Contacto />
        <Footer />
    </div>
  );
}
