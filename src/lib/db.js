import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI not found in env variables.");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDb() {
  const connClient = await clientPromise;
  return connClient.db("SkillSphare");
}

export async function seedDatabase() {
  try {
    const db = await connectToDb();
    const coursesCollection = db.collection("courses");
    const blogsCollection = db.collection("blogs");

    const courseCount = await coursesCollection.countDocuments();
    const blogCount = await blogsCollection.countDocuments();

    if (courseCount === 0 || blogCount === 0) {
      const dataPath = path.join(process.cwd(), "public", "data.json");
      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, "utf-8");
        const jsonData = JSON.parse(fileContent);

        if (courseCount === 0 && jsonData.data && jsonData.data.length > 0) {
          await coursesCollection.insertMany(jsonData.data);
          console.log("Seeded courses collection successfully.");
        }

        if (blogCount === 0 && jsonData.blogs && jsonData.blogs.length > 0) {
          await blogsCollection.insertMany(jsonData.blogs);
          console.log("Seeded blogs collection successfully.");
        }
      }
    }
  } catch (error) {
    console.error("Database seeding failed:", error);
  }
}
