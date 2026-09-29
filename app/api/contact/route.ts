import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const RECIPIENT_EMAILS = ["dhurba179@gmail.com", "sharvikatech@gmail.com"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sender_name, sender_email, sender_phone, subject, message } = body;

    if (!sender_name || !sender_email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailSubject = `Portfolio Inquiry from ${sender_name}: ${subject || "General Inquiry"}`;
    const emailBody = `
New Visitor Inquiry from Portfolio Website:
---------------------------------------------
Name: ${sender_name}
Email: ${sender_email}
Phone: ${sender_phone || "Not provided"}
Subject: ${subject || "General Inquiry"}
Date/Time: ${new Date().toLocaleString()}

Message:
${message}
---------------------------------------------
Sent to: ${RECIPIENT_EMAILS.join(" & ")}
    `.trim();

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1d4ed8, #4338ca); padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">🚀 New Portfolio Inquiry</h2>
          <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">From Dhurba Dhakal's Portfolio Website</p>
        </div>
        <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 120px;">Visitor Name:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${sender_name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Visitor Email:</td>
              <td style="padding: 8px 0; color: #1d4ed8;"><a href="mailto:${sender_email}">${sender_email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Phone / Mobile:</td>
              <td style="padding: 8px 0; color: #334155;">${sender_phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Subject:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${subject || "General Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Submitted At:</td>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <div style="font-weight: 600; font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 6px;">Message Content:</div>
            <div style="white-space: pre-wrap; color: #1e293b;">${message}</div>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${sender_email}?subject=Re: ${encodeURIComponent(subject || "Your inquiry on Dhurba's Portfolio")}" style="display: inline-block; background: #1d4ed8; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 13px;">
              Reply to ${sender_name} (${sender_email})
            </a>
          </div>
        </div>
        <div style="background: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
          Delivered simultaneously to <strong>dhurba179@gmail.com</strong> &amp; <strong>sharvikatech@gmail.com</strong>
        </div>
      </div>
    `;

    // 1. Try sending via Nodemailer SMTP if configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost || "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: RECIPIENT_EMAILS.join(", "),
          replyTo: sender_email,
          subject: emailSubject,
          text: emailBody,
          html: emailHtml,
        });

        return NextResponse.json({
          success: true,
          method: "smtp",
          message: "Your message has been sent directly to dhurba179@gmail.com and sharvikatech@gmail.com!",
        });
      } catch (smtpErr) {
        console.warn("SMTP send failed, falling back to multi-provider web relays:", smtpErr);
      }
    }

    // 2. Multi-provider web relays
    const relayPromises = [
      // Primary FormSubmit to dhurba179 + CC sharvikatech
      fetch("https://formsubmit.co/ajax/dhurba179@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: sender_name,
          email: sender_email,
          phone: sender_phone || "Not provided",
          _subject: emailSubject,
          message: message,
          _replyto: sender_email,
          _cc: "sharvikatech@gmail.com",
          _template: "table",
          _captcha: "false",
        }),
      }).catch((e) => ({ ok: false, error: e })),

      // Secondary FormSubmit to sharvikatech
      fetch("https://formsubmit.co/ajax/sharvikatech@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: sender_name,
          email: sender_email,
          phone: sender_phone || "Not provided",
          _subject: `[Portfolio Inquiry] ${sender_name}: ${subject || "General Inquiry"}`,
          message: message,
          _replyto: sender_email,
          _template: "table",
          _captcha: "false",
        }),
      }).catch((e) => ({ ok: false, error: e })),
    ];

    await Promise.allSettled(relayPromises);

    return NextResponse.json({
      success: true,
      recipients: RECIPIENT_EMAILS,
      message: "Your inquiry has been successfully sent to both dhurba179@gmail.com and sharvikatech@gmail.com!",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to dispatch message. You can also contact directly via dhurba179@gmail.com or WhatsApp.",
      },
      { status: 500 }
    );
  }
}
