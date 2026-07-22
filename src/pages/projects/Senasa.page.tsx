import Carousel from "../../components/Carousel"

const senasaMantenimientoImages = [
    "/images/proyectos/senasa/mantenimientos/login.webp",
    "/images/proyectos/senasa/mantenimientos/registro-conductor.webp",
    "/images/proyectos/senasa/mantenimientos/form-vehiculo.webp",
    "/images/proyectos/senasa/mantenimientos/registrar-vehiculo.webp",
    "/images/proyectos/senasa/mantenimientos/datos-mantenimiento.webp",
    "/images/proyectos/senasa/mantenimientos/registro-mantenimiento.webp",
    "/images/proyectos/senasa/mantenimientos/mantenimiento-registrado.webp",
    "/images/proyectos/senasa/mantenimientos/mantenimiento-acta.webp",
    "/images/proyectos/senasa/mantenimientos/mantenimiento-anexo.webp",
]

const senasaConstanciasImages = [
    "/images/proyectos/senasa/constancias/1.webp",
    "/images/proyectos/senasa/constancias/2.webp",
    "/images/proyectos/senasa/constancias/3.webp",
    "/images/proyectos/senasa/constancias/4.webp",
    "/images/proyectos/senasa/constancias/5.webp",
    "/images/proyectos/senasa/constancias/6.webp",
    "/images/proyectos/senasa/constancias/7.webp",
    "/images/proyectos/senasa/constancias/8.webp",
    "/images/proyectos/senasa/constancias/9.webp",
    "/images/proyectos/senasa/constancias/10.webp",
]

const Senasa = () => {
    return (
        <div className="w-full text-neutral-300">
            <div className="max-w-[60rem] mx-auto p-5 md:p-10">
                <div className="w-full text-center">
                    <h2 className="text-[3rem] my-10">SENASA</h2>
                </div>

                <div>
                    <h3 className="text-[2rem] text-center my-10">Modulo de Mantenimiento de la Flota Vehicular</h3>
                    <div className="flex flex-col text-lg gap-4">
                        <p>Sistema de registro y emisión de fichas de mantenimiento para la flota vehicular del Servicio Nacional de Sanidad Agraria - SENASA</p>
                        <p>Para este sistema se utilizó la libreria de React JS junto con CSS Module para el frontend.'</p>
                        <p>El Backend esta desarrollado con Node JS utilizando el Framework Express JS. La Base de datos, administrada con MySql, fue re-conceptualizada debido a duplicidad de datos rescatando solo la información necesaria.</p>
                    </div>
                    <div className="my-10">
                        <Carousel images={senasaMantenimientoImages} />
                    </div>
                </div>

                <div>
                    <h3 className="text-[2rem] text-center my-10">Modulo de Constancias de Locacion</h3>
                    <div className="flex flex-col gap-4">
                        <p>Sistema de registro y emisión de fichas de mantenimiento para la flota vehicular del Servicio Nacional de Sanidad Agraria - SENASA</p>
                        <p>Para este sistema se utilizó la libreria de React JS junto con CSS Module para el frontend.'</p>
                        <p>El Backend esta desarrollado con Node JS utilizando el Framework Express JS. La Base de datos, administrada con MySql, fue re-conceptualizada debido a duplicidad de datos rescatando solo la información necesaria.</p>
                    </div>
                    <div className="my-10">
                        <Carousel images={senasaConstanciasImages} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Senasa