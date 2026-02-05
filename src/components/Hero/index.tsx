import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative overflow-hidden bg-[#020817] text-white">
            {/* FONDO */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#0ea5e9]/20 blur-[120px]" />
                <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* CONTENIDO */}
            <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-24 sm:px-8">
                {/* PILL */}
                <div className="mb-8 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/40 px-5 py-2 backdrop-blur-md">
            <span className="flex h-8 w-8 items-center justify-center font-semibold rounded-full bg-cyan-500/30 text-[10px] text-cyan-100">
              <AiOutlinePoweroff size={17} />
            </span>
                <span className="text-[13px] font-medium text-cyan-200 sm:text-sm">
                  INNOVACION DIGITAL
                </span>
                </div>
            </div>

            {/* TÍTULO */}
            <h1 className="text-center font-extrabold leading-[1.15] text-4xl sm:text-5xl lg:text-[4.2rem] tracking-tight text-white">
                Creamos{" "}
                <span className="bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
            experiencias
          </span>{" "}
                <span className="block sm:inline bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
            digitales
          </span>{" "}
                que transforman negocios
            </h1>

            {/* SUBTÍTULO */}
            <p className="mt-6 max-w-2xl text-center text-slate-300 text-sm sm:text-base">
                Diseñamos y desarrollamos páginas web, landing pages y aplicaciones
                que impulsan tu presencia digital al siguiente nivel.
            </p>

            {/* BOTONES */}
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
                <a
                    href="https://wa.link/873jjh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto rounded-full px-10 py-3 text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 hover:from-sky-400 hover:to-blue-500 transition"
                >
                    Iniciar Proyecto
                </a>

                <a
                    href="https://ethancervera.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto rounded-full px-10 py-3 text-sm font-semibold border border-slate-600 bg-black/40 text-slate-100 hover:border-sky-500 hover:text-white transition text-center"
                >
                    Ver Portafolio
                </a>
            </div>
        </div>
</section>
);
};

export default Hero;
