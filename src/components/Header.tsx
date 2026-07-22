import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="z-10 sticky top-0 bg-[#34be5bb3] backdrop-blur-lg">
            <nav className="flex items-center justify-between mx-auto h-16 px-5 md:px-10">
                <ul><li><img src="logo.png" alt="logo" width={32} height={16} /></li></ul>
                <ul className="flex gap-5">
                    <li><Link to={"/"}>Inicio</Link></li>
                    {/* <li><Link to={"/proyectos"}>Proyectos</Link></li> */}
                    <li><Link to={"/acerca-de-mi"}>Acerca de mi</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header