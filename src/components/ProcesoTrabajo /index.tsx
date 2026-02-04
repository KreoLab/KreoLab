import React from "react";

const steps = [
    {
        number: 1,
        title: "Descubrimiento",
        text: "Entendemos tu visión, objetivos y audiencia.",
    },
    {
        number: 2,
        title: "Diseño",
        text: "Creamos wireframes y diseños visuales impactantes.",
    },
    {
        number: 3,
        title: "Desarrollo",
        text: "Construcción robusta con tecnología moderna.",
    },
    {
        number: 4,
        title: "Lanzamiento",
        text: "Deploy, monitoreo y soporte continuo.",
    },
];

function ProcesoTrabajo() {
    return (
        <section className="bg-[#01040b] text-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* TÍTULO */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Proceso de Trabajo
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-slate-300">
                        Cómo convertimos tu idea en realidad
                    </p>
                </div>

                {/* CONTENEDOR DE PASOS */}
                <div className="relative">
                    {/* Línea horizontal (solo tablet/desktop) */}
                    <div className="hidden sm:block absolute inset-x-0 top-7 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 pointer-events-none" />

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div key={step.number} className="relative">
                                {/* CÍRCULO NÚMERO CENTRADO */}
                                <div
                                    className="
                    absolute
                    left-1/2 -translate-x-1/2
                    -top-5
                    z-10 flex h-10 w-10 items-center justify-center
                    rounded-full bg-gradient-to-b from-sky-400 to-blue-600
                    text-sm font-bold
                    shadow-lg shadow-sky-500/40
                  "
                                >
                                    {step.number}
                                </div>

                                {/* TARJETA */}
                                <div
                                    className="
                    h-full rounded-3xl border border-cyan-500/20
                    bg-gradient-to-br from-[#031623] via-[#020b16] to-[#020814]
                    px-6 pt-8 pb-7
                    shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                  "
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300 text-center">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcesoTrabajo;
