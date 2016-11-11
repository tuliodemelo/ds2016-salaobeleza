(function() {
    'use strict';
    angular.module('app').factory('clienteAPI', function($resource) {
        return $resource('/api/entries/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            }
        });
    });
}());