import { db } from "../db/conn.js";
import { seedUsers } from "./userseed.js";
import { seedDestinations } from "./destinationseed.js";
import { seedRecommendations } from "./recommendationseed.js";

async function runAllSeeds() {
  try {
    console.log("Seeding database");
    await seedUsers();
    await seedDestinations();
    await seedRecommendations();
    console.log("All seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await db.connection.close();
    console.log("MongoDB connection closed.");
  }
}

runAllSeeds();