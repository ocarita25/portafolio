import { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { name, email, message } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);


    if (!name || !email || !message) {
        return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`, // o tu dominio verificado
            to: ["ocarita25@gamil.com"],
            subject: `Nuevo mensaje de ${name}`,
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
        });

        if (error) {
            return res.status(500).json({ error });
        }

        return res.status(200).json({ success: true, data });
    } catch (err) {
        return res.status(500).json({ error: "Error al enviar el correo" });
    }
}