import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    if (!isNonEmpty(body.name) || !isNonEmpty(body.email) || !isNonEmpty(body.message)) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO ?? "tietexit@gmail.com";
    const from = process.env.CONTACT_FROM ?? smtpUser;

    const lines = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      body.company ? `Company: ${body.company}` : null,
      body.phone ? `Phone: ${body.phone}` : null,
      body.service ? `Service: ${body.service}` : null,
      body.budget ? `Budget: ${body.budget}` : null,
      "",
      "Message:",
      body.message,
    ].filter(Boolean);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: body.email,
      subject: `New contact message from ${body.name}`,
      text: lines.join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
