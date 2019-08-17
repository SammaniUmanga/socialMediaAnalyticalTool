require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

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

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));