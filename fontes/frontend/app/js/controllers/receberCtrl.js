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

    }).controller('receberCtrl', function($scope, $http, $state, $stateParams, receberAPI,clienteAPI) {
        var entries = clienteAPI.query(function (data) {
            $scope.clientes = data;

        });

        if ($stateParams.id !== undefined) {
            var receber = receberAPI.get({ id: $stateParams.id }, function(data) {
                $scope.object = data;
                $scope.object.data_conta = formatarData2(data.data_conta);
                $scope.object.data_vencimento = formatarData2(data.data_vencimento);
                $scope.object.data_recebimento = formatarData2(data.data_recebimento);
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';

                $scope.object.data_conta = formatarData($scope.object.data_conta);
                $scope.object.data_vencimento = formatarData($scope.object.data_vencimento);
                $scope.object.data_recebimento = formatarData($scope.object.data_recebimento);

                if (!$scope.object.idcontasreceber) {
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

        function formatarData(data) {
            var date = data;
            var parts = date.split("/");
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