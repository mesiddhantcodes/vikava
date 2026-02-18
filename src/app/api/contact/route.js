// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message, company, phone, service } = body;

        // Server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email address" },
                { status: 400 }
            );
        }

        // Name validation
        if (name.trim().length < 2) {
            return NextResponse.json(
                { message: "Name must be at least 2 characters" },
                { status: 400 }
            );
        }

        // Message validation
        if (message.trim().length < 10) {
            return NextResponse.json(
                { message: "Message must be at least 10 characters" },
                { status: 400 }
            );
        }

        // Phone validation (if provided)
        if (phone && phone.trim()) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(phone) || phone.trim().length < 10) {
                return NextResponse.json(
                    { message: "Invalid phone number" },
                    { status: 400 }
                );
            }
        }

        // Check environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Email credentials not configured");
            return NextResponse.json(
                { message: "Email service is not configured" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify transporter
        await transporter.verify();

        // Get current date and time
        const submissionDate = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
        });

        await transporter.sendMail({
            from: `"Vikava Labs Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background: linear-gradient(135deg, #201f24 0%, #27252E 100%);
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            color: #F3F0EB;
            font-size: 28px;
            font-weight: 600;
        }
        .header p {
            margin: 8px 0 0;
            color: #abaaac;
            font-size: 14px;
        }
        .content {
            padding: 40px 30px;
        }
        .info-row {
            margin-bottom: 24px;
            border-left: 4px solid #201f24;
            padding-left: 16px;
        }
        .info-label {
            font-size: 12px;
            color: #9D9689;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
            font-weight: 600;
        }
        .info-value {
            font-size: 16px;
            color: #201f24;
            margin: 0;
            word-break: break-word;
        }
        .message-box {
            background-color: #F3F0EB;
            border: 1px solid #abaaac;
            border-radius: 12px;
            padding: 20px;
            margin-top: 24px;
        }
        .message-box .info-label {
            color: #27252E;
        }
        .message-box .info-value {
            line-height: 1.6;
            white-space: pre-wrap;
        }
        .footer {
            background-color: #F3F0EB;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #abaaac;
        }
        .footer p {
            margin: 0;
            color: #9D9689;
            font-size: 13px;
        }
        .reply-button {
            display: inline-block;
            margin-top: 24px;
            padding: 12px 32px;
            background-color: #201f24;
            color: #F3F0EB;
            text-decoration: none;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
        }
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1> New Contact Form Submission</h1>
            <p>${submissionDate}</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Name -->
            <div class="info-row">
                <div class="info-label">Name</div>
                <p class="info-value">${name}</p>
            </div>

            <!-- Email -->
            <div class="info-row">
                <div class="info-label">Email Address</div>
                <p class="info-value"><a href="mailto:${email}" style="color: #201f24; text-decoration: none;">${email}</a></p>
            </div>

            ${company ? `
            <!-- Company -->
            <div class="info-row">
                <div class="info-label">Company</div>
                <p class="info-value">${company}</p>
            </div>
            ` : ''}

            ${phone ? `
            <!-- Phone -->
            <div class="info-row">
                <div class="info-label">Phone Number</div>
                <p class="info-value"><a href="tel:${phone}" style="color: #201f24; text-decoration: none;">${phone}</a></p>
            </div>
            ` : ''}

            ${service ? `
            <!-- Service -->
            <div class="info-row">
                <div class="info-label">Service Interested In</div>
                <p class="info-value">${service}</p>
            </div>
            ` : ''}

            <div class="divider"></div>

            <!-- Message -->
            <div class="message-box">
                <div class="info-label">Message</div>
                <p class="info-value">${message}</p>
            </div>

           
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>This message was sent via the Vikava Labs contact form</p>
        </div>
    </div>
</body>
</html>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (err) {
        console.error("Contact form error:", err);

        // Handle specific nodemailer errors
        if (err.code === 'EAUTH') {
            return NextResponse.json(
                { message: "Email authentication failed" },
                { status: 500 }
            );
        }

        if (err.code === 'ECONNECTION') {
            return NextResponse.json(
                { message: "Failed to connect to email server" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
