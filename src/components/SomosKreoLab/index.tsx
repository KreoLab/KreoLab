import React from "react";
import { FiCode, FiGlobe, FiZap } from "react-icons/fi";

function SomosKreoLab() {
    return (
        <section className="bg-[#01040b] text-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
                {/* CARD IZQUIERDA */}
                <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#032534] via-[#021826] to-[#020814] p-6 sm:p-8 shadow-[0_22px_60px_rgba(0,0,0,0.7)]">
                        {/* ITEM 1 */}
                        <div className="flex items-center gap-4 pb-6 border-b border-cyan-500/10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                                <FiCode size={24} />
                            </div>
                            <div>
                                <p className="text-base sm:text-lg font-semibold">
                                    Desarrollo Moderno
                                </p>
                                <p className="text-xs sm:text-sm text-slate-300">
                                    React, TypeScript, JavaScript, Tailwind CSS, HTML, CSS, Next.Js, etc.
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="flex items-center gap-4 py-6 border-b border-cyan-500/10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                                <FiGlobe size={24} />
                            </div>
                            <div>
                                <p className="text-base sm:text-lg font-semibold">
                                    Escalabilidad
                                </p>
                                <p className="text-xs sm:text-sm text-slate-300">
                                    Arquitecturas preparadas para crecer
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="flex items-center gap-4 pt-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                                <FiZap size={24} />
                            </div>
                            <div>
                                <p className="text-base sm:text-lg font-semibold">
                                    Performance
                                </p>
                                <p className="text-xs sm:text-sm text-slate-300">
                                    Optimización para máxima velocidad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEXTO DERECHA */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold leading-tight tracking-tight">
                        Somos KreoLab, tu socio
                        <br />
                        digital
                    </h2>

                    <p className="mt-6 text-sm sm:text-base text-slate-300">
                        Creemos que cada negocio merece una presencia digital excepcional.
                        Durante los últimos años, hemos ayudado a empresas de distintos
                        sectores a transformar sus ideas en soluciones digitales de impacto.
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-slate-300">
                        Nuestro enfoque es simple: entender tu negocio, diseñar soluciones
                        inteligentes y ejecutarlas con excelencia. Cada proyecto es una
                        oportunidad para demostrar nuestro compromiso con la calidad.
                    </p>

                    <div className="mt-8">
                        <a
                            href="https://wa.link/velvqn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm sm:text-base font-semibold bg-gradient-to-r
                            from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 hover:from-sky-400 hover:to-blue-500 transition ">
                            Conoce nuestras promociones
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SomosKreoLab;
