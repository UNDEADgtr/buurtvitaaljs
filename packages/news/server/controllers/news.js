'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    News = mongoose.model('News');


/**
* List of Articles
*/
exports.all = function(req, res) {
    News.find().sort('-created').populate('user', 'name username').exec(function(err, news) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list the news'
            });
        }
        res.json(news);

    });
};
