'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Departamento1 from "@/assets/Departamento-1.png";
import Departamento2 from "@/assets/Departamento-2.png";
import Departamento3 from "@/assets/Departamento-3.png";
import Habitaciones from "@/assets/Habitaciones.png";
import Banos from "@/assets/Baños.png";
import Cocina from "@/assets/Cocina.png";
import Sala from "@/assets/Sala.png";

type PropCard = {
    img: StaticImageData;              // antes: any
    tipo: string;
    nombre: string;
    colonia: string;
    estado: string;
    rentaLabel: string;
    rentaMonto: string;
    stats: { habitaciones: number; banos: number; cocina: number; sala: number };
};

const DATA: PropCard[] = [
    {
        img: Departamento1,
        tipo: "Departamentos",
        nombre: "MIRAFLORES",
        colonia: "Estado de México, México",
        estado: "RENTA MENSUAL:",
        rentaLabel: "RENTA",
        rentaMonto: "$4,000 MXN",
        stats: { habitaciones: 2, banos: 1, cocina: 1, sala: 1 },
    },
    {
        img: Departamento2,
        tipo: "Departamentos",
        nombre: "REVOLUCIÓN ZAPATA",
        colonia: "Estado de México, México",
        estado: "RENTA MENSUAL:",
        rentaLabel: "RENTA",
        rentaMonto: "$4,000 MXN",
        stats: { habitaciones: 2, banos: 1, cocina: 1, sala: 1 },
    },
    {
        img: Departamento3,
        tipo: "Casa",
        nombre: "ISIDRO FABELA",
        colonia: "Estado de México, México",
        estado: "RENTA POR NOCHE:",
        rentaLabel: "RENTA",
        rentaMonto: "$2,000 MXN",
        stats: { habitaciones: 3, banos: 2, cocina: 1, sala: 1 },
    },
];

function CasaRenta() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
            <div className="mx-auto w-full max-w-7xl">
                {/* Encabezado */}
                <div className="text-center">
                    <p className="uppercase tracking-[0.2em] text-[12px] sm:text-xs text-[#001a33]/70">
                        NUEVOS DEPARTAMENTOS
                    </p>
                    <h2 className="mt-2 font-extrabold text-[#0c2440] text-3xl sm:text-[34px] md:text-[38px]">
                        En Renta
                    </h2>
                </div>

                {/* Grid de tarjetas */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {DATA.map((card, idx) => (
                        <article
                            key={idx}
                            className="rounded-md bg-white"
                        >
                            {/* Imagen */}
                            <div className="relative aspect-[16/10] sm:aspect-[5/3] overflow-hidden rounded-md">
                                <Image
                                    src={card.img}
                                    alt={`${card.tipo} ${card.nombre}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={idx === 0}
                                />
                                {/* Badge RENTA */}
                                <span className="absolute left-4 bottom-4 inline-block bg-[#ff2b2b] text-white text-xs font-semibold px-4 py-1 rounded">
                  {card.rentaLabel}
                </span>
                            </div>

                            {/* Texto */}
                            <div className="mt-4">
                                <h3 className="text-[#0c2440] font-extrabold text-lg sm:text-xl">
                                    {card.tipo}
                                </h3>
                                <p className="text-[12px] font-semibold tracking-wide text-[#0c2440]/70 uppercase">
                                    {card.nombre}
                                </p>

                                <p className="mt-3 text-[13px] text-[#0c2440]/80">
                                    {card.colonia}
                                </p>
                                <div className="mt-2 text-[13px]">
                                    <span className="block text-[#0c2440]/80">{card.estado}</span>
                                    <span className="block text-[#0c2440] font-semibold">
                    {card.rentaMonto}
                  </span>
                                </div>
                            </div>

                            {/* Stats / Iconos */}
                            <div className="mt-5 border-t border-black/10 pt-4 grid grid-cols-4 gap-3 text-center">
                                {/* Habitaciones */}
                                <div>
                                    <div className="flex justify-center">
                                        <Image src={Habitaciones} alt="Habitaciones" width={54} height={54} />
                                    </div>
                                    <p className="text-[12px] text-[#0c2440]/70 mt-1">Habitaciones</p>
                                    <p className="text-[#0c2440] font-extrabold mt-1">
                                        {card.stats.habitaciones}
                                    </p>
                                </div>
                                {/* Baños */}
                                <div>
                                    <div className="flex justify-center">
                                        <Image src={Banos} alt="Baños" width={54} height={54} />
                                    </div>
                                    <p className="text-[12px] text-[#0c2440]/70 mt-1">Baños</p>
                                    <p className="text-[#0c2440] font-extrabold mt-1">
                                        {card.stats.banos}
                                    </p>
                                </div>
                                {/* Cocina */}
                                <div>
                                    <div className="flex justify-center">
                                        <Image src={Cocina} alt="Cocina" width={54} height={54} />
                                    </div>
                                    <p className="text-[12px] text-[#0c2440]/70 mt-1">Cocina</p>
                                    <p className="text-[#0c2440] font-extrabold mt-1">
                                        {card.stats.cocina}
                                    </p>
                                </div>
                                {/* Sala */}
                                <div>
                                    <div className="flex justify-center">
                                        <Image src={Sala} alt="Sala" width={54} height={54} />
                                    </div>
                                    <p className="text-[12px] text-[#0c2440]/70 mt-1">Sala</p>
                                    <p className="text-[#0c2440] font-extrabold mt-1">
                                        {card.stats.sala}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA inferior */}
                <div className="mt-8 sm:mt-10 flex justify-center">
                    <Link href="/propiedades-en-renta">
                        <button className="inline-flex items-center justify-center rounded-md bg-[#e51212] text-white text-sm sm:text-[15px] font-semibold px-6 sm:px-8 py-2.5 hover:opacity-90 transition" aria-label="Ver más propiedades en renta">
                            Ver más
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CasaRenta;
