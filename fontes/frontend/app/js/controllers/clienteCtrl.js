(function() {
    'use strict';
    angular.module('app').controller('clienteListCtrl', function($scope, $http, clienteAPI) {

        $scope.clientes = [{
            'id': 0,
            'nome': 'Vinicius Vense',
            'demanda': 'AB',
            'sistema': 'Kenan',
            'situacao': 'Avaliação',
            'responsavel': 'Usuário',
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
    }).controller('clienteCtrl', function($scope, $http, $stateParams, clienteAPI) {
        $scope.service = clienteAPI;
        console.log(clienteAPI);

        if ($stateParams.id !== undefined) {
            $scope.service.get({ id: $stateParams.id }).then(function(data) {
                $scope.object = data;
            });
        }

        $scope.submitForm = function(form) {
            if (!form.$valid) {
                $scope.message = 'Verifique o formulário campos obrigatórios não preenchidos';
                alert("Aqui");
            } else {
                $scope.message = '';
                if (!$scop.object.idCliente) {
                    $scope.service.$save(function() {
                        $state.go('cliente');
                    });
                } else {
                    $scope.service.$update(function() {
                        $state.go('cliente');
                    });
                }
            }
        };


    });

}());