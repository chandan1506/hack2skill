
//<----------------------express------------->
const express = require("express")
const app = express()
app.use(express.json())

//<----------------------dotenv------------->
require("dotenv").config()
const Port = process.env.port

//<----------------------cors------------->
const cors = require("cors")
app.use(cors())

// Load routes
const router = require('./routes/router');
const fetchLatestVideos = require('./routes/fetchVideo');

// Mount routes
app.use('/', router);



//<----------------------connection------------->
const {connection} = require("./config/db")

//<----------------------start the server------------->
app.listen(Port,async ()=>{
    try {
        await connection
       console.log("db is connected")
    } catch (error) {
        console.log("error.message")
    }
    console.log(`server is running on port ${Port}`)
})

// Background worker to fetch latest videos
 setInterval(fetchLatestVideos, 10000); // Fetch every 10 seconds
//  fetchLatestVideos()
