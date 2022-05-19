// CRUD
// controller makes a query to the DB using the MODEL
const Joke = require("../models/joke.model")

module.exports = {

    // findAll : (req, res) => {
    //     res.json({message: "hello"})
    // }

    // READ ALL
    findAll: (req, res) => {
        Joke.find()
            .then(allDaJokes => {
                console.log(allDaJokes);
                return res.json(allDaJokes)
            })
            .catch(err => console.log(err))
    },

    // CREATE
    create: (req, res) => {
        console.log(req.body);
        Joke.create(req.body)
            .then(newJoke => {
                return res.json(newJoke)
            })
            .catch(err => {
                console.log(err);
                // VERY IMPORTANT for react to trigger its .catch()
                return res.status(400).json(err)
            })
    }
    



}