(function () {
    'use strict';
    angular.module('app').factory('produtoAPI', function ($resource) {
        return $resource('http://localhost:8080/DS2016-Salao/rs/produto/:id', { id: '@_id' }, {
            query: { isArray: true },
            update: { method: 'PUT' },
            create: { method: "POST" },
            get: { method: "GET" },
            remove: { method: "DELETE" },
        });
    });
} ());
