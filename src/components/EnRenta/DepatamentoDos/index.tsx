'use client';
import React from 'react';
import Image from 'next/image';
import Habitaciones from '@/assets/Habitaciones.png';
import Banos from '@/assets/Baños.png';
import Cocina from '@/assets/Cocina.png';
import Sala from '@/assets/Sala.png';

function DepartamentoDos() {
    return (
        <section className="bg-[#F5F7FA] px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
            <div className="mx-auto w-full max-w-4xl">
                {/* Título */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#e11d1d]">
                    4 Departamento en renta
                </h1>

                {/* Ubicación */}
                <p className="mt-1 text-[11px] sm:text-xs md:text-sm uppercase tracking-wide font-semibold text-[#e11d1d]">
                    ISIDRO FABELA, MIRAFLORES, Estado de México, México
                </p>

                {/* Renta mensual */}
                <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0b1e2d]">
                    Renta mensual: <span className="text-[#0b1e2d]">$2,500 MXN</span>
                </p>

                {/* Separador */}
                <hr className="mt-4 border-slate-300/70" />

                {/* Amenidades */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                    {/* Hab */}
                    <div className="flex flex-col items-center text-center">
                        <Image src={Habitaciones} alt="Habitaciones" className="w-16 sm:w-20 lg:w-24 h-auto" priority />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Habitaciones</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
                    </div>

                    {/* Baños */}
                    <div className="flex flex-col items-center text-center">
                        <Image src={Banos} alt="Baños" className="w-16 sm:w-20 lg:w-24 h-auto" priority />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Baños</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
                    </div>

                    {/* Cocina */}
                    <div className="flex flex-col items-center text-center">
                        <Image src={Cocina} alt="Cocina" className="w-16 sm:w-20 lg:w-24 h-auto" priority />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Cocina</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
                    </div>

                    {/* Sala */}
                    <div className="flex flex-col items-center text-center">
                        <Image src={Sala} alt="Sala" className="w-16 sm:w-20 lg:w-24 h-auto" priority />
                        <p className="mt-2 text-slate-700 text-sm sm:text-base">Sala</p>
                        <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">1</p>
                    </div>
                </div>

                {/* Separador */}
                <hr className="mt-6 border-slate-300/70" />

                {/* Detalles */}
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

export default DepartamentoDos;
