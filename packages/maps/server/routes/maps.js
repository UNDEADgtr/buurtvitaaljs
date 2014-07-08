'use strict';

var maps = require('../controllers/maps');

module.exports = function(Maps, app, auth) {

    app.route('/maps')
        .get(maps.all);

};
