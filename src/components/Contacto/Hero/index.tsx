'use client';
import React from 'react';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaPhoneVolume } from "react-icons/fa6";
import Hero from '@/assets/Hero-Contacto.png';

function HeroContacto() {
    return (
        <section className="relative isolate text-white">
            {/* Fondo */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={Hero}
                    alt="Sección de contacto Luna Arana"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Izquierda: Título + formulario */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ff6a00]">
                            Contáctanos
                        </h2>
                        <p className="mt-3 text-base sm:text-lg lg:text-xl text-white/90">
                            Agenda tu visita o pide más información
                        </p>

                        {/* Formulario */}
                        <form
                            action="https://formsubmit.co/lunaaranamexico@gmail.com"
                            method="POST"
                            className="mt-8 space-y-8"
                        >
                            {/* Configuración FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="Contacto web - Luna Arana" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="text" name="_honey" className="hidden" />

                            {/* Nombre / Correo */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nombre" className="block text-base sm:text-lg mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        id="nombre"
                                        name="Nombre"
                                        required
                                        className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2 text-sm sm:text-base lg:text-lg"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="correo" className="block text-base sm:text-lg mb-2">
                                        Correo electrónico
                                    </label>
                                    <input
                                        id="correo"
                                        name="Correo electrónico"
                                        type="email"
                                        required
                                        className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2 text-sm sm:text-base lg:text-lg"
                                    />
                                </div>
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label htmlFor="mensaje" className="block text-base sm:text-lg mb-2">
                                    Ingrese su mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="Mensaje"
                                    rows={4}
                                    className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2 resize-none text-sm sm:text-base lg:text-lg"
                                />
                            </div>

                            {/* Botón */}
                            <div className="flex items-center">
                                <button type="submit" className="px-6 py-3 rounded bg-[#ff2d2d] text-white text-base sm:text-lg font-semibold hover:opacity-90">
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Derecha: Contacto rápido */}
                    <div className="lg:pl-10">
                        <h3 className="text-2xl sm:text-3xl text-[#ff6a00]">
                            Contacto rápido
                        </h3>

                        <ul className="mt-8 space-y-6 text-white/90 text-base sm:text-lg lg:text-xl">
                            <li className="flex items-center gap-3">
                                <FaPhoneVolume className="text-white" size={40} />
                                <span>55 56 09 66 37</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-white" size={40} />
                                <span>56 15 64 47 50</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="text-white" size={40} />
                                <span>lunaaranamexico@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroContacto;
