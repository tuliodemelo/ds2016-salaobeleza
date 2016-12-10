(function () {
    'use strict';
    angular.module('app').controller('produtoListCtrl', function ($scope, $http, produtoAPI) {

        var entries = produtoAPI.query(function (data) {
            if (data.length > 0) {
                $scope.produtos = data;
            } else {
                $scope.message = "Não foram encontrados registros."
            }
        });

    }).controller('produtoCtrl', function ($scope, $http, $state, $stateParams, produtoAPI, categoriaAPI) {

        if ($stateParams.id !== undefined) {
            var produto = produtoAPI.get({ id: $stateParams.id }, function (data) {
                $scope.object = data;
            });
        }
        var entries = categoriaAPI.query(function (data) {
            $scope.categoria = data;
        });

        $scope.submitForm = function (form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';
                if (!$scope.object.idproduto) {
                    produtoAPI.create($scope.object, function () {
                        $state.go('app.produto');
                    });
                } else {
                    produtoAPI.update($scope.object, function () {
                        $state.go('app.produto');
                    });
                }
            }
        };
    });
} ());