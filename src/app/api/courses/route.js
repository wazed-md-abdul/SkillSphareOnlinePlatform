import { connectToDb, seedDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await seedDatabase();
    const db = await connectToDb();
    const { searchParams } = new URL(request.url);

    const q = searchParams.get("q");
    const category = searchParams.get("category");
    const level = searchParams.get("level");

    const query = {};

    if (q) {
      query.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } }
      ];
    }

    if (category && category !== "all") {
      query.category = category;
    }

    if (level && level !== "all") {
      query.level = level;
    }

    const courses = await db.collection("courses").find(query).toArray();
    const sanitizedCourses = courses.map(course => ({
      ...course,
      _id: course._id.toString()
    }));

    return NextResponse.json({ success: true, data: sanitizedCourses });
  } catch (error) {
    console.error("Failed to fetch filtered courses:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
