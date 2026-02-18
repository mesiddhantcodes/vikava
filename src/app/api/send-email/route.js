import { sendMail } from "@/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();

        // Extract fields
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone") || "Not provided";
        const interest = formData.get("interest");
        const portfolioUrl = formData.get("portfolioUrl");
        const reason = formData.get("reason") || "Not provided";

        // Extract files
        const resumeFile = formData.get("resumeFile");
        const portfolioFile = formData.get("portfolioFile");

        const attachments = [];

        // Helper to process file
        const processFile = async (file, prefix) => {
            if (file && file instanceof File) {
                const buffer = Buffer.from(await file.arrayBuffer());
                return {
                    filename: `${prefix}-${file.name}`,
                    content: buffer,
                };
            }
            return null;
        };

        const resumeAttachment = await processFile(resumeFile, "Resume");
        if (resumeAttachment) attachments.push(resumeAttachment);

        const portfolioAttachment = await processFile(portfolioFile, "Portfolio");
        if (portfolioAttachment) attachments.push(portfolioAttachment);

        // Construct Email Content
        const htmlContent = `
            <div style="font-family: sans-serif; color: #333;">
                <h2>New Expression of Interest</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Area of Interest:</strong> ${interest}</p>
                <p><strong>Portfolio/Website:</strong> ${portfolioUrl}</p>
                <br/>
                <p><strong>Why Vikava Labs?:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    ${reason}
                </blockquote>
            </div>
        `;

        await sendMail({
            to: process.env.EMAIL_USER, // Send to self/admin
            subject: `Expression of Interest: ${name} - ${interest}`,
            html: htmlContent,
            attachments,
        });

        return NextResponse.json({ success: true, message: "Application sent successfully!" });
    } catch (error) {
        console.error("Expression of Interest Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send application." },
            { status: 500 }
        );
    }
}
