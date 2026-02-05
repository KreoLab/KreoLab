import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Sazon from "@/assets/LaSazon.png";
import Luft from "@/assets/Luft.png";
import LunaArana from "@/assets/LunaArana.png";
import Evoke from "@/assets/Evoke.png";
import AlcerGroup from "@/assets/AlcerGroup.png";

type Project = {
    title: string;
    description: string;
    href: string;
    imageSrc: StaticImageData;
    tags: string[];
};

const projects: Project[] = [
    {
        title: "La Sazón de Hopper",
        imageSrc: Sazon,
        description: "Página web personalizada para un negocio de catering con enfoque elegante.",
        tags: ["Next.js", "Tailwind CSS", "React", "Figma", "JavaScript", "TypeScript"],
        href: "https://lasazonhopper.com/",
    },
    {
        title: "Luft",
        imageSrc: Luft,
        description:
            "Proyectos de aire lavado, máquinas y soluciones de aire acondicionado. Proveedores de confianza.",
        tags: ["Next.js", "Tailwind CSS", "React", "Figma", "JavaScript", "TypeScript"],
        href: "https://luft.com.mx/",
    },
    {
        title: "Luna Arana",
        imageSrc: LunaArana,
        description:
            "Opciones de hospedaje y vivienda para distintos gustos y necesidades, con experiencia clara y directa.",
        tags: ["Next.js", "Tailwind CSS", "React", "Figma", "JavaScript", "TypeScript"],
        href: "https://lunaarana.com/",
    },
    {
        title: "Alcer Group",
        imageSrc: AlcerGroup,
        description:
            "Grupo empresarial enfocado en soluciones integrales para industria, tecnología y servicios especializados.",
        tags: ["Next.js", "Tailwind CSS", "React", "Figma", "JavaScript", "TypeScript"],
        href: "https://alcergroup.com/",
    },
    {
        title: "Evoke",
        imageSrc: Evoke,
        description:
            "Landing de unidad especializada de AlCer Group orientada a proyectos creativos y tecnológicos, con enfoque visual.",
        tags: ["Next.js", "Tailwind CSS", "React", "Figma", "JavaScript", "TypeScript"],
        href: "https://evoke.alcergroup.com/",
    },
];

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/80">
      {children}
    </span>
    );
}

function ProjectCard({ p }: { p: Project }) {
    return (
        <article
            className="
        group relative overflow-hidden rounded-[24px]
        border border-white/10 bg-white/5
        shadow-[0_12px_50px_rgba(0,0,0,0.35)]
        transition hover:border-white/20 hover:bg-white/10
      "
        >
            {/* glow */}
            <div
                className="
          pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full
          bg-cyan-500/15 blur-3xl opacity-0 transition group-hover:opacity-100
        "
            />

            <div className="relative p-5">
                {/* preview */}
                <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-black/20">
                    <div className="relative aspect-[16/10] w-full">
                        <Image
                            src={p.imageSrc}
                            alt={p.title}
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={false}
                        />
                    </div>
                </div>

                {/* content */}
                <div className="mt-5">
                    <h3 className="text-lg font-extrabold tracking-tight text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                            <Tag key={`${p.title}-${t}`}>{t}</Tag>
                        ))}
                    </div>

                    <div className="mt-5">
                        <Link
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                inline-flex items-center gap-2 rounded-xl
                border border-white/10 bg-white/10 px-4 py-2
                text-sm font-semibold text-white
                transition hover:bg-white/15 hover:border-white/20
              "
                        >
                            Ver proyecto
                            <ArrowUpRight className="h-4 w-4 opacity-80" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

function Proyectos() {
    return (
        <section id="proyectos" className="relative overflow-hidden bg-[#01040b]">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Mis Proyectos
                    </h2>

                    <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base">
                        Explora mis últimos proyectos en los que aplico mis habilidades para crear aplicaciones web
                        funcionales y atractivas.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proyectos;
