import { Link } from "react-router-dom"
import CV from "../../../assets/files/CV-Carita_Cohaila_Oscar.pdf"

const Hero = () => {
    return (
        <section id="section-hero" className='min-h-0 md:min-h-[60vh] m-5 md:m-10 place-content-center border-b '>
            <div className="py-10">
                <div className="flex flex-col-reverse md:flex-row gap-10 mx-auto items-center justify-between">
                    <div className="flex flex-col flex-wrap  gap-3 md:max-w-none">
                        <span className="text-xl">Hola, soy</span>
                        <h1 className="title-fluid uppercase font-bold">Oscar Carita,</h1>
                        <h2 className="title-fluid uppercase font-bold text-[#34be5b]">Desarrollador Web</h2>
                        <p className="text-[clamp(1.1rem,1.15vw,1.25rem)] max-w-[35rem]">Soy Técnico en Computación e Informática con enfoque en desarrollo web. Disfruto transformar desafíos complejos en soluciones prácticas y eficientes que marcan la diferencia.</p>
                        <div className="flex gap-4 my-5">
                            <Link to={"/#section-proyectos"}>
                                <button className="border border-black bg-black hover:bg-[#34be5b] transition-all duration-150 text-white px-3 py-2 rounded">Ver Proyectos</button>
                            </Link>
                            <a href={CV} download={"Oscar-Carita-CV.pdf"} className="border border-neutral-400 hover:bg-white hover:text-[#34be5b] px-3 py-2 rounded cursor-pointer">Descargar CV</a>
                        </div>
                    </div>
                    <div className="flex rounded-full overflow-hidden h-fit shrink-0">
                        <img src='images/foto.png' alt='foto' className="object-cover w-[clamp(11rem,30vw,20rem)]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero