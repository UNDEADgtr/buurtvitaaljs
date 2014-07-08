'use strict';

//News up route
angular.module('mean.news').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: 'news/views/news.html'
            })
            .state('news by id', {
                url: '/news/:newsId',
                templateUrl: 'news/views/news-one.html'
            });
    }
]);
