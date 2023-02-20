const express = require('express')

const router = express.Router()

router.get('/' , (req, res) => {
    res.send("Hello world Auth")
})

// router.use(express.json()); // parsing the json data


router.post('/register', (res, req) => {
    console.log(req.body);
    res.json({message: req.body})
    // res.send("Router Page")
    // console.log("HEllo");
})

module.exports = router 