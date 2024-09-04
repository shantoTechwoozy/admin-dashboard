import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // use to redirect on another route dynamically
  function redirectTo(path: string) {
    return NextResponse.redirect(new URL(path, request.url));
  }

  // route management for /booking-history route
  let bh = "/booking-history";
  if (pathname === bh || pathname === `${bh}/flight`) {
    return redirectTo(`${bh}/flight/on-hold`);
  } else if (pathname === `${bh}/refund`) {
    return redirectTo(`${bh}/refund/history`);
  } else if (pathname === `${bh}/reissue`) {
    return redirectTo(`${bh}/reissue/history`);
  }

  // route management for /partial-payment route
  let pp = "/partial-payment";
  if (pathname === pp) {
    return redirectTo(`${pp}/due-list`);
  }

  // route management for /passengers route
  let p = "/passengers";
  if (pathname === p) {
    return redirectTo(`${p}/add-passenger`);
  }

  // route management for /profile route
  let profile = "/profile";
  if (pathname === profile) {
    return redirectTo(`${profile}/user`);
  }

  // route management for /support route
  let s = "/support";
  if (pathname === s) {
    return redirectTo(`${s}/contact`);
  }

  // route management for /settings route
  let settings = "/settings";
  if (pathname === settings) {
    return redirectTo(`${settings}/user`);
  }
}
