// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a {PATH}!"],
        minlength: [3, "{PATH} must have at least 3 chars, you gave {VALUE}"]
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [2, "pet is not old enough "]
    },
    color: {
        type: String
    },
}, {timestamps: true})

// the model - this is what we use to make the actual queries to the DB
const Pet = mongoose.model('Pet', PetSchema);

// export the model
module.exports = Pet;