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

//<----------------------router------------->
const {userRouter}  = require("./routes/userRouter")
app.use("/",userRouter)

//<----------------------connection------------->
const {connection} = require("./config/db")

app.listen(Port,async ()=>{
    try {
        await connection
       console.log("db is connected")
    } catch (error) {
        console.log("error.message")
    }
    console.log(`server is running on port ${Port}`)
})