"use strict"
angular
    .module('catalog')
    .controller('CatalogCtrl', function($scope, $state, catalogList) {

        $scope.openDetails = function (item) {
            $state.go('detail', {id: item.id});
        };

        $scope.order = function (predicate) {
            $scope.reverse = !$scope.reverse;
            $scope.predicate = predicate;
        };

        catalogList.getList().success(function(data) {
            $scope.data = data;
        });
    });