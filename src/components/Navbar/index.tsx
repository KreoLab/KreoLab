'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    // Cerrar con ESC
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    // Bloquear scroll cuando esté abierto (móvil)
    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header className="w-full flex justify-center fixed top-3 left-0 right-0 z-50 pointer-events-none">
            <nav className="pointer-events-auto flex items-center justify-between w-[94%] max-w-4xl mx-auto
            rounded-full border border-white/15 bg-[#050814]/80 backdrop-blur-xl px-3 py-1.5 sm:px-4 sm:py-2
            md:px-6 md:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] text-white relative">
                {/* LOGO */}
                <Link href="/" className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16">
                    <Image
                        src={Logo}
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* LINKS – solo tablet/desktop */}
                <div className="hidden md:flex items-center gap-6 text-lg font-medium text-slate-200">
                    {navLinks.map((l) => (
                        <Link key={l.href} href={l.href} className="hover:text-white transition">
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Acciones derecha */}
                <div className="flex items-center gap-2">
                    {/* BOTÓN CONTACTO (se queda como está) */}
                    <Link href="https://wa.link/e7cq0m" className="hidden sm:inline-flex">
                        <button className="rounded-full bg-[#2563eb] px-3 py-1.5 text-[11px] sm:px-5 sm:py-2
                        sm:text-sm shadow-lg shadow-blue-500/20 hover:bg-[#1d4ed8] transition-colors">
                            Contacto
                        </button>
                    </Link>

                    {/* HAMBURGER SOLO MÓVIL */}
                    <button onClick={() => setOpen(true)} className="
                    inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-white/15
                    bg-black/30 backdrop-blur hover:bg-white/10 transition" aria-label="Abrir menú">
                        <AiOutlineMenu size={18} />
                    </button>
                </div>

                {/* ====== MENÚ MÓVIL (overlay + panel) ====== */}
                {/* Overlay */}
                <div
                    className={`md:hidden fixed inset-0 z-[60] transition ${
                        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    <button
                        className="absolute inset-0 bg-black/60"
                        aria-label="Cerrar menú"
                        onClick={() => setOpen(false)}
                    />

                    {/* Panel */}
                    <div className={`absolute left-1/2 top-4 w-[92%] max-w-sm -translate-x-1/2
                    rounded-2xl border border-white/10 bg-[#050814]/95 backdrop-blur-xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition ${open ? 'translate-y-0 opacity-100' 
                    : '-translate-y-3 opacity-0'}`}>
                        {/* Header panel */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="relative h-9 w-9">
                                    <Image src={Logo} alt="Logo" fill className="object-contain" />
                                </div>
                                <p className="text-sm font-semibold text-white">Menú</p>
                            </div>

                            <button onClick={() => setOpen(false)}
                                className="h-9 w-9 rounded-full grid place-items-center border border-white/10
                                bg-black/30 hover:bg-white/10 transition" aria-label="Cerrar menú">
                                <AiOutlineClose size={18} />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="px-3 py-3">
                            <div className="flex flex-col">
                                {navLinks.map((l) => (
                                    <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="
                                    rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10
                                    hover:text-white transition">
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
