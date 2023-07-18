const mongoose = require("mongoose")

// Define Schema for MOCK-DATA-1 collection
const mockData1Schema = mongoose.Schema({
    full_name: String,
    email: String,
    number: String,
    city: String,
    url: String,
  });

  // Define models for collection
const MockData1 = mongoose.model('mockdata1', mockData1Schema);

//<----------------------exporting model------------->
module.exports = { MockData1 }