'use client';

import React from 'react';
import Image from 'next/image';

import correo from '@/assets/correo.png';
import WhatsApp from '@/assets/whatsaap.png';
import Telefono from '@/assets/telefono.png';

function DepartamentoSueños() {
    return (
        <section className="bg-[#e6eff5] px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
            <div className="mx-auto w-full max-w-7xl">
                {/* Encabezado pequeño */}
                <p className="text-center text-[11px] sm:text-xs tracking-[0.25em] text-[#0b2239]/80 uppercase">
                    ¡El departamento de tus sueños para vivir!
                </p>

                {/* Grid de 3 columnas */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
                    {/* Teléfono */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <Image src={Telefono} alt="Llámanos" fill className="object-contain" priority />
                        </div>
                        <h3 className="mt-3 text-[#0b2239] font-extrabold text-lg sm:text-xl">Llámanos</h3>
                        <p className="mt-1 text-[13px] text-[#0b2239]/80">Comunícate con nosotros</p>
                        <a
                            href="tel:5556096637"
                            className="mt-1 inline-block text-[13px] font-semibold tracking-wide text-[#0b2239]"
                        >
                            55 56 09 66 37
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <Image src={WhatsApp} alt="Envíanos un WhatsApp" fill className="object-contain" />
                        </div>
                        <h3 className="mt-3 text-[#0b2239] font-extrabold text-lg sm:text-xl">
                            Envíanos un Whatsapp
                        </h3>
                        <p className="mt-1 text-[13px] text-[#0b2239]/80">Comunícate con nosotros</p>
                        <a
                            href="https://wa.me/52561644750"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block text-[13px] font-semibold tracking-wide text-[#0b2239]"
                        >
                            56 15 64 47 50
                        </a>
                    </div>

                    {/* Correo */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <Image src={correo} alt="Envia un email" fill className="object-contain" />
                        </div>
                        <h3 className="mt-3 text-[#0b2239] font-extrabold text-lg sm:text-xl">Envía un email</h3>
                        <p className="mt-1 text-[13px] text-[#0b2239]/80">Correo directo</p>
                        <a
                            href="mailto:lunaaranamexico@gmail.com"
                            className="mt-1 inline-block text-[13px] font-semibold tracking-wide text-[#0b2239]"
                        >
                            lunaaranamexico@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DepartamentoSueños;
