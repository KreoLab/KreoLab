import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "KreoLab",
    description: "KreoLab es un laboratorio creativo y tecnológico especializado en el desarrollo, sistematización y construcción de marcas. Ayudamos a empresas y emprendedores a transformar sus ideas en proyectos funcionales, escalables y con identidad sólida, combinando diseño, automatización y estrategia digital para lograr resultados reales.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
