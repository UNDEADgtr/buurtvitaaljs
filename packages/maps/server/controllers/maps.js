'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Map1 = mongoose.model('Map');


/**
* List of Maps
*/
exports.all = function(req, res) {
    Map1.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list the articles'
            });
        }
        res.json(articles);

    });
};
