import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const companyInfo = company ? `<p><b>Company:</b> ${company}</p>` : "";

    // 1️⃣ Email to company (helpdesk)
    await transporter.sendMail({
      from: `"Astria Contact Form" <${process.env.EMAIL_USER}>`,
      to: "helpdesk.astria@gmail.com",
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        ${companyInfo}
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Confirmation email to user (Astria teal branded)
    const confirmationHtml = `
<div style="font-family: Inter, system-ui, -apple-system, sans-serif; background: #f1f5f9; padding: 40px 16px;">

  <!-- Container -->
  <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 102, 106, 0.08);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #00666a, #008f94); padding: 32px 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">
        ASTRIA INSURANCE
      </h1>
      <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">
        Message received
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 32px 28px; color: #0f172a;">

      <h2 style="margin: 0 0 12px; font-size: 18px; font-weight: 600; color: #0f172a;">
        Thank you, ${name} 👋
      </h2>

      <p style="margin: 0 0 20px; color: #475569; font-size: 14px; line-height: 1.6;">
        We've received your message and will get back to you at <b>${email}</b> within 24 hours.
      </p>

      <!-- Message Summary Card -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px;">

        <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #00666a; text-transform: uppercase; letter-spacing: 0.5px;">
          Your Message
        </h3>

        <!-- Name -->
        <div style="margin-bottom: 12px;">
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Name</p>
          <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">${name}</p>
        </div>

        <!-- Email -->
        <div style="margin-bottom: 12px;">
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Email</p>
          <p style="margin: 4px 0 0; font-size: 14px; color: #334155;">${email}</p>
        </div>

        ${company ? `
        <!-- Company -->
        <div style="margin-bottom: 12px;">
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Company</p>
          <p style="margin: 4px 0 0; font-size: 14px; color: #334155;">${company}</p>
        </div>
        ` : ""}

        <!-- Message -->
        <div>
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Message</p>
          <p style="margin: 4px 0 0; font-size: 14px; color: #334155; line-height: 1.5;">${message}</p>
        </div>

      </div>

      <!-- Next Steps -->
      <div style="background: rgba(0, 102, 106, 0.06); border-left: 4px solid #00666a; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 500;">
          What's next?
        </p>
        <p style="margin: 8px 0 0; font-size: 13px; color: #475569; line-height: 1.6;">
          Our protection advisors will review your inquiry and reach out with personalized recommendations for your insurance needs.
        </p>
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

      <!-- Footer Note -->
      <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
        Need immediate assistance? Call us at <b>0912 967 6049</b> or reply to this email.
      </p>

      <p style="margin: 16px 0 0; font-size: 14px; font-weight: 600; color: #00666a;">
        — The Astria Team
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #0f172a; padding: 20px; text-align: center;">
      <p style="margin: 0; font-size: 12px; color: #94a3b8;">
        © ${new Date().getFullYear()} Astria Insurance Solutions. All rights reserved.
      </p>
      <p style="margin: 4px 0 0; font-size: 11px; color: #64748b;">
        This is an automated confirmation. Please do not reply directly.
      </p>
    </div>

  </div>
</div>
`;

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Astria Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: confirmationHtml,
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact form email error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
}