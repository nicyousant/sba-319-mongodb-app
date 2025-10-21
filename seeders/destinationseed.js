import { db } from '../db/conn.js'
import Destination from '../models/destinations.js';

const destinations = [
    {
        city:'Buenos Aires',
        country: 'Argentina',
        year_visited: 1990
    },
    {
       city:'Rio de Janeiro',
        country: 'Brazil',
        year_visited: 1990
    },
     {
        city:'Sao Paolo',
        country: 'Brazil',
        year_visited: 1990
    },
         {
        city:'Moscow',
        country: 'Russia',
        year_visited: 1993
    },
         {
        city:'Prague',
        country: 'Czech Republic',
        year_visited: 1993
    },
         {
        city:'Vienna',
        country: 'Austria',
        year_visited: 1993
    },
]

// function is not required here, but is best practice
// MongoDB version
//  async function seedDatabase() {
//     try{
//         console.log("seeding destination data");
//         const collection = await db.collection("destinations")
//         const resultDelete = await collection.deleteMany({})
//         const resultInsert = await collection.insertMany(destinations)
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
//  async function seedDatabase() {
//     try{
//         console.log("seeding destination data");
//         // const collection = await mongoose.connect("destinations")
//         const resultDelete = await Destination.deleteMany({})
//         const resultInsert = await Destination.insertMany(destinations)
//         console.log(resultDelete)
//         console.log(resultInsert)
//         console.log("Complete!")
//     } catch (e) {
//         console.log(e);
//     } finally {
//     await db.connection.close(); // Close connection after finishing
//     // process.exit();
//   }
// }

// seedDatabase()

 async function seedDestinations() {
    try{
        console.log("seeding destination data");
        // const collection = await mongoose.connect("destinations")
        const resultDelete = await Destination.deleteMany({})
        const resultInsert = await Destination.insertMany(destinations)
        console.log(resultDelete)
        console.log(resultInsert)
        console.log("Destinations successfully seeded!")
    } catch (e) {
        console.log(e);
    } 
}



export { destinations, seedDestinations }