'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Setting = mongoose.model('Setting');


/**
* List of Articles
*/
exports.all = function(req, res) {
    Setting.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list the articles'
            });
        }
        res.json(articles);

    });
};
