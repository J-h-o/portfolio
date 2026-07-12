import { NextResponse } from "next/server";
import { createMailtoUrl, sendContactEmail, validateContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "The request was not valid JSON." }, { status: 400 });
  }

  const payload = validateContactPayload(body);
  if (!payload) {
    return NextResponse.json({ message: "Please complete every required field and include at least 20 characters in the brief." }, { status: 422 });
  }

  if (payload.company) {
    return NextResponse.json({ message: "Thanks — your brief has been received." });
  }

  try {
    const result = await sendContactEmail(payload);
    if (result.delivered) return NextResponse.json({ message: "Thanks — your brief has been sent." });
    return NextResponse.json(
      { message: "Direct delivery is not configured yet. Continue in your email app.", mailtoUrl: createMailtoUrl(payload) },
      { status: 503 },
    );
  } catch {
    return NextResponse.json(
      { message: "Direct delivery is temporarily unavailable. Continue in your email app.", mailtoUrl: createMailtoUrl(payload) },
      { status: 502 },
    );
  }
}
