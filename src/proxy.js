
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
 
// This function can be marked `async` if using `await` inside
export async function  proxy(request) {
const sesssion = await auth.api.getSession(
    {
            headers: await headers()

    }
);

if (sesssion) {
  return NextResponse.next()
}
  return NextResponse.redirect(new URL('/login', request.url))
}
 
 
export const config = {
  matcher: ["/profile", "/details/:Id" ],
}