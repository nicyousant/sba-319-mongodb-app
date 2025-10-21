import mongoose from "mongoose";
import { db } from '../db/conn.js'


import { recommendations } from '../seeders/recommendationseed.js'
import Recommendations from "../models/recommendations.js";

async function displayListOfRecsPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const recommendations = await Recommendations.find({}) //.toArray()
        res.render('recommendations/index', { recommendations })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

function displayAddRecsPage(req, res) {
    try {
        res.render('recommendations/new')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayRecDetailsPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const recommendation = await Recommendations.findById( req.params.id )
        res.render('recommendations/show', { recommendation })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayEditRecPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const recommendation = await Recommendations.findById(req.params.id)
        res.render('recommendations/edit', { recommendation })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function addRec(req, res) {
    try {
        // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        // const collection = await db.collection("vegetables")
        await Recommendations.create(req.body)
        res.redirect('/recommendations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function updateRec(req, res) {
    try {
        console.log('PUT')
        console.log(req.body)
        // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        // const collection = await db.collection("vegetables")
        const result = await Recommendations.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(result)
        res.redirect('/recommendations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function deleteRec(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const result = await Recommendations.findByIdAndDelete(req.params.id)
        console.log(result)
        res.redirect('/recommendations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function resetRecData(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const resultDelete = await Recommendations.deleteMany({})
        const resultInsert = await Recommendations.insertMany(recommendations)
        console.log({ ...resultDelete, ...resultInsert })
        res.redirect('/recommendations')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

// renaming the functions in the export
export default {
    index: displayListOfRecsPage,
    new: displayAddRecsPage,
    edit: displayEditRecPage,
    show: displayRecDetailsPage,
    create: addRec,
    update: updateRec,
    delete: deleteRec,
    seed: resetRecData,
}