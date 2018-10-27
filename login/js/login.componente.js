'use strict';

angular.
    module('Nietos').
    component('login', {
        templateUrl: 'login/login.html',
        controller: function LoginCtrl($location, $scope) {
            this.validarUsuario = function () {
                console.log(this.usuario + " " + this.contrasena);
            }

            this.fondoPantalla = {
                "background-image": "url('imagenes/logo.jpg')",
                "background-repeat":"no-repeat",
                "background-size":"contain",
                "background-position":"center"
            };
        }
    });