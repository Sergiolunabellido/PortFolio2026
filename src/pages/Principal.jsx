import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Principal() {
    return (
        <div className="bg-surface text-on-surface selection:bg-primary/30 scroll-smooth overflow-x-hidden">
            <Header />
            <div className="relative">

                <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-full bg-glow-purple"></div>
                    <div class="absolute bottom-0 right-0 w-full h-full bg-glow-blue"></div>
                    <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
                    <div class="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"></div>
                </div>

                <section class="relative pt-40 pb-24 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant border border-outline-variant/20 mb-8">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                        </span>
                        <span class="text-xs font-label text-tertiary tracking-wide uppercase">Disponible para nuevos retos</span>
                    </div>
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
                        Hola, soy <span class="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Sergio Luna</span>
                    </h1>
                    <div class="max-w-3xl space-y-4 mb-12">
                        <p class="text-xl md:text-2xl text-on-surface font-light">Full-Stack Developer | España</p>
                        <div class="flex flex-wrap justify-center gap-3 text-on-surface-variant text-sm font-label">
                            <span class="px-3 py-1 rounded-md bg-surface-container-high border border-outline-variant/10">React </span>
                            <span class="px-3 py-1 rounded-md bg-surface-container-high border border-outline-variant/10">Node.js </span>
                            <span class="px-3 py-1 rounded-md bg-surface-container-high border border-outline-variant/10">Java </span>
                        </div>
                        <p class="text-lg text-on-surface-variant italic font-body">"Construyendo el futuro, una li­nea a la vez"</p>
                    </div>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a class="px-8 py-4 rounded-md bg-primary-fixed text-on-primary-fixed font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all" href="#projects">
                            Ver Proyectos 
                        </a>
                        <a class="px-8 py-4 rounded-md glass-card text-on-surface font-bold hover:bg-surface-variant transition-all" href="#contact">
                            Hablemos
                        </a>
                    </div>
                </section>

                <section class="relative py-24 px-8 max-w-7xl mx-auto" id="about">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div class="lg:col-span-5 space-y-6">
                            <div class="inline-block px-4 py-1 rounded-md border border-secondary/20 text-secondary text-xs font-label uppercase tracking-widest mb-4">01 / Sobre Mi</div>
                            <h2 class="text-4xl font-bold leading-tight">Orquestando experiencias digitales con <span class="text-primary">precisión tecnica</span>.</h2>
                            <p class="text-on-surface-variant leading-relaxed text-lg text-justify">
                                Apasionado por la arquitectura de software y el diseño de interfaces. Mi enfoque combina la solidez del backend con la elegancia del frontend para crear productos escalables y memorables.
                            </p>
                        </div>
                        <div class="lg:col-span-7">
                            <div class="glass-card rounded-xl overflow-hidden shadow-2xl">
                                <div class="h-10 bg-surface-container-highest px-4 flex items-center gap-2 border-b border-outline-variant/10">
                                    <div class="w-3 h-3 rounded-full bg-error-dim/40"></div>
                                    <div class="w-3 h-3 rounded-full bg-secondary-dim/40"></div>
                                    <div class="w-3 h-3 rounded-full bg-primary-dim/40"></div>
                                    <span class="ml-4 text-[10px] font-label text-on-surface-variant/60">sergio-luna.json</span>
                                </div>
                                <div class="p-8 font-label text-sm md:text-base leading-relaxed overflow-x-auto text-wrap">
                                    <pre class="text-primary"><span class="text-secondary"></span>
                                        <span class="text-tertiary">"nombre"</span>: <span class="text-on-surface">"Sergio Luna"</span>,
                                        <span class="text-tertiary">"ubicacion"</span>: <span class="text-on-surface">"España"</span>,
                                        <span class="text-tertiary">"rol"</span>: <span class="text-on-surface">"Full-Stack Developer"</span>,
                                        <span class="text-tertiary">"stack"</span>: <span class="text-on-surface">[<span class="text-primary-dim">"React"</span>, <span class="text-primary-dim">"Node.js"</span>, <span class="text-primary-dim">"Java"</span>]</span>,
                                        <span class="text-tertiary">"pasion"</span>: <span class="text-on-surface">"Convertir ideas en cÃ³digo elegante"</span>
                                        <span class="text-secondary"></span></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="relative py-24 px-8 max-w-7xl mx-auto" id="projects">
                    <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div>
                            <div class="inline-block px-4 py-1 rounded-md border border-primary/20 text-primary text-xs font-label uppercase tracking-widest mb-4">02 / Portfolio</div>
                            <h2 class="text-4xl font-bold">Proyectos <span class="text-secondary italic">Destacados</span></h2>
                        </div>
                        <p class="text-on-surface-variant max-w-md text-right text-sm">Selección de trabajos donde la arquitectura se une con la funcionalidad para resolver problemas reales.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

                        <a
                            class="block lg:col-span-8 group relative overflow-hidden rounded-xl glass-card transition-all duration-500 hover:border-primary/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/60"
                            href="https://github.com/Sergiolunabellido/GlobinVerse"
                            aria-label="Abrir repositorio de GoblinVerse en GitHub"
                        >
                            <img class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Dark library or digital book shelf concept" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZsmM3h-Y2n-VwCoVPzPsFwah9YR2SeFcbA3J4M7lkSjfPFnfqsYwmxQ-biLCDpIfi1LoBn8m1UuTZCbMGeB8455Lq2x7cpIavH3t7K-eptUyNcqQBop-nZUaW_ByzPI6EuTKleOVSfkgzt0mCy0cNq1E5OWZQoJ1GPvjDI-9G2G5fuCjBvIdkw8lsJEF84RDL11wpB-7Jf5tKJ7UE6c7qjZuiucBs8SoOHnTFYkdc0JymJJheFUgxPACKUC3igGDSlKW1eGJAnG0" />
                            <div class="absolute bottom-[25%] w-full flex flex-col items-center ">
                                <div class="flex gap-2 mb-4">
                                    <span class="px-2 py-0.5 rounded text-[15px] font-b font-label bg-primary/20 text-primary uppercase">Proyecto Web</span>
                                    <span class="px-2 py-0.5 rounded text-[15px] font-label bg-tertiary/20 text-tertiary uppercase">Full-Stack</span>
                                </div>
                                <h3 class="text-3xl font-bold mb-2">GoblinVerse</h3>
                                <p class="text-on-surface-variant mb-6 max-w-lg">Plataforma integral para entusiastas de la lectura. Gestión de catalogo, pagos seguros y experiencia de usuario inmersiva.</p>
                            </div>
                        </a>

                        <a
                            class="block lg:col-span-4 group relative overflow-hidden rounded-xl glass-card transition-all duration-500 hover:border-secondary/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary/60"
                            href="https://github.com/Sergiolunabellido/Gestor-Documental-de-Clientes-GDC-"
                            aria-label="Abrir repositorio de GDC en GitHub"
                        >
                            <div class="p-8 h-full flex flex-col justify-between">
                                <div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-label bg-secondary/20 text-secondary uppercase mb-4 inline-block">Enterprise</span>
                                    <h3 class="text-2xl font-bold mb-2">GDC</h3>
                                    <p class="text-on-surface-variant text-sm mb-6">Gestor Documental Centralizado. Optimización de flujos de trabajo corporativos y gestión segura de activos digitales.</p>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-2 py-1 rounded-full bg-surface-variant text-tertiary text-[15px] font-label">JS</span>
                                        <span class="px-2 py-1 rounded-full bg-surface-variant text-tertiary text-[15px] font-label">PHP</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                    
                        <a class="lg:col-span-4 group relative overflow-hidden rounded-xl glass-card transition-all duration-500 hover:border-tertiary/40"
                            href="https://github.com/Sergiolunabellido/ProyectoAccesoDatos"
                            aria-label="Abrir repositorio de AccesoDatos en GitHub"
                        >
                            <div class="p-8 h-full flex flex-col justify-between border-t-4 border-tertiary/20">
                                <div>
                                    <span class="px-2 py-0.5 rounded text-[15px] font-label bg-tertiary/20 text-tertiary uppercase mb-4 inline-block">Integración</span>
                                    <h3 class="text-2xl font-bold mb-2">AccesoDatos</h3>
                                    <p class="text-on-surface-variant text-sm">Capa de persistencia avanzada para sistemas distribuidos. Integración fluida de multiples fuentes de datos SQL/NoSQL.</p>
                                </div>
                                <div class="mt-8 flex justify-between items-center">
                                    <span class="material-symbols-outlined text-4xl text-on-surface-variant/20">database</span>
                                    <span class="text-[15px] font-label text-on-surface-variant">API RESTful</span>
                                </div>
                            </div>
                        </a>

                        <a
                            class="block lg:col-span-8 group relative overflow-hidden rounded-xl glass-card transition-all duration-500 hover:border-primary/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/60"
                            href="https://github.com/Sergiolunabellido/AprendeCuidandote"
                            aria-label="Abrir repositorio de AprendeCuidandote en GitHub"
                        >
                            <div class="grid md:grid-cols-2 h-full">
                                <div class="p-8 flex flex-col justify-center">
                                    <span class="px-2 py-0.5 rounded text-[15px] font-label bg-error/20 text-error uppercase mb-4 inline-block w-fit">Social Impact</span>
                                    <h3 class="text-2xl font-bold mb-2">AprendeCuidandote</h3>
                                    <p class="text-on-surface-variant text-sm mb-6">App diseñada para la 3ª edad. Fomentando el aprendizaje activo y el autocuidado con una interfaz accesible y amigable.</p>
                                    <div class="flex gap-3">
                                        <span class="px-3 py-1 rounded border border-outline-variant/20 text-[15px] font-label">Flutter</span>
                                        <span class="px-3 py-1 rounded border border-outline-variant/20 text-[15px] font-label">Dart</span>
                                    </div>
                                </div>
                                <div class="relative min-h-[200px] overflow-hidden">
                                    <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Accessible mobile app interface for elderly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXU6l5OQgsnZho1KTwi0Yn6xPsydx_BjA8tRwM5MhJMRLxNy0KFQk8mCsSLhUhxITjgAZo-laoe2SvgOPZipco6lXxnZfvDkAIKcWxRAoemfXJIfLofXjB_yda19IUwCoifIOcj-qGmMAHIPDAUS8DeEujHriz5bq6BuLxIXsMktmilXClPlqJUJ6tuZGZYSgWd7RjOm4xYMYa0hgdMGv4rYSuAtnsxQr_RR0guOPnUgZJ2tyOs3fPhrQhOk0sPD2YzWERqgqzIe8" />
                                </div>
                            </div>
                        </a>
                    </div>
                </section>

                {/*
                    Comienzo de seccion de Stack Tecnologico con lenguajes front, back y herramientas
                */}
                <section class="relative py-24 px-8 max-w-7xl mx-auto bg-surface-container-low rounded-3xl mb-24 overflow-hidden" id="skills">
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
    <div class="text-center mb-16">
        <div class="inline-block px-4 py-1 rounded-md border border-tertiary/20 text-tertiary text-xs font-label uppercase tracking-widest mb-4">03 / Toolkit</div>
        <h2 class="text-4xl font-bold mb-4">Stack Tecnológico</h2>
        <p class="text-on-surface-variant max-w-2xl mx-auto">Herramientas y lenguajes que utilizo para dar vida a las ideas.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="space-y-6">
            <div class="flex items-center gap-3">
                <h4 class="font-bold text-lg">Frontend</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="React">
                        <circle cx="32" cy="32" r="4.5" fill="#61DAFB"></circle>
                        <ellipse cx="32" cy="32" rx="22" ry="10" fill="none" stroke="#61DAFB" strokeWidth="3"></ellipse>
                        <ellipse cx="32" cy="32" rx="22" ry="10" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 32 32)"></ellipse>
                        <ellipse cx="32" cy="32" rx="22" ry="10" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 32 32)"></ellipse>
                    </svg>
                    <p class="text-xs font-label">React</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="JavaScript">
                        <rect x="8" y="8" width="48" height="48" rx="10" fill="#F7DF1E"></rect>
                        <text x="32" y="40" textAnchor="middle" fontSize="18" fontWeight="900" fill="#111827">JS</text>
                    </svg>
                    <p class="text-xs font-label">JavaScript</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="HTML5">
                        <path d="M14 10h36l-3 40-15 4-15-4-3-40z" fill="#E34F26"></path>
                        <path d="M32 15v36l12-3 3-33H32z" fill="#F06529"></path>
                        <text x="32" y="40" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">H5</text>
                    </svg>
                    <p class="text-xs font-label">HTML5</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="CSS3">
                        <path d="M14 10h36l-3 40-15 4-15-4-3-40z" fill="#1572B6"></path>
                        <path d="M32 15v36l12-3 3-33H32z" fill="#2D7DD2"></path>
                        <text x="32" y="40" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">C3</text>
                    </svg>
                    <p class="text-xs font-label">CSS3</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Bootstrap">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#7952B3"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="22" fontWeight="900" fill="#F9FAFB">B</text>
                    </svg>
                    <p class="text-xs font-label">Bootstrap</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="jQuery">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#0C4A6E"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="16" fontWeight="900" fill="#F9FAFB">jQ</text>
                    </svg>
                    <p class="text-xs font-label">jQuery</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="JavaFX">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F59E0B"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="16" fontWeight="900" fill="#111827">FX</text>
                    </svg>
                    <p class="text-xs font-label">JavaFX</p>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="flex items-center gap-3">
                <h4 class="font-bold text-lg">Backend</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Node.js">
                        <polygon points="32,8 54,20 54,44 32,56 10,44 10,20" fill="#16A34A"></polygon>
                        <text x="32" y="40" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">Node</text>
                    </svg>
                    <p class="text-xs font-label">Node.js</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Express">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#111827"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">ex</text>
                    </svg>
                    <p class="text-xs font-label">Express</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Java">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F59E0B"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="16" fontWeight="900" fill="#111827">Java</text>
                    </svg>
                    <p class="text-xs font-label">Java</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Python">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#2563EB"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="16" fontWeight="900" fill="#F9FAFB">Py</text>
                    </svg>
                    <p class="text-xs font-label">Python</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Kotlin">
                        <defs>
                            <linearGradient id="kotlinGradientSkills" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#7C3AED"></stop>
                                <stop offset="1" stopColor="#F97316"></stop>
                            </linearGradient>
                        </defs>
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#kotlinGradientSkills)"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="16" fontWeight="900" fill="#F9FAFB">K</text>
                    </svg>
                    <p class="text-xs font-label">Kotlin</p>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="flex items-center gap-3">
                <h4 class="font-bold text-lg">Bases de datos &amp; Auth</h4>
            </div>
            <div class="grid grid-cols-3 gap-3">
                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="MySQL">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#1D4ED8"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">SQL</text>
                    </svg>
                    <p class="text-xs font-label">MySQL</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="JWT">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#111827"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">JWT</text>
                    </svg>
                    <p class="text-xs font-label">JWT</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="MongoDB">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#16A34A"></rect>
                        <path d="M32 14c6 10 7 18 0 36-7-18-6-26 0-36z" fill="#F9FAFB" opacity="0.9"></path>
                    </svg>
                    <p class="text-xs font-label">MongoDB</p>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="flex items-center gap-3">
                <h4 class="font-bold text-lg">Herramientas</h4>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Git">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#F97316"></rect>
                        <path d="M24 34a6 6 0 1 1 10 4v6h6a6 6 0 1 1 4 0 6 6 0 0 1-10-4v-6h-6a6 6 0 0 1-4 0z" fill="#111827" opacity="0.9"></path>
                    </svg>
                    <p class="text-xs font-label">Git</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="GitHub">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#111827"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">GH</text>
                    </svg>
                    <p class="text-xs font-label">GitHub</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="VS Code">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#0284C7"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">VS</text>
                    </svg>
                    <p class="text-xs font-label">VS Code</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="Docker">
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="#0EA5E9"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#111827">DK</text>
                    </svg>
                    <p class="text-xs font-label">Docker</p>
                </div>

                <div class="p-4 rounded-lg bg-surface border border-outline-variant/10 text-center hover:bg-surface-variant transition-colors group">
                    <svg viewBox="0 0 64 64" class="h-8 w-8 mx-auto mb-2" role="img" aria-label="IntelliJ IDEA">
                        <defs>
                            <linearGradient id="ijGradientSkills" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#111827"></stop>
                                <stop offset="1" stopColor="#7C3AED"></stop>
                            </linearGradient>
                        </defs>
                        <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#ijGradientSkills)"></rect>
                        <text x="32" y="41" textAnchor="middle" fontSize="14" fontWeight="900" fill="#F9FAFB">IJ</text>
                    </svg>
                    <p class="text-xs font-label">IntelliJ</p>
                </div>
            </div>
        </div>
    </div>
</section>
                {/*
                    Finalizacion de Seccion del Stack Tecnologico
                */}

                <section class="py-24 px-8 max-w-4xl mx-auto text-center" id="contact">
                    <h2 class="text-5xl font-bold mb-8">¿Tienes un proyecto en mente?</h2>
                    <p class="text-on-surface-variant text-xl mb-12">Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o colaboraciones en el mundo del desarrollo.</p>
                    <a class="inline-block text-3xl font-bold border-b-4 border-secondary/40 pb-2 hover:border-primary transition-all duration-300" href="https://mail.google.com/mail/?view=cm&fs=1&to=sergiolunabellido04@gmail.com" target="_blank" >
                        sergiolunabellido04@gmail.com
                    </a>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
