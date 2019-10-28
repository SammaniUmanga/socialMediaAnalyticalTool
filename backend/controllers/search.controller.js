const mongoose = require('mongoose');

// module.exports.searchKey = (req, res, next) => {

//     var key = req.body.search;

//     key.save((err, doc) => {
//         if (!err){
//             res.send(doc);
//             console.log('passed');
//         }
//         else {
//              return next(err);
//         }
          
//     });
// }


module.exports.searchKey = (req, res, getsearch) => {
    var getKeyword = req.body.search;
    // var data = {
    //     keyword: getKeyword
    // }
    res.status(200).json(getKeyword);
    console.log('passed', getKeyword);
    
}

// app.get("/getdata", (req, res) => {
//     var data = { // this is the data you're sending back during the GET request
//         keyword: "namal"

//     }
//     res.status(200).json(data)
//     //console.log("get method is called");
// });



// app.post("/postdata", (req, res) => {
//     var videoID = req.body.videoID;
//     //var Title = req.body.Title;
//     console.log(videoID);
//     //console.log(Title);
//     res.send("process complete");
// });

// module.exports.getSearchVideo= (res, req, next) => {
//     var videoID = req.body.videoID;
//     console.log(videoID);
//     res.send("process complete");
// }