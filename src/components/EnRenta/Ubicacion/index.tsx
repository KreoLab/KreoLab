'use client';

import React, { useState } from 'react';

type Place = { label: string; mapUrl: string };

function Ubicacion() {
    // ✅ Aquí van los links que me compartiste
    const places: Place[] = [
        {
            label: 'Departamentos Miraflores',
            mapUrl: 'https://www.google.com/maps/embed?pb=!4v1725324600000!6m8!1m7!1sri9-COb7a2EiueG-NUBAqw!2m2!1d19.5582713!2d-99.4141553!3f317.21!4f-13.4!5f0.7820865974627469',
        },
        {
            label: 'Departamentos Revolución Zapata',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.582080853632!2d-99.4184283!3d19.5606883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d211aa0d5b0bfd%3A0xa71a57a5820e21c6!2sRevoluci%C3%B3n%20Zapata%2C%2054480%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1725324650000!5m2!1ses!2smx',
        },
        {
            label: 'Casa Isidro Fabela',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.599999999999!2d-99.4161692!3d19.5616676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d211aa0d5b0bfd%3A0x000000000000000!2s19%C2%B033\'42.0%22N%2099%C2%B024\'48.9%22W!5e0!3m2!1ses!2smx!4v1725324700000!5m2!1ses!2smx',
        },
    ];

    const [active, setActive] = useState(0);

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-10">
            <div className="mx-auto w-full max-w-6xl">
                {/* Título */}
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#e11d1d]">
                    Ubicación
                </h2>

                {/* Lista de ubicaciones */}
                <ol className="mt-4 grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {places.map((p, i) => (
                        <li key={p.label}>
                            <button
                                onClick={() => setActive(i)}
                                className={[
                                    'w-full text-left rounded-md border px-3 py-2 text-sm sm:text-base',
                                    'transition-colors',
                                    i === active
                                        ? 'border-[#0f172a]/20 bg-[#0f172a]/5 text-[#0f172a] font-semibold'
                                        : 'border-slate-200 hover:bg-slate-50 text-slate-700',
                                ].join(' ')}
                            >
                                <span className="mr-2 font-semibold">{i + 1}.</span>
                                {p.label}
                            </button>
                        </li>
                    ))}
                </ol>

                {/* Contenedor del mapa */}
                <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-slate-200">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]">
                        <iframe
                            title={`Mapa: ${places[active].label}`}
                            src={places[active].mapUrl}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 h-full w-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ubicacion;
