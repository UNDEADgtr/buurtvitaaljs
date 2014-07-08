'use strict';

angular.module('mean.news').controller('NewsController', ['$scope', '$rootScope', '$location', 'Global',
    function($scope, $rootScope, $location, Global) {
        $scope.global = Global;

        var newsItems = [];

        for(var i=0; i<50; i++){
            newsItems.push({name: 'News: ' + i, id: i});
        }

        $scope.newsItems = newsItems;

    }
]).controller('NewsOneController', ['$scope', '$rootScope', '$stateParams',
    function($scope, $rootScope, $stateParams) {

        $scope.info = $stateParams.newsId;

    }
]);
