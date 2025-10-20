
import express from 'express'
import "dotenv/config";
import { db, port } from './db/conn.js'
import mongoose from 'mongoose'

// In Mongoose, the name of the database you want to connect with goes before the ? in the query string
// for example: /food? 




console.log("Hey Mongoose!")

const app = express()

app.use(express.json());


app.get('/', (req,res) => {
    res.send('<h1>Good morning, Nicole!</h1> <h2>Pay attention!</h2><h3>Are you still there?</h3>')
})

// app.use("/grades", grades);
// app.use("/grades", grades_agg);

// Global error handling
app.use((err, req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(port, () => {
    console.log(`Awake on port: ${port}`)
})