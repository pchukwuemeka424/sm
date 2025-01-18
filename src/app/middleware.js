import { NextResponse } from "next/server";
import { decrypt } from "@/utils/session";

export async function middleware(req) {
  const session = req.cookies.get("session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = await decrypt(session);

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/users/:path*"], // Apply middleware to specific routes
};
