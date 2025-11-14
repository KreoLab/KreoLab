'use client';
import React from 'react';
import Image from 'next/image';

import Habitaciones from '@/assets/Habitaciones.png';
import Banos from '@/assets/Baños.png';
import Cocina from '@/assets/Cocina.png';
import Sala from '@/assets/Sala.png';
import Lofts1 from '@/assets/Lofts1.png';
import Lofts2 from '@/assets/Lofts2.png';
import Lofts3 from '@/assets/Lofts3.png';
import Lofts4 from '@/assets/Lofts4.png';

function LoftsUno() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
            <div className="mx-auto w-full max-w-6xl">
                {/* Principal: imagen + ficha */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 items-start">
                    {/* Imagen grande */}
                    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
                            <Image
                                src={Lofts1}
                                alt="Cabañas en construcción"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 720px"
                                priority
                            />
                        </div>
                    </div>

                    {/* Ficha / Detalle */}
                    <aside className="x ring-slate-200 p-5 sm:p-6">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e11d1d]">
                            7 LOFTS en renta
                        </h2>
                        <p className="mt-2 text-[#e11d1d] font-semibold">
                            ISIDRO FABELA, REVOLUCIÓN ZAPATA, Estado de México, México
                        </p>

                        <div className="mt-2">
                            <p className="text-black font-extrabold uppercase text-sm sm:text-base">
                                Renta POR NOCHE: $2,500 MXN
                            </p>
                        </div>

                        {/* Detalles */}
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 sm:gap-6">
                            <p className="text-base sm:text-lg font-extrabold text-[#0b1e2d]">Detalles:</p>
                            <p className="text-sm sm:text-base text-[#0f172a]">
                                Wi fi, pantallas, area de asador, cocina, comedor y fogata.
                            </p>
                        </div>

                        {/* Separador */}
                        <hr className="my-5 border-slate-200" />

                        {/* Amenidades */}
                        <div className="grid grid-cols-4 gap-4 sm:gap-6 text-center">
                            <div className="flex flex-col items-center">
                                <Image src={Habitaciones} alt="Habitaciones" width={64} height={64} className="h-12 w-auto sm:h-14" />
                                <p className="mt-1 text-xs sm:text-sm text-slate-600">Habitaciones</p>
                                <p className="text-lg sm:text-xl font-semibold text-slate-900">2</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image src={Banos} alt="Baños" width={64} height={64} className="h-12 w-auto sm:h-14" />
                                <p className="mt-1 text-xs sm:text-sm text-slate-600">Baños</p>
                                <p className="text-lg sm:text-xl font-semibold text-slate-900">1</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image src={Cocina} alt="Cocina" width={64} height={64} className="h-12 w-auto sm:h-14" />
                                <p className="mt-1 text-xs sm:text-sm text-slate-600">Cocina</p>
                                <p className="text-lg sm:text-xl font-semibold text-slate-900">1</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image src={Sala} alt="Sala" width={64} height={64} className="h-12 w-auto sm:h-14" />
                                <p className="mt-1 text-xs sm:text-sm text-slate-600">Sala</p>
                                <p className="text-lg sm:text-xl font-semibold text-slate-900">1</p>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Galería de 3 miniaturas */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[Lofts2, Lofts3, Lofts4].map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden ring-1 ring-slate-200">
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={img}
                                    alt={`Avance de cabañas ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LoftsUno;
