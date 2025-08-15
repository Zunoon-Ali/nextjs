// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   return NextResponse.redirect(new URL('/home', request.url));
// }

// export const config = {
//   matcher: '/about/:path*', // must match your lowercase folder
// };

import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname.toLowerCase(); // normalize case

  if (pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  if (pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.next();
}
