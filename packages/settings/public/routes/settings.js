'use strict';

//Setting up route
angular.module('mean.settings').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider
            .state('settings', {
                url: '/settings',
                templateUrl: 'settings/views/settings.html'
            });
    }
]);
