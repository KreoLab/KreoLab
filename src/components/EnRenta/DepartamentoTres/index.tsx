'use client';
import React from 'react';
import Image from 'next/image';

// Íconos
import Habitaciones from '@/assets/Habitaciones.png';
import Banos from '@/assets/Baños.png';
import Cocina from '@/assets/Cocina.png';
import Sala from '@/assets/Sala.png';

// Fotos
import Despartamento1 from '@/assets/Departamento1.1.png';
import Despartamento2 from '@/assets/Departamento2.2.png';
import Despartamento3 from '@/assets/Departamento3.3.png';
import Despartamento4 from '@/assets/Departamento4.4.png';

function DepartamentoTres() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
            <div className="mx-auto w-full max-w-5xl">
                {/* Encabezado */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#e11d1d]">
                    8 Departamento en renta
                </h1>
                <p className="mt-1 text-[11px] sm:text-xs md:text-sm uppercase tracking-wide font-semibold text-[#e11d1d]">
                    ISIDRO FABELA, REVOLUCIÓN ZAPATA, Estado de México, México
                </p>
                <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0b1e2d]">
                    Renta mensual: <span className="text-[#0b1e2d]">$4,000 MXN</span>
                </p>

                {/* Imagen principal */}
                <div className="mt-4 overflow-hidden rounded-md bg-gray-100">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                        <Image
                            src={Despartamento1}
                            alt="Departamento en renta - foto principal"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 900px"
                        />
                    </div>
                </div>

                {/* Miniaturas: fijas, solo visuales */}
                <div className="mt-3 grid grid-cols-3 gap-3">
                    {[Despartamento2, Despartamento3, Despartamento4].map((img, i) => (
                        <div
                            key={i}
                            className="relative aspect-[4/3] overflow-hidden rounded-md ring-1 ring-slate-200"
                        >
                            <Image
                                src={img}
                                alt={`Miniatura ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 33vw, 300px"
                            />
                        </div>
                    ))}
                </div>

                {/* Amenidades */}
                <hr className="mt-6 border-slate-200" />
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                    <div className="flex flex-col items-center text-center">
                        <Image src={Habitaciones} alt="Habitaciones" className="w-16 sm:w-20 lg:w-24 h-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Habitaciones</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">2</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Image src={Banos} alt="Baños" className="w-16 sm:w-20 lg:w-24 h-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Baños</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
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
                <hr className="mt-6 border-slate-200" />
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 sm:gap-6">
                    <p className="text-base sm:text-lg font-extrabold text-[#0b1e2d]">Detalles:</p>
                    <p className="text-sm sm:text-base text-[#0f172a]">
                        Amplio espacio para cocina, comedor y sala.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DepartamentoTres;
