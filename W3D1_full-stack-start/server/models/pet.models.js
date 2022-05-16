// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const PetSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    color: String
}, {timestamps: true})

// the model - this is what we use to make the actual queries to the DB
const Pet = mongoose.model('Pet', PetSchema);

// export the model
module.exports = Pet;