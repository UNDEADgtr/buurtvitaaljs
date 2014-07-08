'use strict';

var news = require('../controllers/news');

module.exports = function(News, app, auth) {

    app.route('/settings')
        .get(news.all);

};
