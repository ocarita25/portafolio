import { experiencias, formacion } from '../../data/curriculum'
import { FaCheck, FaCircle, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Hero from '../home/components/Hero'

function Acerca() {

    const mensaje = "Hola Oscar, he visto tu portfolio y me gustaría contactarme contigo"

    return (
        <div>
            <div className='xl:max-w-[60rem] mx-auto'>
                <Hero />
                <div className='grid grid-cols-[auto_1fr] gap-10 m-5 md:m-10'>
                    <aside className=''>
                        <ul className=''>
                            <li className='flex flex-col gap-4'>Contacto
                                <ul className='acerca-sub-lista'>
                                    <li className='flex items-center gap-4'><FaWhatsapp /><a href={`https://wa.me/+51952009585?text=${mensaje}`} target='_blank'>+51 952 009 585</a></li>
                                    <li className='flex items-center gap-4'><FaEnvelope /><a href='mailto:ocarita25@gmail.com' target='_blank'>ocarita25@gmail.com</a></li>
                                    <li className='flex items-center gap-4'><FaGithub /><a href='https://github.com/OscarCarita' target='_blank'>Github</a></li>
                                    <li className='flex items-center gap-4'><FaLinkedin /><a href='https://www.linkedin.com/in/oscar-abelardo-carita-cohaila-5498bb2a0/' target='_blank'>LinkedIn</a></li>
                                </ul>
                            </li>
                            <hr className='my-5' />
                            <li className="flex flex-col gap-4">Aptitudes
                                <ul className='acerca-sub-lista'>
                                    <li className='flex items-center gap-4'><FaCheck /><p>Adaptabilidad</p></li>
                                    <li className='flex items-center gap-4'><FaCheck /><p>Honestidad</p></li>
                                    <li className='flex items-center gap-4'><FaCheck /><p>Trabajo en equipo</p></li>
                                    <li className='flex items-center gap-4'><FaCheck /><p>Autodidacta</p></li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                    <div>
                        <section>
                            <div>
                                <h3 className="text-[#34be5b] uppercase text-[1.75rem] font-semibold mb-5">Experiencia laboral</h3>
                                <div>
                                    {experiencias.map((experiencia, index) => {
                                        return (
                                            <div key={index} className='mb-5'>
                                                <div className='flex justify-between items-center'>
                                                    <h4 className="uppercase text-xl">{experiencia.empresa}</h4>
                                                    <h5 className="text-gray-500">{experiencia.inicio} - {experiencia.fin}</h5>
                                                </div>
                                                <h4 className="mb-2 text-gray-400">{experiencia.cargo}</h4>
                                                <ul className='ps-5'>
                                                    {experiencia.funciones.map((funcion, index2) => {
                                                        return (
                                                            <li key={index2} className={"flex items-center gap-3"}><FaCircle size={8} />{funcion}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr className='my-10' />
                            <article className="acerca-content-group">
                                <h3 className="text-[#34be5b] uppercase text-[1.75rem] font-semibold mb-5">Formación Académica</h3>
                                <div>
                                    {formacion.map((estudio, index) => {
                                        return (
                                            <div key={index} className='mb-5'>
                                                <div className='flex justify-between items-center'>
                                                    <h4 className="uppercase text-xl max-w-[40ch]">{estudio.institucion}</h4>
                                                    <h5 className="text-gray-500">{estudio.inicio} - {estudio.fin}</h5>
                                                </div>
                                                <h4 className="mb-2 text-gray-400">{estudio.estudios}</h4>
                                            </div>
                                        )
                                    })}
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acerca