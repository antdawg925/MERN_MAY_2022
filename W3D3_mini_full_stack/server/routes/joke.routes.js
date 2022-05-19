// import Controller
const JokeController = require("../controllers/controller")

module.exports = (app) => {
    // app.get("/api/hello", JokeController.findAll)
    app.get("/api/jokes", JokeController.findAll)
    app.post("/api/jokes/new", JokeController.create)
}