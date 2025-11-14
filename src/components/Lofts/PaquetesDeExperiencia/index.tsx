'use client';
import React from 'react';
import Image from 'next/image';
import Caballo from '@/assets/Caballo.png';

function PaquetesDeExperiencia() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="mx-auto w-full max-w-4xl">
                {/* Título */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#e11d1d]">
                    Paquetes de Experiencia
                </h2>

                {/* Descripción */}
                <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-[#0f172a]">
                    Disfruta actividades únicas con caballos, pensadas para todos los gustos
                    y edades.
                </p>
                <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed font-bold text-[#0f172a]">
                    (precio no incluido en la renta de los lofts o la casa del rancho).
                </p>

                {/* Imagen */}
                <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9]">
                        <Image
                            src={Caballo}
                            alt="Caballo corriendo en el rancho"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                        />
                    </div>
                </div>

                {/* Lista de actividades */}
                <ol className="mt-6 list-decimal pl-6 space-y-2 text-[#0f172a] text-base sm:text-lg lg:text-xl">
                    <li>Cabalgata guiada</li>
                    <li>
                        Día con los caballos, aprende a cepillarlos, alimentarlos y convivir con ellos.
                    </li>
                    <li>
                        Tour en cuatrimotos, aventura y diversión en los alrededores del rancho.
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default PaquetesDeExperiencia;
