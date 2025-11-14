import React from "react";
import Image from "next/image";
import Link from 'next/link';
import HeroImage from "@/assets/Inicio-Hero.png"

function Hero() {
    return (
        <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
            {/* Imagen de fondo */}
            <Image
                src={HeroImage}
                alt="Nuevos predios en renta - Luna Arana"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Overlay gris oscuro como en la referencia */}
            <div className="absolute inset-0 bg-[#0B1F33]/60" />

            {/* Contenido centrado */}
            <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                    <h1 className="text-white font-extrabold tracking-wide uppercase
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Nuevos precios en renta
                    </h1>
                    <p className="mt-4 text-white/90 tracking-[0.2em] uppercase
                        text-xs sm:text-sm md:text-base">
                        Exclusivos de Luna Arana
                    </p>

                    <div className="mt-6">
                        <Link href="/propiedades-en-renta">
                            <button className="inline-flex items-center justify-center
                            px-6 sm:px-8 py-2 sm:py-3
                            rounded-[4px] bg-[#E4312B] text-white
                            text-xs sm:text-sm font-semibold uppercase
                            hover:bg-[#c52a25] transition"
                                    aria-label="Explorar predios en renta">
                                Explorar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Borde superior/inf. sutil como en la imagen (opcional) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-white/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white/10" />
        </section>
    );
}

export default Hero;
