import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <section id="section-proyectos" className="p-5 md:p-10 ">
            <div className="flex flex-col mx-auto">
                <div className="mb-10">
                    <h2 className="subtitle-fluid font-semibold text-color-secondary">Proyectos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    <div className="flex flex-col rounded-2xl">
                        <div className="mb-1">
                            <h3 className='text-xl text-gray-200'>Sistema Interno Administrativo <small className="text-gray-500">(2026)</small></h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">React</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">Typescript</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">Tailwind CSS</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">Node.js</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">MySQL</div>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img src="images/proyectos/sia-thumbnail.webp" alt="sistema interno administrativo-thumbnail" width={1938} height={1454} className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-col rounded-2xl">
                        <div className="mb-1">
                            <h3 className='text-xl text-gray-200'>Inovafy <small className="text-gray-500">(2025-2026)</small></h3>
                        </div>
                        <div className="flex gap-2 mb-3">
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">React</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">GSAP</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">Tailwind CSS</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">PHP/Laravel</div>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <a href="https://inovafy.vercel.app/" target="_blank">
                                <img src="images/proyectos/inovafy-thumbnail.webp" alt="inovafy-thumbnail" width={1938} height={1454} className="w-full h-auto" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-col rounded-2xl">
                        <div className="mb-1">
                            <h3 className='text-xl text-gray-200'>SENASA <small className="text-gray-500">(2021-2022)</small></h3>
                        </div>
                        <div className="flex gap-2 mb-3">
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">React</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">CSS</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">CSS Modules</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">Node.js</div>
                            <div className="bg-white text-black rounded-full px-2 py-1 text-sm">MySQL</div>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <Link to={"/proyectos/senasa"}>
                                <img src="images/proyectos/senasa-thumbnail.webp" alt="sistema interno administrativo-thumbnail" width={1938} height={1454} className="aspect-[1938/1454] w-full h-auto" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects