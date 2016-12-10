(function() {
    'use strict';
    angular.module('app').controller('pagarListCtrl', function($scope, $http, pagarAPI) {

        var entries = pagarAPI.query(function(data) {
            if (data.length > 0) {
                $scope.pagars = data;
            } else {
                $scope.message = "Não foram encontrados registros."
            }
        });

    }).controller('pagarCtrl', function($scope, $http, $state, $stateParams, pagarAPI,fornecedorAPI) {
        var entries = fornecedorAPI.query(function (data) {
            $scope.fornecedors = data;

        });

        if ($stateParams.id !== undefined) {
            var pagar = pagarAPI.get({ id: $stateParams.id }, function(data) {
                $scope.object = data;
                $scope.object.data_conta = formatarData2(data.data_conta);
                $scope.object.data_vencimento = formatarData2(data.data_vencimento);
                $scope.object.data_pagamento = formatarData2(data.data_pagamento);
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
            } else {
                $scope.message = '';

                $scope.object.data_conta = formatarData($scope.object.data_conta);
                $scope.object.data_vencimento = formatarData($scope.object.data_vencimento);
                $scope.object.data_pagamento = formatarData($scope.object.data_pagamento);
                if (!$scope.object.idpagar) {

                    pagarAPI.create($scope.object, function() {
                        $state.go('app.pagar');
                    });
                } else {
                    pagarAPI.update($scope.object, function() {
                        $state.go('app.pagar');
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