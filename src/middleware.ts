import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  const token = request.cookies.get("auth")?.value;

  // use to redirect on another route dynamically
  function redirectTo(path: string) {
    return NextResponse.redirect(new URL(path, request.url));
  }

  // let se = "/search-engine";
  // if (pathname === se) {
  //   return redirectTo(`${se}?tab=one-way`);
  // }

  let bh = "/booking-history";
  if (pathname === bh || pathname === `${bh}/flight`) {
    return redirectTo(`${bh}/flight/on-hold`);
  } else if (pathname === `${bh}/refund`) {
    return redirectTo(`${bh}/refund/history`);
  } else if (pathname === `${bh}/reissue`) {
    return redirectTo(`${bh}/reissue/history`);
  }

  // route management for /partial-payment route
  let pp = "/partial-payments";
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

  return response;
}

// export const config = {
//   matcher: "/",
// };
