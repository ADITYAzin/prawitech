import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request) {
  const { user, supabaseResponse } = await updateSession(request);

  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPath = request.nextUrl.pathname === "/admin/login";

  if (isAdminPath && !isLoginPath && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return Response.redirect(url);
  }

  if (isAdminPath) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
