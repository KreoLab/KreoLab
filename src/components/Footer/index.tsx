'use client';

import React, { useState } from 'react';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import {Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter,} from 'lucide-react';
import Image from "next/image";

export default function Footer() {
    const [email, setEmail] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail('');
    };

    return (
        <footer className="bg-[#01040b] text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
                {/* Top grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
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
                            <div>
                                <p className="text-lg font-semibold tracking-tight">Kreolab</p>
                                <p className="text-xs text-white/60 -mt-0.5">Digital Studio</p>
                            </div>
                        </div>

                        <p className="text-sm leading-6 text-white/70 max-w-sm">
                            Transformamos ideas en experiencias digitales excepcionales que
                            impulsan el crecimiento.
                        </p>

                        <div className="flex items-center gap-3">
                            <SocialIcon href="#" label="LinkedIn">
                                <Linkedin className="h-4 w-4" />
                            </SocialIcon>
                            <SocialIcon href="#" label="Instagram">
                                <Instagram className="h-4 w-4" />
                            </SocialIcon>
                            <SocialIcon href="#" label="Facebook">
                                <Facebook className="h-4 w-4" />
                            </SocialIcon>
                            <SocialIcon href="#" label="Twitter/X">
                                <Twitter className="h-4 w-4" />
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Servicios */}
                    <FooterCol title="Servicios">
                        <FooterLink href="#">Páginas Web</FooterLink>
                        <FooterLink href="#">Landing Pages</FooterLink>
                        <FooterLink href="#">Aplicaciones Web</FooterLink>
                        <FooterLink href="#">E-Commerce</FooterLink>
                    </FooterCol>

                    {/* Empresa */}
                    <FooterCol title="Empresa">
                        <FooterLink href="#">Quiénes Somos</FooterLink>
                        <FooterLink href="#">Proyectos</FooterLink>
                        <FooterLink href="/blog">Servicios</FooterLink>
                        <FooterLink href="#">Contacto</FooterLink>
                    </FooterCol>

                    {/* Legal + Contacto */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold tracking-tight">Contacto</p>

                            <div className="space-y-3 text-sm text-white/70">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-white/70" />
                                    <a
                                        href="mailto:kreolabmx@gmail.com"
                                        className="hover:text-white transition"
                                    >
                                        kreolabmx@gmail.co
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-white/70" />
                                    <a
                                        href="tel:+52 1 56 6120 1760"
                                        className="hover:text-white transition">
                                        +52 1 56 6120 1760
                                    </a>
                                </div>

                                <div className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 text-white/70 mt-0.5" />
                                    <span>Ciudad De Mexico</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-white/60">
                            © {new Date().getFullYear()} Kreolab. Todos los derechos reservados.
                        </p>
                        <p className="text-xs text-white/60">
                            Hecho con creatividad y código
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* Helpers */

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-4">
            <p className="text-sm font-semibold tracking-tight">{title}</p>
            <ul className="space-y-2">{children}</ul>
        </div>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-white/70 hover:text-white transition"
            >
                {children}
            </Link>
        </li>
    );
}

function SocialIcon({
                        href,
                        label,
                        children,
                    }: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            aria-label={label}
            className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}
