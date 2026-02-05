'use client';

import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contacto() {
    return (
        <section id="contacto" className="relative overflow-hidden bg-[#01040b] text-white">
            <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-12">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Ponte en contacto
                    </h2>

                    <p className="mx-auto mt-6 text-sm leading-relaxed text-white/70 sm:text-base">
                        ¿Tienes un proyecto en mente o quieres hablar de posibles oportunidades?
                        Estaré encantado de conocerte.
                    </p>
                </div>

                {/* SOLO: Información de contacto */}
                <div className="mt-12">
                    <div className="mx-auto max-w-2xl space-y-4">
                        <h3 className="text-xl font-semibold">Información de contacto.</h3>

                        <ContactItem
                            icon={<MdOutlineEmail size={20} />}
                            title="Gmail"
                            content={
                                <a
                                    href="mailto:kreolabmx@gmail.com"
                                    className="hover:underline decoration-white/30"
                                >
                                    kreolabmx@gmail.com
                                </a>
                            }
                        />

                        <ContactItem
                            icon={<FaPhoneAlt size={18} />}
                            title="Teléfono"
                            content={
                                <a
                                    href="tel:+5215661201760"
                                    className="hover:underline decoration-white/30"
                                >
                                    +52 1 56 6120 1760
                                </a>
                            }
                        />

                        <ContactItem
                            icon={<FaLocationDot size={20} />}
                            title="Ubicación"
                            content={<span>Ciudad de México</span>}
                        />
                    </div>
                </div>

                {/* Formulario */}
                <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                    <h3 className="text-xl font-semibold tracking-wider">Contáctanos</h3>

                    <form
                        action="https://formsubmit.co/kreolabmx@gmail.com"
                        method="POST"
                        className="mt-6 space-y-6"
                    >
                        {/* FormSubmit config */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="Contacto web - Portafolio" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" className="hidden" />

                        {/* Nombre / Apellido */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Field label="Nombre" htmlFor="nombre">
                                <input
                                    id="nombre"
                                    name="Nombre"
                                    required
                                    className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                                />
                            </Field>

                            <Field label="Apellido" htmlFor="apellido">
                                <input
                                    id="apellido"
                                    name="Apellido"
                                    required
                                    className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                                />
                            </Field>
                        </div>

                        {/* Email */}
                        <Field label="Email" htmlFor="email">
                            <input
                                id="email"
                                type="email"
                                name="Email"
                                required
                                className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                            />
                        </Field>

                        {/* Phone */}
                        <Field label="Phone" htmlFor="phone">
                            <input
                                id="phone"
                                type="tel"
                                name="Phone"
                                required
                                className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                            />
                        </Field>

                        {/* Interés */}
                        <div>
                            <span className="mb-3 block text-sm text-white/90">Me interesa:</span>
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input
                                        type="radio"
                                        name="Interes"
                                        value="Pagina Web"
                                        required
                                        className="accent-white"
                                    />
                                    Pagina Web
                                </label>

                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input
                                        type="radio"
                                        name="Interes"
                                        value="Landing Page"
                                        className="accent-white"
                                    />
                                    Landing Page
                                </label>

                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input
                                        type="radio"
                                        name="Interes"
                                        value="E-Commerce"
                                        className="accent-white"
                                    />
                                    E-Commerce
                                </label>

                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input
                                        type="radio"
                                        name="Interes"
                                        value="Otro"
                                        className="accent-white"
                                    />
                                    Otro
                                </label>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <Field label="Mensaje" htmlFor="mensaje">
              <textarea
                  id="mensaje"
                  name="Mensaje"
                  rows={4}
                  className="w-full resize-none border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
              />
                        </Field>

                        {/* Botón */}
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="
                  inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2
                  text-sm font-semibold text-black transition hover:bg-emerald-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                "
                            >
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black/50" />
                </span>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contacto;

/* ---------- Subcomponentes ---------- */

function ContactItem({
                         icon,
                         title,
                         content,
                     }: {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}) {
    return (
        <div
            className="
        flex items-center gap-4 rounded-2xl bg-white/5 p-5
        ring-1 ring-white/10 transition hover:bg-white/10
      "
        >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="text-sm text-white/60">{title}</div>
                <div className="truncate text-[15px] font-medium">{content}</div>
            </div>
        </div>
    );
}

function Field({
                   label,
                   htmlFor,
                   children,
               }: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <label htmlFor={htmlFor} className="block text-sm">
            <span className="mb-2 block text-white/90">{label}</span>
            {children}
        </label>
    );
}
