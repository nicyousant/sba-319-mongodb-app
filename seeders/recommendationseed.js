import { db } from '../db/conn.js'
import Recommendations from '../models/recommendations.js'

const recommendations = [
    {
        place:'Pittsburgh, PA, USA',
        reason: 'Beautiful skyline, sports, arts',
        visit_when: 'June'
    },
    {
        place:'San Francisco, CA, USA',
        reason: 'Golden Gate Bridge, Lombard Street, Pier 39, sea lions',
        visit_when: 'August'
    },
     {
        place:'New York, NY, USA',
        reason: 'Statue of Liberty, Times Square, Metropolitan Museum of Art',
        visit_when: 'July'
    },
      {
        place:'Puerto Plata, Dominican Republic',
        reason: 'Del Oro Chocolate Factory, Brugal Rum Distillery, Teleferico Cable Car',
        visit_when: 'May'
    },
    {
        place:'San Juan, Puerto Rico',
        reason: 'El Yunque Rainforest, Luquillo Beach, Bioluminescent Bay',
        visit_when: 'May'
    },
]

// function is not required here, but is best practice
// Mongo DB version
//  async function seedDatabase() {
//     try{
//         console.log("seeding recommendations data");
//         const collection = await db.collection("recommendations")
//         const resultDelete = await collection.deleteMany({})
//         const resultInsert = await collection.insertMany(recommendations)
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
//         console.log("seeding recommendations data");
//         // const collection = await mongoose.connect("recommendations")
//         const resultDelete = await Recommendations.deleteMany({})
//         const resultInsert = await Recommendations.insertMany(recommendations)
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

 async function seedRecommendations() {
    try{
        console.log("seeding recommendations data");
        // const collection = await mongoose.connect("recommendations")
        const resultDelete = await Recommendations.deleteMany({})
        const resultInsert = await Recommendations.insertMany(recommendations)
        console.log(resultDelete)
        console.log(resultInsert)
        console.log("Recommendations successfully seeded!")
    } catch (e) {
        console.log(e);
    }
}



export { recommendations, seedRecommendations }