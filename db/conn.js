import mongoose from "mongoose";
import "dotenv/config";

const port = process.env.PORT || 5080
const connectionString = process.env.ATLAS_URI

const db = await mongoose.connect(connectionString);

export { db, port}