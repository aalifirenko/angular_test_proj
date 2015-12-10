"use strict"
angular.module('reviews')
    .config(function estateConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('reviews', {
                url: '/reviews',
                controller: 'ReviewsCtrl',
                templateUrl: 'modules/reviews/views/_reviews.html'
            })
            .state('add_reviews', {
                url: "/reviews/add",
                controller: 'ReviewsAddCtrl',
                templateUrl: 'modules/reviews/views/_add.html'
            })
    });