const express = require("express");
const app = express();
const PORT = 8000;
// -- MIDDLEWARE ----
app.use(express.json(), express.urlencoded({ extended: true }));
// ------------------

// require("./routes/users.routes")(app);
const routes = require("./routes/users.routes")
routes(app);
// -- ALWAYS at the end of the file
// STARTS THE SERVER
app.listen(PORT, () => {
    console.log(`🎈🎈🎈 SERVER up on port: ${PORT} and is listening for REQuests to RESpond to <<<`);
})