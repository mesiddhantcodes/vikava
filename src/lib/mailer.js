import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendMail({ to, subject, html, attachments }) {
    try {
        await transporter.sendMail({
            from: `"Vikava Labs Website" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
            attachments,
        });
    } catch (error) {
        console.error("Email error:", error);
        throw new Error("Email failed");
    }
}
