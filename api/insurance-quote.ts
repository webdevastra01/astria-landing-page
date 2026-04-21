import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName,
    email,
    contactNumber,
    insuranceType,
    description,
    estimatedValue,
    location,
    coverageDetails,
  } = req.body;

  // Validate required fields
  if (!fullName || !contactNumber || !insuranceType || !description || !coverageDetails) {
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

    // Format estimated value with PHP currency
    const formattedValue = estimatedValue
      ? `₱${Number(estimatedValue).toLocaleString("en-PH")}`
      : "Not provided";

    const formattedLocation = location || "Not provided";

    // 1️⃣ Email to company (insurance team)
    await transporter.sendMail({
      from: `"Astria Insurance Quotes" <${process.env.EMAIL_USER}>`,
      to: "helpdesk.astria@gmail.com", // Change to your team email
      subject: `New Insurance Quote Request: ${insuranceType}`,
      replyTo: email, // Can reply via phone or add email field if available
      html: `
        <h2>New Insurance Quote Request</h2>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Contact Number:</b> ${contactNumber}</p>
        <p><b>Insurance Type:</b> ${insuranceType}</p>
        <p><b>Estimated Value:</b> ${formattedValue}</p>
        <p><b>Location:</b> ${formattedLocation}</p>
        <p><b>Description:</b></p>
        <p>${description}</p>
        <p><b>Coverage Details:</b></p>
        <p>${coverageDetails}</p>
      `,
    });

    // 2️⃣ Confirmation email to user (branded with Astria teal #00666A)
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
        Quote request received
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 32px 28px; color: #0f172a;">

      <h2 style="margin: 0 0 12px; font-size: 18px; font-weight: 600; color: #0f172a;">
        Thank you, ${fullName} 👋
      </h2>

      <p style="margin: 0 0 20px; color: #475569; font-size: 14px; line-height: 1.6;">
        We've received your insurance quote request. Our team is reviewing your details and will contact you at <b>${contactNumber}</b> within 24 hours.
      </p>

      <!-- Quote Summary Card -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px;">

        <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #00666a; text-transform: uppercase; letter-spacing: 0.5px;">
          Quote Summary
        </h3>

        <!-- Insurance Type -->
        <div style="margin-bottom: 12px;">
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Insurance Type</p>
          <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">${insuranceType}</p>
        </div>

        <!-- Description -->
        <div style="margin-bottom: 12px;">
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Description</p>
          <p style="margin: 4px 0 0; font-size: 14px; color: #334155; line-height: 1.5;">${description}</p>
        </div>

        <!-- Coverage -->
        <div style="margin-bottom: 12px;">
          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Coverage Requested</p>
          <p style="margin: 4px 0 0; font-size: 14px; color: #334155; line-height: 1.5;">${coverageDetails}</p>
        </div>

        <!-- Grid: Value + Location -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Est. Value</p>
            <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">${formattedValue}</p>
          </div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.3px;">Location</p>
            <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">${formattedLocation}</p>
          </div>
        </div>

      </div>

      <!-- Next Steps -->
      <div style="background: rgba(0, 102, 106, 0.06); border-left: 4px solid #00666a; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 500;">
          What's next?
        </p>
        <p style="margin: 8px 0 0; font-size: 13px; color: #475569; line-height: 1.6;">
          Our insurance specialists will analyze your requirements and prepare a customized quotation. You'll receive a detailed proposal via call or SMS.
        </p>
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

      <!-- Footer Note -->
      <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
        Need immediate assistance? Reply to this email or call our hotline.
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
    await transporter.sendMail({
      from: `"Astria Team" <${process.env.EMAIL_USER}>`,
      to: email, // Add email field to modal first
      subject: "We received your insurance quote request",
      html: confirmationHtml,
    });

    res.json({ success: true, message: "Quote request submitted successfully" });
  } catch (err) {
    console.error("Insurance quote email error:", err);
    res.status(500).json({ error: "Failed to process quote request" });
  }
}