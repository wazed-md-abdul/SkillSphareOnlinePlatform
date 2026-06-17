import { connectToDb } from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
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

    const { courseId } = await request.json();
    if (!courseId) {
      return NextResponse.json(
        { success: false, error: "Course ID is required." },
        { status: 400 }
      );
    }

    const db = await connectToDb();
    const enrollmentsCol = db.collection("enrollments");

    // Check if already enrolled
    const existingEnrollment = await enrollmentsCol.findOne({
      userId: session.user.id,
      courseId: courseId
    });

    if (existingEnrollment) {
      return NextResponse.json({
        success: true,
        message: "Already enrolled in this course.",
        data: existingEnrollment
      });
    }

    const newEnrollment = {
      userId: session.user.id,
      courseId: courseId,
      progress: 0,
      lastActive: "Just now",
      enrolledAt: new Date()
    };

    const result = await enrollmentsCol.insertOne(newEnrollment);

    return NextResponse.json({
      success: true,
      message: "Successfully enrolled in course.",
      data: { ...newEnrollment, _id: result.insertedId.toString() }
    });
  } catch (error) {
    console.error("Failed to enroll in course:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
