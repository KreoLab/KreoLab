import React from "react";
import { FaMedal, FaUsers, FaCheckCircle, FaMagic } from "react-icons/fa";

type DiferenciaItem = {
    title: string;
    description: string;
    Icon: React.ReactNode;
};

const diferencias: DiferenciaItem[] = [
    {
        title: "Experiencia",
        description: "+10 años en desarrollo digital y diseño web.",
        Icon: <FaMedal size={24} />,
    },
    {
        title: "Equipo",
        description: "Profesionales especializados en cada área.",
        Icon: <FaUsers size={24} />,
    },
    {
        title: "Calidad",
        description: "Estándares internacionales en cada proyecto.",
        Icon: <FaCheckCircle size={24} />,
    },
    {
        title: "Innovación",
        description: "Siempre a la vanguardia de la tecnología.",
        Icon: <FaMagic size={24} />,
    },
];

const SomosDiferentes: React.FC = () => {
    return (
        <section className="relative bg-[#01040b] text-white py-16 sm:py-20 lg:py-24 overflow-x-hidden">
            {/* Glow suave de fondo */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-6rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* TÍTULOS */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Por qué somos diferentes
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-slate-300">
                        Lo que nos destaca en la industria
                    </p>
                </div>

                {/* GRID DE DIFERENCIAS */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {diferencias.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center rounded-3xl border border-cyan-500/10 bg-[#020b16]/70 backdrop-blur-xl px-6 py-8
                        shadow-[0_18px_45px_rgba(0,0,0,0.55)] transition hover:border-cyan-400/60 hover:-translate-y-1">
                            {/* ICONO */}
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                {item.Icon}
                            </div>

                            {/* TEXTO */}
                            <h3 className="text-base sm:text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SomosDiferentes;
