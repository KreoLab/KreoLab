'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Logo from '@/assets/logo.png';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'INICIO' },
        { href: '/nosotros', label: 'ACERCA DE NOSOTROS' },
        { href: '/propiedades-en-renta', label: 'PROPIEDADES EN RENTA' },
        { href: '/lofts', label: 'LOFTS' },
        { href: '/contacto', label: 'CONTACTO' },
    ];

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname?.startsWith(href);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#031a2e]/95 shadow-lg h-16 sm:h-20'
                    : 'bg-[#031a2e] h-24 sm:h-28'
            }`}
        >
            <nav className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={Logo}
                        alt="Luna Arana"
                        width={scrolled ? 210 : 500}   // más grande
                        height={scrolled ? 65 : 500}   // más grande
                        className="h-auto w-auto transition-all duration-300"
                        priority
                    />
                </Link>

                {/* Menú Desktop */}
                <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={[
                                    'uppercase tracking-wide transition-colors',
                                    scrolled
                                        ? 'text-[13px] xl:text-[14px]'
                                        : 'text-[14px] xl:text-[15px]',
                                    'hover:text-orange-400',
                                    isActive(href) ? 'text-orange-400' : 'text-white/90',
                                ].join(' ')}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Botón móvil */}
                <button
                    className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-white/10"
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <HiOutlineX size={26} className="text-white" />
                    ) : (
                        <HiOutlineMenu size={26} className="text-white" />
                    )}
                </button>
            </nav>

            {/* Overlay */}
            <button
                aria-hidden={!open}
                onClick={() => setOpen(false)}
                className={[
                    'lg:hidden fixed inset-0 -z-10 transition-opacity duration-300',
                    open ? 'opacity-100 backdrop-blur-[2px] bg-black/30' : 'pointer-events-none opacity-0',
                ].join(' ')}
            />

            {/* Menú móvil */}
            <div
                className={[
                    'lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out',
                    open ? 'max-h-96' : 'max-h-0',
                    'border-t border-white/10',
                    'bg-[#031a2e]/98',
                ].join(' ')}
            >
                <ul className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 py-2">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={() => setOpen(false)}
                                className={[
                                    'block w-full uppercase tracking-wide',
                                    'text-[14px] sm:text-[15px]',
                                    'py-3 border-b border-white/5 last:border-0',
                                    'hover:text-orange-400',
                                    isActive(href) ? 'text-orange-400' : 'text-white/90',
                                ].join(' ')}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
