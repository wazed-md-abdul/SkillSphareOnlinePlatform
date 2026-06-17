import { connectToDb, seedDatabase } from "./db";

export const getAllCourses = async () => {
  await seedDatabase();
  const db = await connectToDb();
  const courses = await db.collection("courses").find({}).toArray();
  // Map _id to string or omit to avoid Next.js server-to-client component serialization warning
  const sanitizedCourses = courses.map(course => ({
    ...course,
    _id: course._id.toString()
  }));
  return { data: sanitizedCourses };
};

export const getAllBlogs = async () => {
  await seedDatabase();
  const db = await connectToDb();
  const blogs = await db.collection("blogs").find({}).toArray();
  const sanitizedBlogs = blogs.map(blog => ({
    ...blog,
    _id: blog._id.toString()
  }));
  return sanitizedBlogs;
};