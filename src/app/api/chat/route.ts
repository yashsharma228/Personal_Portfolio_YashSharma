import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  let body: { name?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 100);
  const message = (body.message ?? "").trim().slice(0, 2000);

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL ?? user;

  if (!user || !pass || !to) {
    // Env vars not configured — still return success so the UI works in dev
    console.warn("[chat] SMTP env vars not set. Email not sent.");
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Chat" <${user}>`,
      to,
      subject: `New message from ${name || "a visitor"} via Portfolio Chat`,
      text: `Name: ${name || "Anonymous"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:monospace;background:#1e1e2e;color:#cdd6f4;padding:24px;border-radius:8px;max-width:600px">
          <h2 style="color:#89b4fa;margin:0 0 16px">📬 New Portfolio Chat Message</h2>
          <p style="margin:0 0 8px"><strong style="color:#a6e3a1">From:</strong> ${name || "Anonymous"}</p>
          <hr style="border:1px solid #313244;margin:12px 0"/>
          <p style="white-space:pre-wrap;margin:0">${message}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[chat] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
