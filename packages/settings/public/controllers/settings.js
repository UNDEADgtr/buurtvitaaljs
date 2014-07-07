'use strict';

angular.module('mean.settings').controller('SettingsController', ['$scope', '$rootScope', '$location', 'Global',
    function($scope, $rootScope, $location, Global) {
        $scope.global = Global;

        var scrollItems = [];

        scrollItems.push('Start screen ');
        scrollItems.push('Choose location ');
        scrollItems.push('Choose Language ');
        scrollItems.push('Choose Time Format ');
        scrollItems.push('Personal information ');

        $scope.scrollItems = scrollItems;

    }
]);
