"use strict"
angular
    .module('catalog')
    .factory("catalogList", ['$http', function($http) {

        var Catalog = function() {

        };

        angular.extend(Catalog.prototype, {
            list: [],
            getList: function() {
                var that = this;
                return $http.get('/list').success(function(data) {
                    that.list = data;
                });
            },
            getOne: function(id) {
                return $http({
                    url: '/list/',
                    method: "GET",
                    params: {id: id}
                });
            }
        });

        return new Catalog;
    }]);