import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  website?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimit = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (isNonEmpty(body.website)) {
      return Response.json({ ok: true });
    }

    if (
      !isNonEmpty(body.name) ||
      !isNonEmpty(body.email) ||
      !isNonEmpty(body.message)
    ) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (
      body.name.length > MAX_NAME ||
      body.email.length > MAX_EMAIL ||
      body.message.length > MAX_MESSAGE
    ) {
      return Response.json(
        { error: "Message too long. Please shorten and try again." },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpService = process.env.SMTP_SERVICE;

    if ((!smtpHost || !smtpPort) && !smtpService) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }
    if (!smtpUser || !smtpPass) {
      return Response.json(
        { error: "Email service credentials are missing." },
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

    const transporter = smtpService
      ? nodemailer.createTransport({
          service: smtpService,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })
      : nodemailer.createTransport({
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
