import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/validation";

// Basic contact endpoint that validates payloads and logs for later extension (email/CRM integrations)
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { valid, errors } = validateContactPayload(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    console.info("[contact] New enquiry", body);

    return NextResponse.json({
      success: true,
      message: "Thank you, we'll reach out shortly.",
    });
  } catch (error) {
    console.error("[contact] Error", error);
    return NextResponse.json(
      { success: false, message: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}
