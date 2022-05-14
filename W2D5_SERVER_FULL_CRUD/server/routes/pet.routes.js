// import the controller to use the instantiated model
const PetController = require("../controllers/pet.controllers")
console.log(PetController);

module.exports = (app) => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets", PetController.createNewPet);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.delete("/api/pets/:id", PetController.deleteAnExistingPet)
    app.put("/api/pets/:id", PetController.updateExistingPet)
}