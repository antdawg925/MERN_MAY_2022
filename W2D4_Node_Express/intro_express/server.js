const express = require("express");
// console.log(express);
const PORT = 1337;
const app = express();

// ---- middleware ----
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// --------------------

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


// ----------- routing ------------

const myCallbackFunction = (req, res) => {
    res.json({ message: "ok" })
}
app.get("/api/hello", myCallbackFunction)

// get all users
app.get("/api/users", (req, res) => {
    console.log(req);
    res.json(users)
})

// get one user
app.get("/api/users/:unicornIdx", (req, res) => {
    console.log(req.params);
    // const {unicornIdx} = req.params
    console.log(req.params.unicornIdx);

    res.json(users[req.params.unicornIdx])
    // console.log(unicornIdx);
})
// alt
app.get("/api/users/one/:idx", (req, res) => {
    console.log(req.params);
    const { idx } = req.params
    // req.params.idx
    // res.json(users[req.params.idx])
    // res.json(users[idx])
    res.json({
        idx: req.params.idx,
        status: 200,
        user: users[idx]
    })
})

// CREATE A USER / POST (append)
// to make a post request with JSON 
// we need the middleware form the top
// ☝
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later we will be inserting into a DB
    users.push(req.body) // req.body is an {obj} 
    // we always want to respond with something to the client
    res.json({ status: "ok", users })

})


app.get("/api", (requestObj, responseObj) => {
    console.log("hello from /api");
    responseObj.json({ key1: "hello", key2: "hello again", key3: true, key4: [1, 2, 3] })
})


// starting our server
// this should always be at the END of our server.js file
app.listen(PORT, () => console.log(`>> SERVER started on port ${PORT} and is listening for REQuests to RESpond to <<`))