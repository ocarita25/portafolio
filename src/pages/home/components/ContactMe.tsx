import Contact from "../../../components/Contact"

const ContactMe = () => {
    return (
        <section id="section-contactame" className="p-5 md:p-10">
            <div className="flex flex-col mx-auto">
                <div className="mb-10">
                    <h2 className="subtitle-fluid font-semibold text-color-secondary">Contáctame</h2>
                </div>
                <Contact />
            </div>
        </section>
    )
}

export default ContactMe