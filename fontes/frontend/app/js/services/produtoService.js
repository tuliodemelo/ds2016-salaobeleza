(function() {
    'use strict';
    angular.module('app').factory('produtoAPI', function($resource) {
        return $resource('/api/entries/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            }
        });
    });
}());