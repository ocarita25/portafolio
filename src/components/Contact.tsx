import { useState } from "react";

interface FormDataInterface {
    name: string,
    email: string,
    message: string,
}

const Contact = () => {

    const [sending, setSending] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormDataInterface>(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        setSending(true)

        Verificar(form)
        await EnviarCorreo()
    }

    function Verificar(form: HTMLFormElement) {
        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }
    }

    async function EnviarCorreo() {
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
            console.log("Correo enviado:", data);
        } else {
            console.error("Error:", data.error);
        }
        setSending(false)
    }

    return (
        <form id="formulario-contacto" onSubmit={handleSubmit}>
            <div className="md:w-[30rem] mx-auto border p-10 rounded-lg">
                <fieldset className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="input-name" className="text-gray-400">Nombre</label>
                        <input
                            id="input-name"
                            name="name"
                            type="text"
                            value={formData.name}
                            className="border-b bg-transparent outline-none focus:bg-[#fff2] focus:border-b-[#34be5b] px-2"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="input-mail" className="text-gray-400">E-mail</label>
                        <input
                            id="input-mail"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@mail.com"
                            className="border-b bg-transparent outline-none focus:bg-[#fff2] focus:border-b-[#34be5b] px-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="input-message" className="text-gray-400">Mensaje</label>
                        <textarea
                            id="input-message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="border-b bg-transparent outline-none focus:bg-[#fff2] focus:border-b-[#34be5b] px-2"
                            required
                        />
                    </div>
                </fieldset>
                <div className="w-full flex justify-center pt-5">
                    <button
                        disabled={sending}
                        type="submit"
                        className="border border-black bg-black hover:bg-[#34be5b] transition-all duration-150 text-white px-3 py-2 rounded">Enviar</button>
                </div>
            </div>
        </form>
    )
}

export default Contact