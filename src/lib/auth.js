import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("SkillSphare");

export const auth = betterAuth({
     emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client
  }),
});