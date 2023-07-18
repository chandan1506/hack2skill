//<----------------------router creation---------->
const express = require('express');
const router = express.Router();

//<----------------------importing controller functions---------->
const videoController = require('../controller/video.controller');
const searchController = require('../controller/search.controller');

//<----------------------mounting routers---------->
router.get("/videos",videoController)
router.get("/search",searchController)

//<----------------------exporting module---------->
module.exports = router;
