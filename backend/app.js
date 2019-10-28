require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
var request = require('request-promise');

const rtsIndex = require('./routes/index.router');

var app = express();
////////middleware/////////
//app.use->setting middleware for the application
app.use(bodyParser.json());
//enable cors on this application
//this node.js app is running on a different port.But client-side app(angular app) will be running on another different port.
//In order to communicate betwwen them we have to enable cors.
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//error handle
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// app.get("/getdata", (req, res) => {
//     // var data = { // this is the data you're sending back during the GET request
//     //     keyword: "mom"
//     //    // data2: "data2"
//     // }0
//     var options = {
//         method: 'POST',
//         uri: 'http://localhost:3000/api/search',
//         json: true // Automatically stringifies the body to JSON
//     };
    
//     console.log('api dinananwa',options);
//     res.status(200).options;
//     //console.log("get method is called");
// });
app.get('/postdatatoFlask', async function (req, res) {
    var data = { // this variable contains the data you want to send
        data1: res
        
    };
    console.log('awa', data);
    var options = {
        method: 'POST',
        uri: 'http://localhost:5000/postdata',
        body: data,
        json: true // Automatically stringifies the body to JSON
    };
    
    var returndata;
    var sendrequest = await request(options).then(function (parsedBody) {
        console.log('parsedBody',parsedBody); // parsedBody contains the data sent back from the Flask server
        returndata = parsedBody; // do something with this data, here I'm assigning it to a variable.
    })
    .catch(function (err) {
        console.log(err);
    });
    
    res.send(returndata);
    console.log('returndata',returndata);
});

// app.post("/postdata", (req, res) => {
//     var videoID = req.body.videoID;
//     //var Title = req.body.Title;
//     console.log(videoID);
//     //console.log(Title);
//     res.send("process complete");
// });

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));