import mongoose from "mongoose";

// template for document
const destinationSchema = new mongoose.Schema({
    city: { 
        type: String,
        required: true 
    },
    country: { 
        type: String,
        required: true
    },
    year_visited: {
        type: Number,
        required: true
    },
    highlights: {
        type: String
    }, 
    foods: {
        type: String
    }
})

// capitalize Fruit because it behaves like a class
// "fruit" is the name of the model. It can be anything. 
// If you don't give it a collection name, it will create a new collection.
// "fruits" is the collection name
const Destination = mongoose.model("destination", destinationSchema, "destinations")

export default Destination;