import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("jwtToken")?.value;

  const protectedPaths = ["/profile"];

  // Jika URL termasuk dalam protectedPaths, lakukan pengecekan token
  if (protectedPaths.includes(pathname)) {
    // Jika token tidak ada, arahkan ke halaman login
    if (!token) {
      const loginUrl = new URL("/login", req.url); // Redirect ke halaman login
      loginUrl.searchParams.set("redirect", encodeURIComponent(req.nextUrl.pathname)); // Simpan tujuan redirect ke URL (jika menggunakan decoded pada redirect login juga harus di decoded url komponennya)
      
      return NextResponse.redirect(loginUrl); // Redirect ke halaman login
    }

    // Jika token ada, lakukan validasi
    try {
      const { payload } = await jwtVerify(token, secret);
      console.log("Token valid:", payload);
      return NextResponse.next(); // Melanjutkan permintaan (akses halaman)
    } catch (error) {
      console.error("Token invalid:", error);
      // Jika token invalid, arahkan ke halaman login lagi
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl); // Redirect ke halaman login
    }
  }

  return NextResponse.next(); // Melanjutkan permintaan untuk halaman lain yang tidak dilindungi
}

export const config = {
  matcher: ["/profile"], // Middleware hanya akan aktif untuk halaman /profile
};
