import { NextResponse } from "next/server";

import { company } from "@/lib/company";

const recipientEmail = process.env.CONTACT_TO_EMAIL ?? company.email;
const senderEmail =
  process.env.CONTACT_FROM_EMAIL ?? "LBL Bau Website <onboarding@resend.dev>";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = normalize(formData.get("name"));
  const contact = normalize(formData.get("contact"));
  const projectType = normalize(formData.get("projectType"));
  const message = normalize(formData.get("message"));

  if (!name || !contact || !message) {
    return NextResponse.json(
      { message: "Bitte füllen Sie Name, Kontakt und Nachricht aus." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        message:
          "Der Mailversand ist noch nicht konfiguriert. Bitte RESEND_API_KEY in Vercel hinterlegen oder kurz telefonisch melden.",
      },
      { status: 503 },
    );
  }

  const subject = `Neue LBL Bau Anfrage von ${name}`;
  const text = [
    "Neue Anfrage über die LBL Bau Website",
    "",
    `Name: ${name}`,
    `Kontakt: ${contact}`,
    `Projektart: ${projectType || "Nicht angegeben"}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: senderEmail,
      to: [recipientEmail],
      reply_to: contact.includes("@") ? contact : undefined,
      subject,
      text,
      html: renderEmail({ name, contact, projectType, message }),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message:
          "Die Anfrage konnte gerade nicht per E-Mail gesendet werden. Bitte versuchen Sie es später erneut oder rufen Sie direkt an.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Danke. Ihre Anfrage wurde erfolgreich gesendet.",
  });
}

function normalize(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 3000);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderEmail({
  name,
  contact,
  projectType,
  message,
}: {
  name: string;
  contact: string;
  projectType: string;
  message: string;
}) {
  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
      <h2 style="margin:0 0 16px;color:#e30613">Neue LBL Bau Anfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Kontakt:</strong> ${escapeHtml(contact)}</p>
      <p><strong>Projektart:</strong> ${escapeHtml(projectType || "Nicht angegeben")}</p>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;
}
