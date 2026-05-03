
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
 
// This function can be marked `async` if using `await` inside
export async function  proxy(request) {
const session = await auth.api.getSession(
    {
            headers: await headers()

    }
);

if (session) {
  return NextResponse.next()
}
  const callbackUrl = encodeURIComponent(request.nextUrl.pathname + request.nextUrl.search)
  return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, request.url))
}
 
 
export const config = {
  matcher: ["/profile", "/details/:Id" ],
}