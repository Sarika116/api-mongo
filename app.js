const dotenv = require("dotenv")
const express = require('express')
const app = express()

dotenv.config({ path: './config.env' })
require('./db/conn')

app.use(express.json())

// const User = require('./model/userSchema')
const router = require('./router/auth')
app.use('/register', router)

const port = process.env.PORT;



// const URI = process.env.MONGODB_URL;

// mongoose.connect(URI, {

// useNewUrlParser: true, 

// useUnifiedTopology: true 

// }, err => {
// if(err) throw err;
// console.log('Connected to MongoDB!!!')
// });

// Middleware

const middleware = (req, res, next) => {
    console.log(`Hello in middleware`);
    next;
}

middleware()

app.get('/' , (req, res) => {
    res.send("Hello world  App")
})
app.get('/about', (req, res) => {
    res.send("About world ")
})
app.get('/register', (req, res) => {
    // res.send("Register world ")
    res.send("hello Register")
})

app.listen(port, () => {
    console.log(`Server on ${port}`);
})