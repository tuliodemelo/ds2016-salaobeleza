(function() {
    'use strict';
    angular.module('app').controller('agendamentoListCtrl', function($scope, $http, agendamentoAPI) {

        $scope.agendamentos = [{
            'id': 0,
            'nome': 'Vinicius Vense',
            'demanda': 'AB',
            'sistema': 'Kenan',
            'vencimento': new Date(),
        }, {
            'id': 1,
            'nome': 'Usuario x',
            'demanda': 'AC',
            'sistema': 'Kenan',
            'situacao': 'Avaliação',
            'responsavel': 'XYEQER',
            'vencimento': '01/01/2016',
        }];
    }).controller('agendamentoCtrl', function($scope, $http, $stateParams, agendamentoAPI) {
        $scope.service = agendamentoAPI;

        if ($stateParams.id !== undefined) {
            // $scope.service.get({ id: $stateParams.id }).then(function(data) {
            //     $scope.object = data;
            // });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
                alert("Aqui");
            } else {
                $scope.message = '';
                if (!$scop.object.idCliente) {
                    $scope.service.$save(function() {
                        // $state.go('/agendamento');
                    });
                } else {
                    $scope.service.$update(function() {
                        // $state.go('/agendamento');
                    });
                }
            }
        };


    });

}());