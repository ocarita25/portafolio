import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <section id="section-proyectos" className="p-5 md:p-10 ">
            <div className="flex flex-col mx-auto">
                <div className="mb-10">
                    <h2 className="subtitle-fluid font-semibold text-color-secondary">Proyectos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    <div className="flex flex-col gap-2 rounded-2xl">
                        <div>
                            <h3 className='text-xl text-gray-200'>Sistema Interno Administrativo <small className="text-gray-500">(2026)</small></h3>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img src="images/proyectos/sia-thumbnail.webp" alt="sistema interno administrativo-thumbnail" width={1938} height={1454} className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-2xl">
                        <div>
                            <h3 className='text-xl text-gray-200'>Inovafy <small className="text-gray-500">(2025-2026)</small></h3>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <a href="https://inovafy.vercel.app/" target="_blank">
                                <img src="images/proyectos/inovafy-thumbnail.webp" alt="inovafy-thumbnail" width={1938} height={1454} className="w-full h-auto" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-2xl">
                        <div>
                            <h3 className='text-xl text-gray-200'>SENASA <small className="text-gray-500">(2021-2022)</small></h3>
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