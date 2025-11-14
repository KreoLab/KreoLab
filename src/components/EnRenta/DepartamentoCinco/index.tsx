'use client';
import React from 'react';
import Image from 'next/image';

import Habitaciones from '@/assets/Habitaciones.png';
import Banos from '@/assets/Baños.png';
import Cocina from '@/assets/Cocina.png';
import Sala from '@/assets/Sala.png';

// Fotos
import Despartamento1 from '@/assets/Departamento1.1.1.png';
import Despartamento2 from '@/assets/Departamento2.2.2.png';
import Despartamento3 from '@/assets/Departamento3.3.3.png';
import Despartamento4 from '@/assets/Departamento4.4.4.png';
import Despartamento5 from '@/assets/Departamento5.5.5.png';
import Despartamento6 from '@/assets/Departamento6.6.6.png';
import Despartamento7 from '@/assets/Departamento7.7.7.png';

function DepartamentoCinco() {
    const thumbs = [
        Despartamento2,
        Despartamento3,
        Despartamento4,
        Despartamento5,
        Despartamento6,
        Despartamento7,
    ];

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
            <div className="mx-auto w-full max-w-5xl">
                {/* Encabezado */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#e11d1d]">
                    Casa de fin de semana en
                    EL RANCHO “EL ENCANTO”
                </h1>
                <p className="mt-1 text-[11px] sm:text-xs md:text-sm uppercase tracking-wide">
                    <span className="font-semibold text-[#e11d1d]">ISIDRO FABELA, MIRAFLORES, Estado de México, México</span>
                </p>
                <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0b1e2d]">
                    Renta por noche: <span className="text-[#0b1e2d]">$2,000 MXN</span>
                </p>

                {/* Imagen principal */}
                <div className="mt-4 rounded-md overflow-hidden bg-gray-100">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                        <Image
                            src={Despartamento1}
                            alt="Casa en el rancho - fachada principal"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 900px"
                        />
                    </div>
                </div>

                {/* Mini–galería (sin interacción) */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {thumbs.map((img, i) => (
                        <div
                            key={i}
                            className="relative aspect-[4/3] overflow-hidden rounded-md bg-gray-100"
                        >
                            <Image
                                src={img}
                                alt={`Vista interior ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                            />
                        </div>
                    ))}
                </div>

                {/* Amenidades */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={Habitaciones}
                            alt="Habitaciones"
                            className="w-16 sm:w-20 lg:w-24 h-auto"
                        />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Habitaciones</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">3</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Image src={Banos} alt="Baños" className="w-16 sm:w-20 lg:w-24 h-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Baños</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">2</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Image src={Cocina} alt="Cocina" className="w-16 sm:w-20 lg:w-24 h-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Cocina</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Image src={Sala} alt="Sala" className="w-16 sm:w-20 lg:w-24 h-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Sala</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
                    </div>
                </div>

                {/* Detalles */}
                <div className="mt-6 border-t border-slate-200 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 sm:gap-6">
                        <p className="text-base sm:text-lg font-extrabold text-[#0b1e2d]">
                            Detalles
                        </p>
                        <p className="text-sm sm:text-base text-[#0f172a]">
                            Cuenta 3 recamaras, cocina equipada, sala cómoda, 2 baños completos,
                            Pantalla, Ambiente privado y natural.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DepartamentoCinco;
