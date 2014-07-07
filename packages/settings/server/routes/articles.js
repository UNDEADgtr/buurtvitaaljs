'use strict';

var settings = require('../controllers/settings');

module.exports = function(Settings, app, auth) {

    app.route('/settings')
        .get(settings.all);

};
