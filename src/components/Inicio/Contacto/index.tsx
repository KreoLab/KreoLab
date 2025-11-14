'use client';

import React from 'react';

function Contacto() {
    return (
        <section className="bg-[#082338] text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Izquierda: texto */}
                    <div>
                        <h3 className="text-[12px] tracking-widest font-semibold uppercase">Encuentra</h3>
                        <h3 className="text-[12px] tracking-widest font-semibold uppercase">Tu departamento</h3>

                        <div className="mt-8">
                            <p className="text-[12px] font-semibold">Mensaje</p>
                            <p className="mt-2 text-sm text-white/80 max-w-xs">
                                Ofrecemos diversas opciones de hospedaje para todos los gustos.
                            </p>
                        </div>
                    </div>

                    {/* Derecha: formulario */}
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold tracking-wider uppercase">
                            Contáctanos
                        </h2>

                        <form
                            action="https://formsubmit.co/lunaaranamexico@gmail.com"
                            method="POST"
                            className="mt-6 space-y-6"
                        >
                            {/* Configuración FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="Contacto web - Luna Arana" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="text" name="_honey" className="hidden" />

                            {/* Nombre / Apellido */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm mb-2">Nombre</label>
                                    <input
                                        id="nombre"
                                        name="Nombre"
                                        required
                                        className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="apellido" className="block text-sm mb-2">Apellido</label>
                                    <input
                                        id="apellido"
                                        name="Apellido"
                                        required
                                        className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="Email"
                                    required
                                    className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2"
                                />
                            </div>

                            {/* Interés */}
                            <div>
                                <span className="block text-sm mb-3">Me interesa:</span>
                                <div className="flex items-center gap-6 text-sm">
                                    <label className="inline-flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="Interes" value="Rentar" required className="accent-white" />
                                        Rentar
                                    </label>
                                    <label className="inline-flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="Interes" value="Servicio Extra" className="accent-white" />
                                        Servicio Extra
                                    </label>
                                </div>
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label htmlFor="mensaje" className="block text-sm mb-2">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    name="Mensaje"
                                    rows={3}
                                    className="w-full bg-transparent outline-none border-b border-white/70 focus:border-white py-2 resize-none"
                                />
                            </div>

                            {/* Botón */}
                            <div className="flex items-center">
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded bg-[#ff2d2d] text-white text-sm font-semibold hover:opacity-90"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;
