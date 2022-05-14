const express = require('express');
const app = express();
const PORT = 8000;
const DB_NAME = "the_real_friday_db"
// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({extended:true}));
// ------------------

// connect to the mongodb with the server - by requiring the file here
require("./config/mongoose.config"); //platform way
// require("./config/mongoose.config")(DB_NAME);
const exportedDBFunction = require("./config/mongoose.config")
exportedDBFunction(DB_NAME);

// ----- import the routes here (AFTER THE DB has connected)
const routesFunction = require("./routes/pet.routes")
routesFunction(app);

// START THE SERVER
// ALWAYS AT THE END
app.listen(PORT, () => console.log(`>>> server up on port: ${PORT} <<<`))

