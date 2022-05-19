const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "mini-full-stack"

// ----- middleware ----
app.use(express.json(), cors(), express.urlencoded({extended:true}));
// -----------------


// // database connection
require("./config/config")(DB);

// // connect the routes
require("./routes/joke.routes")(app);

app.listen(PORT, ()=> console.log(`🎈🎈 server up on port: ${PORT}`))
