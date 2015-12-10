"use strict"
angular.module('catalog')
    .config(function estateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/list");

        $stateProvider
            .state('list', {
                url: '/list',
                controller: 'CatalogCtrl',
                templateUrl: 'modules/catalog/views/_list.html'
            })
            .state('detail', {
                url: "/list/:id",
                controller: 'DetailCtrl',
                templateUrl: 'modules/catalog/views/_detail.html'
            })
    });