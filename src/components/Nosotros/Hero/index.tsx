'use client';
import React from 'react';
import Image from 'next/image';
import Hero from '@/assets/Hero-Nosotros.png';
import Logo from '@/assets/logo-grande.png';

function HeroNosotros() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Fondo */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={Hero}
                    alt="Fachada de una propiedad de Luna Arana"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Desvanecido blanco a la izquierda */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-24">
                <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-2">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src={Logo}
                            alt="Luna Arana"
                            priority
                            width={800}
                            height={360}
                            className="h-auto w-[260px] sm:w-[360px] md:w-[460px] lg:w-[620px] xl:w-[720px]"
                        />
                    </div>

                    {/* Texto */}
                    <div className="text-[#0e1b28] md:pl-4">
                        <p className="text-[13px] text-center sm:text-base md:text-xl lg:text-xl font-bold tracking-widest text-red-600 uppercase">
                            Acerca de nosotros
                        </p>

                        <p className="mt-3 text-[15px] sm:text-base md:text-[18px] lg:text-[20px] leading-relaxed text-slate-700 max-w-2xl">
                            En LUNA ARANA te ofrecemos diversas opciones de hospedaje y vivienda para distintos gustos y necesidades:
                            tenemos departamentos cómodos para estancias largas, lofts acogedores y una hermosa casa de descanso en el
                            rancho “EL ENCANTO” en donde podrás realizar home office, terminar esos proyectos pendientes o simplemente
                            desconectarte y descansar, además de contar con experiencias únicas, como interactuar con nuestros hermosos
                            caballos haciendo diversas actividades con ellos o bien dar un paseo en cuatrimoto disfrutando siempre de
                            un entorno lleno de tranquilidad y  hermosa naturaleza. Descubre todo lo que tenemos para ti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroNosotros;
