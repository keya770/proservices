import { NextRequest, NextResponse } from "next/server";
import { sendServiceEnquiryEmail, type ServiceEnquiryFormData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data: ServiceEnquiryFormData = {
      fullName: body.fullName || "",
      email: body.email || "",
      phone: body.phone || "",
      company: body.company || "",
      service: body.service || "",
      message: body.message || "",
    };

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    await sendServiceEnquiryEmail(data);

    return NextResponse.json(
      { success: true, message: "Service enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Service enquiry form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

