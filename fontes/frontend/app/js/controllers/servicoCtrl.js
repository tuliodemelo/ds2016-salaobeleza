(function() {
    'use strict';
    angular.module('app').controller('servicoListCtrl', function($scope, $http, servicoAPI) {

        var entries = servicoAPI.query(function(data) {
            if (data.length > 0) {
                $scope.servicos = data;
            } else {
                $scope.message = "Não foram encontrados registros."
            }
        });

    }).controller('servicoCtrl', function($scope, $http, $state, $stateParams, servicoAPI) {

        if ($stateParams.id !== undefined) {
            var servico = servicoAPI.get({ id: $stateParams.id }, function(data) {
                $scope.object = data;
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';
                if (!$scope.object.idservico) {
                    servicoAPI.create($scope.object, function() {
                        $state.go('app.servico');
                    });
                } else {
                    servicoAPI.update($scope.object, function() {
                        $state.go('app.servico');
                    });
                }
            }
        };


    });

} ());