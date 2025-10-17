import mongoose from "mongoose";
import "dotenv/config";

const port = process.env.PORT
const connectionString = process.env.ATLAS_URI

const db = await mongoose.connect(connectionString);

export { db, port}