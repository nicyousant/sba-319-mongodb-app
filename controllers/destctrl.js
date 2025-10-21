import mongoose from "mongoose";
import { db } from '../db/conn.js'


import { destinations } from '../seeders/destinationseed.js'
import Destinations from '../models/destinations.js'

async function displayListOfDestsPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const destinations = await Destinations.find({}) //.toArray()
        res.render('destinations/index', { destinations })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

function displayAddDestPage(req, res) {
    try {
        res.render('destinations/new')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayDestDetailsPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const destination = await Destinations.findById( req.params.id )
        res.render('destinations/show', { destination })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayEditDestPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const destination = await Destinations.findById(req.params.id )
        res.render('destinations/edit', { destination })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function addDest(req, res) {
    try {
        // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        // const collection = await db.collection("vegetables")
        await Destinations.create(req.body)
        res.redirect('/destinations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function updateDest(req, res) {
    try {
        console.log('PUT')
        console.log(req.body)
        // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        // const collection = await db.collection("vegetables")
        const result = await Destinations.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(result)
        res.redirect('/destinations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function deleteDest(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const result = await Destinations.findByIdAndDelete(req.params.id)
        console.log(result)
        res.redirect('/destinations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function resetDestData(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const resultDelete = await Destinations.deleteMany({})
        const resultInsert = await Destinations.insertMany(destinations)
        console.log({ ...resultDelete, ...resultInsert })
        res.redirect('/destinations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

// renaming the functions in the export
export default {
    index: displayListOfDestsPage,
    new: displayAddDestPage,
    edit: displayEditDestPage,
    show: displayDestDetailsPage,
    create: addDest,
    update: updateDest,
    delete: deleteDest,
    seed: resetDestData,
}