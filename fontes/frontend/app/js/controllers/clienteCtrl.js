(function() {
    'use strict';
    angular.module('app').controller('clienteListCtrl', function($scope, $http, clienteAPI) {
        var entries = function(){
            clienteAPI.query(function (data) {
                if (data.length > 0) {
                    $scope.clientes = data;
                } else {
                    $scope.message = "Não foram encontrados registros."
                }
            });
        }
        entries();

        $scope.delete = function(id) {
            clienteAPI.remove({id: id}, function(data) {
                entries();
            });
        };

    }).controller('clienteCtrl', function($scope, $http, $state, $stateParams, clienteAPI) {

        if ($stateParams.id !== undefined) {
            var cliente = clienteAPI.get({ id: $stateParams.id }, function(data) {
                $scope.object = data;
                $scope.object.data_nascimento = formatarData2(data.data_nascimento);
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';
                if (!$scope.object.idcliente) {
                    $scope.object.data_nascimento = formatarData($scope.object.data_nascimento);
                    clienteAPI.create($scope.object, function() {
                        $state.go('app.cliente');
                    });
                } else {
                    $scope.object.data_nascimento = formatarData($scope.object.data_nascimento);
                    clienteAPI.update($scope.object, function() {
                        $state.go('app.cliente');
                    });
                }
            }
        };

        function formatarData(data) {
            var parts = data.split("/");
            return parts[2]+'-'+ parts[1] +'-'+ parts[0];
        }

        function formatarData2(data) {
            var d = new Date(data),
                mes = '' + (d.getMonth() + 1),
                dia = '' + d.getDate(),
                ano = d.getFullYear();

            if (mes.length < 2) mes = '0' + mes;
            if (dia.length < 2) dia = '0' + dia;

            return [dia, mes,ano].join('/');
        }
    });

} ());