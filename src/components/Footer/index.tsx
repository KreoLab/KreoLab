'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { SiAirbnb } from 'react-icons/si';
import Logo from '@/assets/logo.png';

function Footer() {
    return (
        <footer className="bg-[#031a2e] text-white">
            <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10 py-10">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
                    {/* Izquierda: logo + descripción */}
                    <div className="md:col-span-2 flex items-center md:items-start gap-6">
                        <Image
                            src={Logo}
                            alt="Luna Arana"
                            width={140}
                            height={40}
                            className="h-auto w-auto shrink-0"
                            priority
                        />
                        <p className="text-[12px] sm:text-[13px] text-white/85 max-w-xs leading-relaxed">
                            Ofrecemos a nuestros clientes y amigos un servicio de calidad
                            garantizándote la mejor experiencia.
                        </p>
                    </div>

                    {/* Derecha: navegación + redes */}
                    <div className="md:col-span-1 md:justify-self-end">
                        <nav className="grid gap-2 text-[12px] sm:text-[13px]">
                            <Link href="/" className="hover:text-white/80 transition">Inicio</Link>
                            <Link href="/nosotros" className="hover:text-white/80 transition">Acerca de Nosotros</Link>
                            <Link href="/propiedades-en-renta" className="hover:text-white/80 transition">Departamentos</Link>
                            <Link href="/lofts" className="hover:text-white/80 transition">Lofts</Link>
                            <Link href="/contacto" className="hover:text-white/80 transition">Contacto</Link>
                        </nav>

                        {/* Redes */}
                        <div className="mt-4 flex items-center gap-4">
                            <Link
                                href="https://www.facebook.com/people/LOFTS-LUNA-ARANA/61579377940271/?rdid=NrbQDnGtySwkAhsz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CfeRiqr4g%2F"
                                target="_blank"
                                aria-label="Facebook"
                                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                                <FaFacebookF size={14} />
                            </Link>
                            <Link
                                href="https://www.airbnb.mx/rooms/1477664331676302619?guests=1&adults=1&s=13&unique_share_id=6fec1056-513a-41bc-95df-3b7b3415a856&source_impression_id=p3_1755667130_P3LKmvVrgaoujtHk"
                                target="_blank"
                                aria-label="Airbnb"
                                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                            >
                                <SiAirbnb size={14} />
                            </Link>
                            <Link
                                href="https://www.facebook.com/people/Rancho-El-Encanto/61576780074284/?rdid=ACOxGcWy1INWPMkQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19Mqv375KG%2F"
                                target="_blank"
                                aria-label="Facebook"
                                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                                <FaFacebookF size={14} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider opcional */}
                <div className="mt-8 border-t border-white/10 pt-4">
                    <p className="text-[11px] text-white/60 text-center md:text-left">
                        © {new Date().getFullYear()} Luna Arana. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
