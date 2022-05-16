// 1. import mongoose here 
const mongoose = require('mongoose');

module.exports = (DB_NAME) => {
    mongoose.connect('mongodb://localhost/'+DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('🎈🎈🎈🎈 Established a connection to the database'))
    .catch(err => console.log('❌❌❌ Something went wrong when connecting to the database ', err));
}


// const DB = "the_real_friday_db"

// 2. connect to the DB
// platform way
// mongoose.connect('mongodb://localhost/' + DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log(`🎈🎈🎈🎈 Established a connection to the ${DB} db`))
//     .catch(err => console.log('Something went wrong when connecting to the database ', err));