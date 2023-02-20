const mongoose = require('mongoose')
const URI = process.env.MONGODB_URL;


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => console.log(`No connection ${err}`))
