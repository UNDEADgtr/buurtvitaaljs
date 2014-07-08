'use strict';

//Setting up route
angular.module('mean.settings').config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider
            .state('settings', {
                url: '/settings',
                templateUrl: 'settings/views/settings.html'
            }).state('start_screen', {
                url: '/settings/start_screen',
                templateUrl: 'settings/views/categories/start_screen.html'
            }).state('location', {
                url: '/settings/location',
                templateUrl: 'settings/views/categories/location.html'
            }).state('language', {
                url: '/settings/language',
                templateUrl: 'settings/views/categories/language.html'
            }).state('time_format', {
                url: '/settings/time_format',
                templateUrl: 'settings/views/categories/time_format.html'
            }).state('personal_information', {
                url: '/settings/personal_information',
                templateUrl: 'settings/views/categories/personal_information.html'
            });
    }
]);
