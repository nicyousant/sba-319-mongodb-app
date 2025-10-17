import mongoose from "mongoose";

// template for document
const recommendationSchema = new mongoose.Schema({
    place: { 
        type: String,
        required: true 
    },
     reason: { 
        type: String,
        required: true 
    },
    visit_when: { 
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
})

// capitalize Fruit because it behaves like a class
// "fruit" is the name of the model. It can be anything. 
// If you don't give it a collection name, it will create a new collection.
// "fruits" is the collection name
const Recommendations = mongoose.model("recommendation", recommendationSchema, "recommendations")

export default Recommendations;