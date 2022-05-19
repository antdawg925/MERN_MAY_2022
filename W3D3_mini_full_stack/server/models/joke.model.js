const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "must have a {PATH}"],
        minlength: 3
    },
    punchline: {
        type: String,
        required: [true, "must have a {PATH}"]
    }
}, {timestamps: true})

// create the schema and export it 
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;