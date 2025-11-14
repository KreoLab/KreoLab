'use client';
import React from 'react';
import Image from 'next/image';
import Habitaciones from '@/assets/Habitaciones.png';
import Banos from '@/assets/Baños.png';
import Cocina from '@/assets/Cocina.png';
import Sala from '@/assets/Sala.png';

// Fotos

import Despartamento4 from '@/assets/Departamento1.png';
import Despartamento2 from '@/assets/Departamento2.png';
import Despartamento3 from '@/assets/Departamento3.png';
import Despartamento1 from '@/assets/Departamento4.png';

function DepartamentoUno() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="mx-auto w-full max-w-5xl">
                {/* Encabezado */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#e11d1d] tracking-tight">
                    10 Departamento en renta
                </h1>
                <p className="mt-2 text-sm sm:text-base lg:text-lg uppercase tracking-wide text-[#e11d1d]">
                    <span className="font-bold">ISIDRO FABELA, MIRAFLORES, Estado de México, México</span>
                </p>
                <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold text-[#0f172a]">
                    Renta mensual: <span className="font-extrabold">$4,000 MXN</span>
                </p>

                {/* Imagen principal */}
                <div className="mt-6 rounded-md overflow-hidden bg-gray-100">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                        <Image
                            src={Despartamento1}
                            alt="Departamento Miraflores - Imagen principal"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Miniaturas fijas */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                    {[Despartamento4, Despartamento2, Despartamento3].map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/3] rounded-md overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={`Miniatura ${idx + 2}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Amenidades */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                    <div className="flex flex-col items-center">
                        <Image src={Habitaciones} alt="Habitaciones" width={70} height={70} className="h-14 sm:h-16 lg:h-20 w-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base lg:text-lg">Habitaciones</p>
                        <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">2</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={Banos} alt="Baños" width={70} height={70} className="h-14 sm:h-16 lg:h-20 w-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base lg:text-lg">Baños</p>
                        <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">1</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={Cocina} alt="Cocina" width={70} height={70} className="h-14 sm:h-16 lg:h-20 w-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base lg:text-lg">Cocina</p>
                        <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">1</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={Sala} alt="Sala" width={70} height={70} className="h-14 sm:h-16 lg:h-20 w-auto" />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base lg:text-lg">Sala</p>
                        <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">1</p>
                    </div>
                </div>

                {/* Detalles */}
                <div className="mt-8 border-t border-slate-200 pt-5">
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                        <span className="font-semibold">Detalles: </span>
                        Amplio espacio para cocina, comedor y sala.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DepartamentoUno;
