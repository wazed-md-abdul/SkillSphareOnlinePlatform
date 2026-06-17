import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://skillsphereonlinelearningplatform-s.vercel.app";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session || !session.user || !session.session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please log in." },
        { status: 401 }
      );
    }

    const res = await fetch(`${backendUrl}/api/enrollments`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${session.session.token}`
      },
      cache: 'no-store'
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to proxy fetch enrollments:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
