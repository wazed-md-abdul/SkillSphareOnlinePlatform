export const getAllCourses = async () => {
    const res = await fetch("https://skill-sphare-online-platform.vercel.app/data.json");
    const data = await res.json();
    return data;

}