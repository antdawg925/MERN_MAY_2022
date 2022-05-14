// --- CONTROLLER --- is all CRUD
// making queries to the DB
// using the model
// so we import then model 
const Pet = require("../models/pet.models")

// make all the CRUD!!!
// READ ALL
module.exports.findAllPets = (req, res) => {
    //use the model to execute a query
    Pet.find()
        .then( allDaPets => {
            console.log(allDaPets);
        // IMPORTANT what we return here is what we will receive in REACT!
            // res.json({everything: allDaPets});
            res.json({ message: 'ok', allDaPets: allDaPets });
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

// CREATE
module.exports.createNewPet = (req, res) => {
    // db.pets.insert({ name: 'little jerry', species: 'rooster', age: 20, color: 'red' })
    console.log(req.body);
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// READ ONE
module.exports.findOnePet = (req, res) => {
    // /api/pets/:id
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// DELETE
module.exports.deleteAnExistingPet = (req, res) => {
    console.log(req.params);
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// UPDATE
module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
