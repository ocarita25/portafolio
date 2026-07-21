import { backend, frontend } from '../../../data/tecnologias'

const Tech = () => {
    return (
        <section id='section-tecnologias' className='p-5 md:p-10'>
            <div className='flex flex-col mx-auto'>
                <div className='mb-10'>
                    <h2 className='subtitle-fluid font-semibold text-color-secondary'>Tech Stack</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                    <div className='flex flex-col gap-5 rounded-2xl'>
                        <div>
                            <h3 className='text-xl text-gray-400'>Frontend</h3>
                        </div>
                        <ul className='grid grid-cols-3 md:flex md:flex-col'>
                            {frontend.tecnologias.map(tecnologia => (
                                <li key={tecnologia.name} className='flex flex-col md:flex-row items-center gap-2 md:border-b py-3'>
                                    <img
                                        src={tecnologia.src}
                                        alt={tecnologia.alt}
                                        className='w-10 md:max-h-6 md:w-6' />
                                    <span className='text-sm text-gray-400'>{tecnologia.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5 rounded-2xl'>
                        <div>
                            <h3 className='text-xl text-gray-400'>Backend y Datos</h3>
                        </div>
                        <ul className='grid grid-cols-3 md:flex md:flex-col'>
                            {backend.tecnologias.map(tecnologia => (
                                <li key={tecnologia.name} className='flex flex-col md:flex-row items-center gap-2 border-b py-3'>
                                    <img
                                        src={tecnologia.src}
                                        alt={tecnologia.alt}
                                        className='w-10 md:max-h-6 md:w-6' />
                                    <span className='text-gray-400'>{tecnologia.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tech