import { useState } from "react"

export default function Header(){
    const navLinks = [
        { href: "#about", label: "Sobre Mí" },
        { href: "#projects", label: "Proyectos" },
        { href: "#skills", label: "Habilidades" },
        { href: "#contact", label: "Contacto" },
    ]

    const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "")

    const activeLinkClass =
        "text-blue-400 border-b-2 border-blue-400 pb-1 text-sm font-medium transition-colors"
    const inactiveLinkClass =
        "text-gray-400 hover:text-blue-300 transition-colors text-sm font-medium"

    return (
        <div className="fixed top-0 w-full z-50 bg-[#151a21]/60 backdrop-blur-xl border-b border-gray-800/10 shadow-[0_0_40px_rgba(88,166,255,0.05)]">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-['Space_Grotesk'] tracking-tight">
                        Sergio Luna
                    </span>
                    <span className="hidden md:inline-block px-2 py-0.5 rounded border border-outline-variant/20 text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                        Full-Stack
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setActiveHref(href)}
                            className={activeHref === href ? activeLinkClass : inactiveLinkClass}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-5 py-2.5 rounded-md bg-gradient-to-r from-secondary to-primary text-on-primary-fixed font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20">
                        Descargar CV
                    </button>
                </div>
            </nav>
        </div>
    )
}
