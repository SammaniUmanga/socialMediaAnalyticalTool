const mongoose = require('mongoose');
const Video = mongoose.model('trendingvideos');


module.exports.getVideos = (req, res, next) => {
    console.log('Get req for all videos');
    Video.find().
    exec(function(err, result){
        if(err){
            console.log('Error retrieving videos');
        } else {
            return res.json(result);
        }
    })
}



