//<----------------------importing models------------->
const {MockData1} = require("../models/MockData1")
const {MockData2} =require("../models/MockData2")

//<----------------------logic for joining collections------------>
const fetchData = async (req,res)=>{
    try {
        const data = await MockData1.aggregate([
          {
            $lookup: {
                from: 'mockdata2',
                localField: 'email',
                foreignField: 'email',
                as: 'team',
              },
            },
            {
              $project: {
                _id: 0,
                'team.team_name': 1,
                full_name: 1,
                email: 1,
                number: 1,
                city: 1,
                url: 1,
            },
          },
        ]);
    
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
}

//<----------------------exporting fetchdata function------------>
module.exports = { fetchData }