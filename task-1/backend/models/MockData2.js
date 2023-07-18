const mongoose = require("mongoose")

// Define Schema for MOCK-DATA-2 collection
const mockData2Schema = mongoose.Schema({
    full_name: String,
    email: String,
    team_name: String,
  });

// Define models for collection
const MockData2 = mongoose.model('mockdata2', mockData2Schema);  

//<----------------------exporting model------------->
module.exports = { MockData2 }