angular
    .module('Nietos')
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<login></login>'
        })
        .when('/inicio',{
            template:'<inicio></inicio>'
        })        
    });