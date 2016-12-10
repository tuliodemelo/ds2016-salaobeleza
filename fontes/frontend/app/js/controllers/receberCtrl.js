(function() {
    'use strict';
    angular.module('app').controller('receberListCtrl', function($scope, $http, receberAPI) {

        var entries = receberAPI.query(function(data) {
            if (data.length > 0) {
                $scope.recebers = data;
            } else {
                $scope.message = "Não foram encontrados registros."
            }
        });

    }).controller('receberCtrl', function($scope, $http, $state, $stateParams, receberAPI) {

        if ($stateParams.id !== undefined) {
            var receber = receberAPI.get({ id: $stateParams.id }, function(data) {
                $scope.object = data;
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';
                if (!$scope.object.idreceber) {
                    receberAPI.create($scope.object, function() {
                        $state.go('app.receber');
                    });
                } else {
                    receberAPI.update($scope.object, function() {
                        $state.go('app.receber');
                    });
                }
            }
        };


    });

} ());