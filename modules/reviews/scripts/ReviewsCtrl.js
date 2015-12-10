"use strict"
angular
    .module('reviews')
    .controller('ReviewsCtrl', function($scope, $state, reviewsList, $modal) {

        reviewsList.getList().success(function(data) {
            $scope.data = data;
        });

        $scope.addReview = function () {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'reviewsModalContent.html',
                controller: function ($scope, $modalInstance, reviewsList, ctrlScope) {

                    $scope.saveReviews = function () {
                        if ($scope.name && $scope.text) {
                            reviewsList.saveReview({name: $scope.name, text: $scope.text}).success(function(data) {
                                ctrlScope.data = data;
                                $modalInstance.close();
                            });
                        }
                    };

                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: 'sm',
                resolve: {
                    ctrlScope: function () {
                        return $scope;
                    }
                }
            });
        };

    });