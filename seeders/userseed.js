import { db } from '../db/conn.js'
import User from '../models/users.js'


const users = [
    {
        name:'Nicole',
        email: 'nicole@email.com',
        favorite_destinations: 'Dominican Republic, Italy'
    },
    {
       name:'Jeff',
        email: 'jeff@email.com',
        favorite_destinations: 'Mozambique, Taiwan'
    },
     {
        name:'Dorothy',
        email: 'dorothy@email.com',
        favorite_destinations: 'Brazil, Argentina, Uruguay'
    },
]

// function is not required here, but is best practice
// MongoDB version
//  async function seedDatabase() {
//     try{
//         console.log("seeding user data");
//         const collection = await db.collection("users")
//         const resultDelete = await collection.deleteMany({})
//         const resultInsert = await collection.insertMany(users)
//         console.log(resultDelete)
//         console.log(resultInsert)
//         console.log("Complete!")
//     } catch (e) {
//         console.log(e);
//     }
//     process.exit()
// }

// seedDatabase()

// Mongoose version
 async function seedDatabase() {
    try{
        console.log("seeding user data");
        // const collection = await mongoose.connect("users")
        const resultDelete = await User.deleteMany({})
        const resultInsert = await User.insertMany(users)
        console.log(resultDelete)
        console.log(resultInsert)
        console.log("Complete!")
    } catch (e) {
        console.log(e);
    }
    process.exit()
}

seedDatabase()

export default users