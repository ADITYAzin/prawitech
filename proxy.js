import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request) {
  const { user, supabaseResponse } = await updateSession(request);

  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPath = request.nextUrl.pathname === "/admin/login";

  // 1. Kalau belum login tapi maksa masuk ke /admin -> Tendang ke login
  if (isAdminPath && !isLoginPath && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  // 🛡️ 2. SISTEM WHITELIST (PROTEKSI SUPER KETAT)
  // Hapus tanda komentar (/* ... */) di bawah dan masukin email lu, email founder lu, dll.
  /*
  const allowedEmails = ["email_lu@gmail.com", "email_founder@gmail.com"];
  
  if (isAdminPath && user && !allowedEmails.includes(user.email)) {
    // Kalau ada orang random berhasil login Google, tapi emailnya ga terdaftar di atas:
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("error", "unauthorized"); // Kasih pesan error
    return NextResponse.redirect(url);
  }
  */

  // 3. Kalau udah login dan nyoba buka halaman login -> Arahin ke dashboard
  if (user && isLoginPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  // 4. Setup header & sinkronisasi cookies bawaan lu
  if (isAdminPath) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    // Bawa cookies dari supabaseResponse ke nextResponse
    const nextResponse = NextResponse.next({
      request: { headers: requestHeaders },
    });
    
    supabaseResponse.cookies.getAll().forEach(cookie => {
      nextResponse.cookies.set(cookie.name, cookie.value);
    });

    return nextResponse;
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (svg, png, jpg, etc)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};