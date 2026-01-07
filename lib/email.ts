import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "keyamehra770@gmail.com";

// Create transporter - using Gmail SMTP
// For production, use environment variables for credentials
const createTransporter = () => {
  // Check if SMTP credentials are provided
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error(
      "SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS environment variables. " +
      "See EMAIL_SETUP.md for instructions."
    );
  }

  // If custom SMTP host is provided, use it
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Default: Use Gmail (requires app password)
  // For Gmail, you need to:
  // 1. Enable 2-factor authentication
  // 2. Generate an app password
  // 3. Set SMTP_USER and SMTP_PASS environment variables
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ServiceEnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export async function sendContactFormEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"HCT Services Website" <${process.env.SMTP_USER || "noreply@hctservices.ae"}>`,
    to: RECIPIENT_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form Submission - ${data.service}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0f6a36 0%, #1a8a4a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0f6a36; margin-bottom: 5px; display: block; }
            .value { color: #1f2937; }
            .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">HCT Services Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${data.fullName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
              </div>
              <div class="field">
                <span class="label">Service of Interest:</span>
                <span class="value">${data.service}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; white-space: pre-wrap;">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the HCT Services contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Service of Interest: ${data.service}

Message:
${data.message}

---
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })}
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendServiceEnquiryEmail(data: ServiceEnquiryFormData): Promise<void> {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"HCT Services Website" <${process.env.SMTP_USER || "noreply@hctservices.ae"}>`,
    to: RECIPIENT_EMAIL,
    replyTo: data.email,
    subject: `New Service Enquiry - ${data.service}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0f6a36 0%, #1a8a4a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0f6a36; margin-bottom: 5px; display: block; }
            .value { color: #1f2937; }
            .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Service Enquiry</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">HCT Services Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${data.fullName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
              </div>
              <div class="field">
                <span class="label">Company / Profession:</span>
                <span class="value">${data.company || "Not provided"}</span>
              </div>
              <div class="field">
                <span class="label">Service:</span>
                <span class="value"><strong>${data.service}</strong></span>
              </div>
              <div class="field">
                <span class="label">Message / Requirements:</span>
                <div class="value" style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; white-space: pre-wrap;">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the HCT Services service enquiry form.</p>
              <p>Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Service Enquiry

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Company / Profession: ${data.company || "Not provided"}
Service: ${data.service}

Message / Requirements:
${data.message}

---
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })}
    `,
  };

  await transporter.sendMail(mailOptions);
}

