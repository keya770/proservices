import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateEnquiryPayload, type EnquiryPayload } from "@/lib/validation";

// Service-specific enquiry endpoint ready for future email/CRM integration
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as EnquiryPayload;
    const { valid, errors } = validateEnquiryPayload(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    console.info("[enquiry] New service request", body);

    return NextResponse.json({
      success: true,
      message: "Thank you, we'll reach out shortly.",
    });
  } catch (error) {
    console.error("[enquiry] Error", error);
    return NextResponse.json(
      { success: false, message: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}
