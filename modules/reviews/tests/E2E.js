"use strict"
angular
    .module('reviews')
    .run(function($httpBackend) {

        var reviews = [{
            id: 1,
            name: 'Иван Иванов',
            date: '10.07.2015',
            text: 'Хороший отзыв'
        }, {
            id: 2,
            name: 'Алексей Петров',
            date: '10.07.2015',
            text: 'Плохой отзыв'
        }, {
            id: 3,
            name: 'Иван Сидоров',
            date: '10.07.2015',
            text: 'Хороший отзыв'
        }];

        $httpBackend.whenGET('/getreviews').respond(function () {
            return [200, reviews];
        });

        $httpBackend.whenPOST('/savereviews').respond(function (url, type, data) {
            data = JSON.parse(data);
            data.id = reviews.length + 1;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            data.date = dd + '.' + mm + '.' + yyyy;
            reviews.push(data);
            return [200, reviews];
        });

        /**
         *  Skip template requests
         */
        $httpBackend.whenGET(/^modules\//).passThrough();
    });