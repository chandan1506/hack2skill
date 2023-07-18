const express = require("express")
const userRouter = express.Router()
const {fetchData}  = require("../controller/user.controller")

//<----------------------data fetching router------------>
userRouter.get("/fetch-data",fetchData)


//<----------------------exporting router------------->

module.exports = { userRouter }