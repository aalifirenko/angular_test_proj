"use strict"
angular
    .module('reviews')
    .factory("reviewsList", ['$http', function($http) {

        var Reviews = function() {

        };

        angular.extend(Reviews.prototype, {
            list: [],
            getList: function () {
                var that = this;
                return $http.get('/getreviews').success(function(data) {
                    that.list = data;
                });
            },
            saveReview: function (data) {
                var that = this;
                return $http.post('/savereviews', data).success(function(data) {
                    that.list = data;
                });
            }
        });

        return new Reviews;
    }]);