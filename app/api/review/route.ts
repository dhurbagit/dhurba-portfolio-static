import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const RECIPIENT_EMAILS = ["dhurba179@gmail.com", "sharvikatech@gmail.com"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, company, service_used, rating, comment } = body;

    const emailSubject = `★ New ${rating}-Star Review from ${name}`;
    const emailBody = `
New Client Review Submitted on Portfolio:
---------------------------------------------
Reviewer: ${name}
Role / Title: ${role || "Client"}
Company: ${company || "General"}
Service Used: ${service_used || "Software Development"}
Rating: ${rating} / 5 Stars
Date: ${new Date().toLocaleString()}

Review Comment:
${comment}
---------------------------------------------
Sent to: ${RECIPIENT_EMAILS.join(" & ")}
    `.trim();

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">★ New ${rating}-Star Review Received!</h2>
          <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">From Dhurba Dhakal's Portfolio Reviews Section</p>
        </div>
        <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 120px;">Reviewer:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Rating:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #d97706;">${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5 Stars)</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Service:</td>
              <td style="padding: 8px 0; color: #334155;">${service_used || "Software Development"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Context:</td>
              <td style="padding: 8px 0; color: #334155;">${role || "Client"} (${company || "General"})</td>
            </tr>
          </table>

          <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <div style="font-weight: 600; font-size: 12px; text-transform: uppercase; color: #b45309; margin-bottom: 6px;">Feedback Comment:</div>
            <div style="white-space: pre-wrap; color: #1e293b;">${comment}</div>
          </div>
        </div>
        <div style="background: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center;">
          Delivered simultaneously to <strong>dhurba179@gmail.com</strong> &amp; <strong>sharvikatech@gmail.com</strong>
        </div>
      </div>
    `;

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
          from: `"Portfolio Reviews" <${smtpUser}>`,
          to: RECIPIENT_EMAILS.join(", "),
          subject: emailSubject,
          text: emailBody,
          html: emailHtml,
        });
      } catch (err) {
        console.warn("SMTP review alert failed:", err);
      }
    }

    return NextResponse.json({ success: true, message: "Review notification dispatched successfully." });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Error recording review" }, { status: 500 });
  }
}
