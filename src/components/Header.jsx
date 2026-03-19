export default function (){
    return (
        <div className="fixed top-0 w-full z-50 bg-[#151a21]/60 backdrop-blur-xl border-b border-gray-800/10 shadow-[0_0_40px_rgba(88,166,255,0.05)]">
            <nav class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
            <div class="flex items-center gap-2">
            <span class="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-['Space_Grotesk'] tracking-tight">Sergio Luna</span>
            <span class="hidden md:inline-block px-2 py-0.5 rounded border border-outline-variant/20 text-[10px] uppercase tracking-widest text-on-surface-variant font-label">Full-Stack</span>
            </div>
            <div class="hidden md:flex items-center gap-8">
            <a class="text-blue-400 border-b-2 border-blue-400 pb-1 text-sm font-medium transition-colors" href="#about">Sobre Mí</a>
            <a class="text-gray-400 hover:text-blue-300 transition-colors text-sm font-medium" href="#projects">Proyectos</a>
            <a class="text-gray-400 hover:text-blue-300 transition-colors text-sm font-medium" href="#skills">Habilidades</a>
            <a class="text-gray-400 hover:text-blue-300 transition-colors text-sm font-medium" href="#contact">Contacto</a>
            </div>
            <div class="flex items-center gap-4">
            <button class="px-5 py-2.5 rounded-md bg-gradient-to-r from-secondary to-primary text-on-primary-fixed font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20">
                Descargar CV
            </button>
            </div>
            </nav>
        </div>
    )
}