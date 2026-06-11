import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request) {
  const { user, supabaseResponse } = await updateSession(request);

  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPath = request.nextUrl.pathname === "/admin/login";

<<<<<<< HEAD
  // If trying to access admin and not logged in, redirect to login
  if (isAdminPath && !isLoginPath && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  // If logged in and trying to access login page, redirect to dashboard
  if (user && isLoginPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  // Add x-pathname header for layout detection if needed
=======
  if (isAdminPath && !isLoginPath && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return Response.redirect(url);
  }

>>>>>>> 80c09d863db0c550f1b3cde1f6d1420e8836be8b
  if (isAdminPath) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

<<<<<<< HEAD
    // Merge supabase cookies into the next response
    const nextResponse = NextResponse.next({
      request: { headers: requestHeaders },
    });
    
    // Copy cookies from supabaseResponse to nextResponse
    supabaseResponse.cookies.getAll().forEach(cookie => {
      nextResponse.cookies.set(cookie.name, cookie.value);
    });

    return nextResponse;
=======
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
>>>>>>> 80c09d863db0c550f1b3cde1f6d1420e8836be8b
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
<<<<<<< HEAD
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (svg, png, jpg, etc)
     */
=======
>>>>>>> 80c09d863db0c550f1b3cde1f6d1420e8836be8b
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
