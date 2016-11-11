(function() {
    'use strict';


    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        // routes
        $stateProvider
            .state('login', {
                url: "/",
                templateUrl: "partials/login.html",
                controller: 'loginCtrl'
            })
            .state('app', {
                abstract: true,
                templateUrl: "partials/template.html"
            })
            .state('app.componentes', {
                url: "/home",
                templateUrl: "partials/partial2.html"
            })
            .state('app.cliente', {
                url: "/cliente",
                templateUrl: "partials/cliente/cliente.html",
                controller: 'clienteListCtrl'
            })
            .state('app.cliente-criar', {
                url: "/cliente/criar",
                templateUrl: "partials/cliente/cliente-form.html",
                controller: 'clienteCtrl'
            })
            .state('app.cliente-editar', {
                url: "/cliente/:id/edit",
                templateUrl: "partials/cliente/cliente-form.html",
                controller: 'clienteCtrl'
            })

        .state('app.servico', {
                url: "/servico",
                templateUrl: "partials/servico/servico.html",
                controller: 'servicoListCtrl'
            })
            .state('app.servico-criar', {
                url: "/servico/criar",
                templateUrl: "partials/servico/servico-form.html",
                controller: 'servicoCtrl'
            })
            .state('app.servico-editar', {
                url: "/servico/:id/edit",
                templateUrl: "partials/servico/servico-form.html",
                controller: 'servicoCtrl'
            })

        .state('app.produto', {
                url: "/produto",
                templateUrl: "partials/produto/produto.html",
                controller: 'produtoListCtrl'
            })
            .state('app.produto-criar', {
                url: "/produto/criar",
                templateUrl: "partials/produto/produto-form.html",
                controller: 'produtoCtrl'
            })
            .state('app.produto-editar', {
                url: "/produto/:id/edit",
                templateUrl: "partials/produto/produto-form.html",
                controller: 'produtoCtrl'
            })


        .state('app.agendamento', {
                url: "/agendamento",
                templateUrl: "partials/agendamento/agendamento.html",
                controller: 'agendamentoListCtrl'
            })
            .state('app.agendamento-criar', {
                url: "/agendamento/criar",
                templateUrl: "partials/agendamento/agendamento-form.html",
                controller: 'agendamentoCtrl'
            })
            .state('app.agendamento-editar', {
                url: "/agendamento/:id/edit",
                templateUrl: "partials/agendamento/agendamento-form.html",
                controller: 'agendamentoCtrl'
            });
    }]);

}());