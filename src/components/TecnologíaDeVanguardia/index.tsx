import React from "react";

function TecnologADeVanguardia() {
    return (
        <section className="relative bg-[#01040b] text-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
                {/* COLUMNA IZQUIERDA – TEXTO */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-extrabold leading-tight tracking-tight">
                        Tecnología de vanguardia
                        <br />
                        para resultados
                        <br />
                        excepcionales
                    </h2>

                    <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-xl">
                        Utilizamos las últimas tecnologías y mejores prácticas de la
                        industria para crear soluciones digitales que no solo se ven
                        increíbles, sino que funcionan perfectamente.
                    </p>

                    {/* LISTA DE BENEFICIOS */}
                    <div className="mt-8 space-y-5">
                        {/* Item 1 */}
                        <div className="flex items-start gap-3">
                            <span className="mt-[6px] inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                            <div>
                                <p className="text-sm sm:text-base font-semibold">
                                    Diseño Responsivo
                                </p>
                                <p className="text-xs sm:text-sm text-slate-400">
                                    Perfecto en todos los dispositivos.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-3">
                            <span className="mt-[6px] inline-flex h-3 w-3 rounded-full bg-cyan-400/90 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                            <div>
                                <p className="text-sm sm:text-base font-semibold">
                                    Optimización SEO
                                </p>
                                <p className="text-xs sm:text-sm text-slate-400">
                                    Mayor visibilidad en buscadores.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-3">
                            <span className="mt-[6px] inline-flex h-3 w-3 rounded-full bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                            <div>
                                <p className="text-sm sm:text-base font-semibold">
                                    Velocidad Optimizada
                                </p>
                                <p className="text-xs sm:text-sm text-slate-400">
                                    Carga rápida para una mejor experiencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA – TARJETA ILUSTRATIVA */}
                <div className="w-full lg:w-1/2">
                    <div className="mx-auto w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#021b2b] via-[#020b16] to-[#020617] p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
                        {/* Barra superior tipo navegador */}
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-sky-500/60" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-500/60" />
                        </div>

                        {/* Línea principal */}
                        <div className="mb-3 h-2.5 w-11/12 rounded-full bg-gradient-to-r from-cyan-400/70 to-sky-500/60" />
                        <div className="mb-6 h-2 w-8/12 rounded-full bg-sky-900/70" />

                        {/* Bloque 1 */}
                        <div className="mb-4 rounded-2xl bg-[#02101e] px-4 py-3">
                            <div className="mb-2 h-2 w-10/12 rounded-full bg-sky-700/70" />
                            <div className="h-2 w-7/12 rounded-full bg-sky-900/70" />
                        </div>

                        {/* Bloque 2 */}
                        <div className="mb-4 rounded-2xl bg-[#020f1b] px-4 py-3">
                            <div className="mb-2 h-2 w-9/12 rounded-full bg-sky-600/70" />
                            <div className="h-2 w-5/12 rounded-full bg-sky-900/70" />
                        </div>

                        {/* Bloque 3 */}
                        <div className="rounded-2xl bg-[#020f1b] px-4 py-3">
                            <div className="mb-2 h-2 w-11/12 rounded-full bg-cyan-500/70" />
                            <div className="h-2 w-6/12 rounded-full bg-sky-800/70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TecnologADeVanguardia;
