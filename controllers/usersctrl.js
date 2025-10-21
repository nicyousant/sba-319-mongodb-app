import mongoose from "mongoose";
import { db } from '../db/conn.js'


import { users } from '../seeders/userseed.js'
import User from '../models/users.js'

async function displayListOfUsersPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const users = await User.find({}) //.toArray()
        res.render('users/index', { users })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

function displayAddUserPage(req, res) {
    try {
        res.render('users/new')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayUserDetailsPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const user = await User.findById(req.params.id)
        res.render('users/show', { user })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayEditUserPage(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const user = await User.findById(req.params.id)
        res.render('users/edit', { user })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function addUser(req, res) {
    try {
        // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        // const collection = await db.collection("vegetables")
        await User.create(req.body)
        res.redirect('/users')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function updateUser(req, res) {
    try {
        console.log('PUT')
        console.log(req.body)
        // req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        // const collection = await db.collection("vegetables")
        const result = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(result)
        res.redirect('/users')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function deleteUser(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const result = await User.findByIdAndDelete(req.params.id)
        console.log(result)
        res.redirect('/users')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function resetUserData(req, res) {
    try {
        // const collection = await db.collection("vegetables")
        const resultDelete = await User.deleteMany({})
        const resultInsert = await User.insertMany(users)
        console.log({ ...resultDelete, ...resultInsert })
        res.redirect('/users')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

// renaming the functions in the export
export default {
    index: displayListOfUsersPage,
    new: displayAddUserPage,
    edit: displayEditUserPage,
    show: displayUserDetailsPage,
    create: addUser,
    update: updateUser,
    delete: deleteUser,
    seed: resetUserData,
}