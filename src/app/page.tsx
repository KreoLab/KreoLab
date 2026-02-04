import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import SomosDiferentes from "@/components/SomosDiferentes";
import TecnologADeVanguardia from "@/components/TecnologíaDeVanguardia";
import SomosKreoLab from "@/components/SomosKreoLab";
import ProcesoTrabajo from "@/components/ProcesoTrabajo ";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>
        <Navbar />
        <Hero />
        <Nosotros />
        <SomosDiferentes />
        <Servicios />
        <TecnologADeVanguardia />
        <SomosKreoLab />
        <ProcesoTrabajo />
        <Footer />
    </div>
  );
}
