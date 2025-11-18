import { NextResponse } from "next/server";

export async function POST(request) {
  const { code } = await request.json();
  const expected = process.env.AUTH_PURCHASE_CODE;

  if (!expected) {
    console.error("AUTH_PURCHASE_CODE no está definido en .env.local");
  }

  if (!code || code.trim() !== expected) {
    return NextResponse.json(
      { ok: false, message: "Código incorrecto. Revisa tu correo de compra." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("course_auth", "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  return res;
}
