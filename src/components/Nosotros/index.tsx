import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

const Nosotros: React.FC = () => {
    return (
        <section id="nosotros" className="relative bg-[#01040b] text-white py-16 overflow-x-hidden">
            {/* Glow suave de fondo */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-6rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
            </div>

            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* GRID PRINCIPAL */}
                <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
                    {/* COLUMNA IZQUIERDA */}
                    <div>
                        {/* Pill */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/40 px-4 py-1.5 text-xs sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                <RiTeamLine size={14} />
              </span>
                            <span className="font-medium text-cyan-100">
                Quiénes Somos
              </span>
                        </div>

                        {/* TÍTULO */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            KreoLab: Tu Aliado en{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
                Transformación Digital
              </span>
                        </h2>

                        {/* PÁRRAFOS */}
                        <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                            <p>
                                Somos un equipo apasionado por crear soluciones digitales que
                                van más allá de lo ordinario. Cada línea de código y cada píxel
                                de diseño se crean con un propósito claro: impulsar el
                                crecimiento de tu negocio.
                            </p>
                            <p>
                                Desde startups innovadoras hasta empresas consolidadas, hemos
                                tenido el privilegio de trabajar con visionarios que comparten
                                nuestra pasión por la excelencia digital.
                            </p>
                        </div>

                        {/* MÉTRICAS */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-md">
                            <div className="flex items-start gap-3 rounded-2xl bg-[#020b16]/80 px-4 py-4 border border-cyan-500/15">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                                    <FaRegCheckCircle size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        +100 Proyectos
                                    </p>
                                    <p className="text-xs sm:text-[13px] text-slate-400">
                                        Completados exitosamente
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-2xl bg-[#020b16]/80 px-4 py-4 border border-cyan-500/15">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                                    <RiTeamLine size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        +50 Clientes
                                    </p>
                                    <p className="text-xs sm:text-[13px] text-slate-400">
                                        Satisfechos en el mundo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Misión / Visión / Valores */}
                    <div>
                        <div
                            className="
                rounded-3xl border border-cyan-500/20
                bg-gradient-to-b from-[#04101c] to-[#020814]
                px-4 py-5 sm:px-6 sm:py-6
                shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              "
                        >
                            <div className="space-y-4 sm:space-y-5">
                                {/* Misión */}
                                <div className="rounded-2xl bg-[#020b16]/90 border border-cyan-500/20 px-4 py-4 sm:px-5 sm:py-5">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-200">
                                        Misión
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                                        Transformar ideas en soluciones digitales que generan impacto
                                        real y resultados medibles para nuestros clientes.
                                    </p>
                                </div>

                                {/* Visión */}
                                <div className="rounded-2xl bg-[#020b16]/90 border border-cyan-500/20 px-4 py-4 sm:px-5 sm:py-5">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-200">
                                        Visión
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                                        Ser el socio tecnológico preferido para empresas que buscan
                                        crecer y diferenciarse en la era digital.
                                    </p>
                                </div>

                                {/* Valores */}
                                <div className="rounded-2xl bg-[#020b16]/90 border border-cyan-500/20 px-4 py-4 sm:px-5 sm:py-5">
                                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-200">
                                        Valores
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                                        Innovación, integridad, excelencia y compromiso con el éxito
                                        de cada cliente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;
