'use strict';

angular.module('mean.settings', [])

    .constant('SettingsConfig', {
        url: 'http://localhost/',

        categories: [
            {name: 'start_screen', title: 'Start screen'},
            {name: 'location', title: 'Choose location'},
            {name: 'language', title: 'Choose Language'},
            {name: 'time_format', title: 'Choose Time Format'},
            {name: 'personal_information', title: 'Personal information'}
        ]
    });


angular.module('mean.settings').controller('SettingsController', ['$scope', '$rootScope', '$location', 'SettingsConfig',
    function($scope, $rootScope, $location, SettingsConfig) {

        $scope.settingsItems = SettingsConfig.categories;

    }
]).controller('StartScreenController', ['$scope', '$rootScope', 'SettingsConfig',
    function($scope, $rootScope, SettingsConfig) {

        $scope.category = SettingsConfig.categories.filter(function( obj ) {
            return obj.name === 'start_screen';
        })[0];

    }
]).controller('LocationController', ['$scope', '$rootScope', 'SettingsConfig',
    function($scope, $rootScope, SettingsConfig) {

        $scope.category = SettingsConfig.categories.filter(function( obj ) {
            return obj.name === 'location';
        })[0];

    }
]).controller('LanguageController', ['$scope', '$rootScope', 'SettingsConfig',
    function($scope, $rootScope, SettingsConfig) {

        $scope.category = SettingsConfig.categories.filter(function( obj ) {
            return obj.name === 'language';
        })[0];

    }
]).controller('TimeFormatController', ['$scope', '$rootScope', 'SettingsConfig',
    function($scope, $rootScope, SettingsConfig) {

        $scope.category = SettingsConfig.categories.filter(function( obj ) {
            return obj.name === 'time_format';
        })[0];

    }
]).controller('PersonalInformationController', ['$scope', '$rootScope', 'SettingsConfig',
    function($scope, $rootScope, SettingsConfig) {

        $scope.category = SettingsConfig.categories.filter(function( obj ) {
            return obj.name === 'personal_information';
        })[0];

    }
]);
