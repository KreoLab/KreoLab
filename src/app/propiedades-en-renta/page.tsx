import React from "react";
import Navbar from "@/components/Navbar";
import DepartamentoUno from "@/components/EnRenta/DepartamentoUno";
import DepartamentoDos from "@/components/EnRenta/DepatamentoDos";
import DepartamentoTres from "@/components/EnRenta/DepartamentoTres";
import DepartamentoCuarto from "@/components/EnRenta/DepartamentoCuarto/inde";
import DepartamentoCinco from "@/components/EnRenta/DepartamentoCinco";
import Ubicacion from "@/components/EnRenta/Ubicacion";
import Footer from "@/components/Footer";


export default function Home() {
    return (

        <div>
            <Navbar />
                <DepartamentoUno />
                <DepartamentoDos />
                <DepartamentoTres />
                <DepartamentoCuarto />
                <DepartamentoCinco />
                <Ubicacion />
            <Footer />
        </div>
    );
}
