import React from "react";
import { MdOutlineWeb, MdWebAsset, MdOutlineAppShortcut } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

type ServiceItem = {
    title: string;
    description: string;
    Icon: React.ReactNode;
    whatsUrl: string; // 👈 link de WhatsApp por servicio
};

const services: ServiceItem[] = [
    {
        title: "Páginas Web",
        description:
            "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
        Icon: <MdOutlineWeb size={28} />,
        whatsUrl: "https://wa.link/uqnud4",
    },
    {
        title: "Páginas Web Profesional",
        description:
            "Páginas web premium con rendimiento avanzado, SEO técnico y diseño de alto impacto.",
        Icon: <MdOutlineWeb size={28} />,
        whatsUrl: "https://wa.link/evcqdk",
    },
    {
        title: "Landing Pages",
        description:
            "Páginas de aterrizaje enfocadas exclusivamente en generar conversiones y leads.",
        Icon: <MdWebAsset size={28} />,
        whatsUrl: "https://wa.link/mhck5y",
    },
    {
        title: "Landing Pages Profesional",
        description:
            "Landing pages optimizadas, con copywriting estratégico y pruebas A/B para maximizar resultados.",
        Icon: <MdWebAsset size={28} />,
        whatsUrl: "https://wa.link/bvzfo8",
    },
    {
        title: "Aplicaciones Web",
        description:
            "Desarrollo de aplicaciones modernas, escalables y seguras con experiencias de usuario excepcionales.",
        Icon: <MdOutlineAppShortcut size={28} />,
        whatsUrl: "https://wa.link/9izm9l",
    },
    {
        title: "Tiendas Online",
        description:
            "E-commerce completos con pasarelas de pago, administración de productos y reportes de ventas.",
        Icon: <FaShoppingBag size={26} />,
        whatsUrl: "https://wa.link/5st4pe",
    },
];

const Servicios: React.FC = () => {
    return (
        <section className="relative text-white bg-[#01040b] -mt-6 pt-20 pb-20 sm:pt-24 sm:pb-24 overflow-x-hidden">
            {/* FONDO */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-[-8rem] left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-[#0ea5e9]/20 blur-[120px]" />
            </div>

            {/* CONTENIDO */}
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* TÍTULO */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Nuestros Servicios
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-slate-300">
                        Soluciones digitales a la medida para tu negocio
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <article
                            key={idx}
                            className="group flex h-full flex-col rounded-3xl border border-cyan-500/10 bg-[#020b16]/60 backdrop-blur-xl px-6 py-6 sm:px-7 sm:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.55)] transition hover:border-cyan-400/60 hover:bg-[#03101f]/80 hover:-translate-y-1"
                        >
                            {/* ICONO */}
                            <div className="mb-6 inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-cyan-500/10 text-cyan-300">
                                {service.Icon}
                            </div>

                            {/* TEXTO */}
                            <h3 className="text-lg sm:text-xl font-semibold mb-3">
                                {service.title}
                            </h3>
                            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300">
                                {service.description}
                            </p>

                            {/* BOTÓN WhatsApp */}
                            <div className="mt-6">
                                <a
                                    href={service.whatsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-lg shadow-sky-500/30 hover:from-sky-400 hover:to-blue-500 transition"
                                >
                                    Solicitar este servicio
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
