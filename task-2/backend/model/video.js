//<----------------------mongoose---------->
const mongoose = require('mongoose');

//<----------------------creating schema---------->
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  publishedAt: Date,
  thumbnails: Object,
});

//<----------------------creating model---------->
const VideoModel = mongoose.model('Video', videoSchema);

//<----------------------exporing model--------->
module.exports = { VideoModel }
