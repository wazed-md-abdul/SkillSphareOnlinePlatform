export const getAllCourses = async () => {
    const res = await fetch("https://skill-sphare-onlinelearningplatform.vercel.app/data.json");
    const data = await res.json();
    return data;

}