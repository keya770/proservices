import { NextRequest, NextResponse } from "next/server";
import { sendContactFormEmail, type ContactFormData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data: ContactFormData = {
      fullName: body.fullName || "",
      email: body.email || "",
      phone: body.phone || "",
      service: body.service || "",
      message: body.message || "",
    };

    // Validate required fields
    if (!data.fullName || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    await sendContactFormEmail(data);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

