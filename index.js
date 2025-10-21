
import express from 'express'
import "dotenv/config";
import { db, port } from './db/conn.js'
import mongoose from 'mongoose'

// In Mongoose, the name of the database you want to connect with goes before the ? in the query string
// for example: /food? 

// allows other HTTP methods besides GET and POST on an HTML form
import methodOverride from 'method-override';


console.log("Hey Mongoose!")

const app = express()

import userroute from './routes/usersroute.js'
import destroute from './routes/destroute.js'
import recsroute from './routes/recsroute.js'

// enables our EJS view engine 
app.set('view engine', 'ejs')

// serves static files from the public folder to the client (like css, images, etc.)
app.use(express.static('public'))
// formats data sent from client through something like an HTML form
app.use(express.urlencoded())
// formats data sent from client by other means (Postman, ThunderClient, fetch, etc.)
app.use(express.json())
// the '_method' represents the query string used in the request url (ex: ?_method=PUT)
app.use(methodOverride('_method'))

app.use("/users", userroute)
app.use("/destinations", destroute)
app.use("/recommendations", recsroute)


app.get("/", (req, res) => {
    res.redirect("/users")
})


// app.get('/', (req,res) => {
//     res.send('<h1>Good morning, Nicole!</h1> <h2>Pay attention!</h2><h3>Are you still there?</h3>')
// })

// app.use("/grades", grades);
// app.use("/grades", grades_agg);

// Global error handling
app.use((err, req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(port, () => {
    console.log(`Awake on port: ${port}`)
})