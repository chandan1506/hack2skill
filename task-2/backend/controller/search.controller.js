//<----------------------importing model---------->
const { VideoModel } = require('../model/video');

//<----------------------Basic search API to search stored videos by title and description---------->
const searchController = async (req, res) => {
    try {
      const query = req.query.q;
  
      const videos = await VideoModel.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
        ],
      });
  
      res.status(200).json(videos);
    } catch (error) {
      console.error('Error searching videos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  //<----------------------exporting---------->
  module.exports = searchController;
  