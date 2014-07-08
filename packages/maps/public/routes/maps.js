'use strict';

//Maps up route
angular.module('mean.maps').config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider
            .state('maps', {
                url: '/maps',
                templateUrl: 'maps/views/maps.html'
            })
            .state('map by id', {
                url: '/maps/:mapId',
                templateUrl: 'maps/views/map.html'
            })
            .state('marker info', {
                url: '/maps/marker/:markerId',
                templateUrl: 'maps/views/marker-info.html'
            });
    }
]);
