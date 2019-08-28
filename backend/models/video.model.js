const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    Title: {
        type: String,
    },
    View_Count: {
        type: String,
    },
    Likes: {
        type: String,
    },
    DisLikes: { 
        type: String,
    },
    VideoID: {
        type: String,
    },
    Comment: {
        type: String,
    }

});


mongoose.model('trendingvideos', videoSchema);
