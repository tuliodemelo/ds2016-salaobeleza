(function() {
    'use strict';
    angular.module('app').controller('agendamentoListCtrl', function($scope, $http, agendamentoAPI) {
        var entries = agendamentoAPI.query(function(data) {

            if (data.length > 0) {
                $scope.agendamentos = data;
            } else {

                $scope.message = "Não foram encontrados registros."
            }
        });

        $scope.deleteProduct = function(id) {
            agendamentoAPI.remove({ id: id }, function(data) {

            });
        };

    }).controller('agendamentoCtrl', function($scope, $http, $state, $stateParams, agendamentoAPI, clienteAPI,servicoAPI) {
        var cliente = clienteAPI.query(function(data) {
                $scope.clientes = data;
        });

        var servico = servicoAPI.query(function(data) {
                $scope.servicos = data;
        });

        if ($stateParams.id !== undefined) {
            var agendamento = agendamentoAPI.get({ id: $stateParams.id }, function(data) {
                var date = data.data;
                $scope.object = data;
                $scope.object.data = formatarData2(date);

            });
        }
        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';
                $scope.object.data = formatarData($scope.object.data);
                if (!$scope.object.idagenda) {
                    agendamentoAPI.create($scope.object, function() {
                        $state.go('app.agendamento');
                    });
                } else {
                    agendamentoAPI.update($scope.object, function() {
                        $state.go('app.agendamento');
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