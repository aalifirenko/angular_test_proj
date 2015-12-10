"use strict"
angular
    .module('catalog')
    .controller('DetailCtrl', function($scope, $state, $stateParams, $modal) {

        $scope.open = function () {

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: function ($scope, $modalInstance, catalogList, itemId, $state) {
                    catalogList.getOne(itemId).success(function(data) {
                        $scope.data = data;
                    });

                    $scope.ok = function () {
                        $modalInstance.close();
                        $state.go('list');
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                        $state.go('list');
                    };
                },
                size: 'lg',
                resolve: {
                    itemId: function () {
                        return $stateParams.id
                    }
                }
            });
        };

        $scope.open();
    });