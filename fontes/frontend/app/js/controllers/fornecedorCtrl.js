(function() {
    'use strict';
    angular.module('app').controller('fornecedorListCtrl', function($scope, $http, fornecedorAPI) {
        var entries = fornecedorAPI.query(function(data) {
            if (data.length > 0) {
                $scope.fornecedors = data;
            } else {
                $scope.message = "Não foram encontrados registros."
            }
        });

        $scope.deleteProduct = function(id) {
            fornecedorAPI.remove({ id: id }, function(data) {

            });
        };

    }).controller('fornecedorCtrl', function($scope, $http, $state, $stateParams, fornecedorAPI) {

        if ($stateParams.id !== undefined) {
            var fornecedor = fornecedorAPI.get({ id: $stateParams.id }, function(data) {
                $scope.object = data;
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';
                if (!$scope.object.idfornecedor) {
                    fornecedorAPI.create($scope.object, function() {
                        $state.go('app.fornecedor');
                    });
                } else {
                    fornecedorAPI.update($scope.object, function() {
                        $state.go('app.fornecedor');
                    });
                }
            }
        };
    });

} ());