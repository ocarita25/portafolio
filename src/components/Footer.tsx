import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='bg-[#34be5b] text-white p-5 md:p-10'>
            <div className='grid grid-cols-2 gap-4 justify-center w-full xl:max-w-[60rem] h-full mx-auto'>
                <div className='flex items-end'>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/oscar-carita-9b6b56347/" target="_blank" className="py-1 flex items-center gap-2"><FaLinkedin size={20} />LinkedIn</a></li>
                        <li><a href="mailto:ocarita25@gmail.com" className="py-1 flex items-center gap-2"><FaEnvelope size={20} />ocarita25@gmail.com</a></li>
                        <li><a href="https://wa.me/+51952009585" target="_blank" className="py-1 flex items-center gap-2"><FaWhatsapp size={20} />+51 952 009 585</a></li>
                    </ul>
                </div>
                <div className='flex items-end justify-end'>
                    <ul>
                        <li>Tacna - Peru</li>
                        <li>Oscar Abelardo Carita Cohaila</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer