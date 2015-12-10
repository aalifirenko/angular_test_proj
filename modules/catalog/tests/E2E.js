"use strict"
angular
    .module('catalog')
    .run(function($httpBackend) {

        var list = [{
            id: 1,
            name: 'Item 1',
            price: '500$',
            image: 'images/photo.jpg'
        }, {
            id: 2,
            name: 'Item 2',
            price: '700$',
            image: 'images/photo.jpg'
        }, {
            id: 3,
            name: 'Item 3',
            price: '300$',
            image: 'images/photo.jpg'
        }];

        $httpBackend.whenGET('/list').respond(function () {
            return [200, list];
        });

        var listId = -1;
        $httpBackend.whenGET(function(url) {
            var regexp = /^\/list\/\?id=([1-9])+/;
            var match = url.match(regexp);
            if (match && typeof match[1] !== 'undefined') {
                listId = (url.match(regexp)[1]) - 1;
            }
            return regexp.test(url);
        }).respond(function() {
                if (typeof list[listId] == 'undefined') {
                    return [404, {}];
                }
                return [200, list[listId]];
            });

        /**
         *  Skip template requests
         */
        $httpBackend.whenGET(/^modules\//).passThrough();
    });