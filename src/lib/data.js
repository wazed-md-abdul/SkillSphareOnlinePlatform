const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://skillsphereonlinelearningplatform-s.vercel.app";

export const getAllCourses = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/courses`, { cache: 'no-store' });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch courses from backend:", err);
    return { data: [] };
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/blogs`, { cache: 'no-store' });
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error("Failed to fetch blogs from backend:", err);
    return [];
  }
};