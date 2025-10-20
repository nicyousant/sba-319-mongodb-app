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
        visit_when: 'June'
    },
     {
        place:'New York, NY, USA',
        reason: 'Statue of Liberty, Times Square, Metropolitan Museum of Art',
        visit_when: 'June'
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
 async function seedDatabase() {
    try{
        console.log("seeding recommendations data");
        // const collection = await mongoose.connect("recommendations")
        const resultDelete = await Recommendations.deleteMany({})
        const resultInsert = await Recommendations.insertMany(recommendations)
        console.log(resultDelete)
        console.log(resultInsert)
        console.log("Complete!")
    } catch (e) {
        console.log(e);
    }
    process.exit()
}

seedDatabase()

export default recommendations