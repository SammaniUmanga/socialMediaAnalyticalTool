const mongoose = require('mongoose');

module.exports.searchKey = (req, res, next) => {

    var key = req.body.search;

    key.save((err, doc) => {
        if (!err){
            res.send(doc);
        }
        else {
             return next(err);
        }
          
    });
}