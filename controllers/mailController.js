const nodemailer = require("nodemailer");
const express = require("express");
const app = express();

const sendEmail = async (req, res) => {

    const { contenido, destinatario, asunto } = req.query;

    console.log(contenido, destinatario, asunto)

    const transporter = nodemailer.createTransport({
        host: "mail.signature.com.ni",
        post: 465,
        secure: false,
        auth: {
            user: "helpdesk@signature.com.ni",
            pass: "Signature/HeDe*2021",
        },
        // La linea Magica!
        tls: {rejectUnauthorized: false}
    });

    const mailOptions = {
        from: "helpdesk@signature.com.ni",
        to: destinatario,
        subject: asunto,
        text: contenido,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        }
        else {
            console.log("Email enviado.");
            res.status(200).json("Tu solicitud ha sido agregada!");
        }
    });
});
