import mongoose from "mongoose";

// template for document
const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
     email: { 
        type: String,
        required: true 
    },
    favorite_destinations: { 
        type: String,
    },
    wishlist: {
        type: String,
    },
})

// capitalize Fruit because it behaves like a class
// "fruit" is the name of the model. It can be anything. 
// If you don't give it a collection name, it will create a new collection.
// "fruits" is the collection name
const User = mongoose.model("user", userSchema, "users")

export default User;