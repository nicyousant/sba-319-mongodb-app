
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


// app.get("/", (req, res) => {
//     res.redirect("/users")
// })


app.get('/', (req,res) => {
    //  res.send(`<body style="background: url('globe.jpg')";><h1>Good morning, Nicole!</h1> <h2>Pay attention!</h2><h3>Are you still there?</h3></body>`)
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/script.js" defer></script>
</head>
<body><header>
  <ul class="navbar">
    <li class="nav"><a href="/">Home</a></li>
    <li class="nav"><a href="/destinations">Destinations</a></li>
    <li class="nav"><a href="/recommendations">Recommendations</a></li>
    <li class="nav"><a href="/users">Users</a></li>
  </ul>
  <!-- <hr> -->
</header>
<div class="content">
<div>
<h1>Our Travel Diary</h1>
<h2>Join us for our journey around the world!</h2>
<p>Share the places you've already visited and recommend places for others to visit.</p>
</div>
<div>
<img src="plane-wing.jpg" class="plane">
</div>
</div>
</body>
</html>`)
 })



// Global error handling
app.use((err, req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(port, () => {
    console.log(`Awake on port: ${port}`)
})