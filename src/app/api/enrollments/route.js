import { connectToDb } from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please log in." },
        { status: 401 }
      );
    }

    const db = await connectToDb();
    const enrollmentsCol = db.collection("enrollments");
    const coursesCol = db.collection("courses");

    const enrollments = await enrollmentsCol
      .find({ userId: session.user.id })
      .toArray();

    if (enrollments.length === 0) {
      return NextResponse.json({ success: true, data: [] });
    }

    const courseIds = enrollments.map(e => e.courseId);
    const courses = await coursesCol
      .find({ id: { $in: courseIds } })
      .toArray();

    const enrolledCourses = enrollments.map(enrollment => {
      const course = courses.find(c => c.id === enrollment.courseId);
      if (!course) return null;
      return {
        ...course,
        _id: course._id.toString(),
        progress: enrollment.progress ?? 0,
        lastActive: enrollment.lastActive ?? "Just now"
      };
    }).filter(Boolean);

    return NextResponse.json({ success: true, data: enrolledCourses });
  } catch (error) {
    console.error("Failed to fetch enrollments:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
