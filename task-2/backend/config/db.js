//<----------------------mongoose---------->
const mongoose = require("mongoose")

//<----------------------dotenv---------->
require("dotenv").config()

//<----------------------establishing connection------------->
const connection = mongoose.connect(process.env.mongoURL)


//<----------------------exporting connection------------->
module.exports = {connection}