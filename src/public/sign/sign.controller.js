(function () {
  'use strict';
  angular.module('public').controller('SignController', SignController);

  var SignController = function (MenuService) {
    var sign = this;

    sign.user = {};
    sign.favoriteDish = {};

    sign.showError = false;
    sign.showMessage = false;
    sign.signup = function (form) {
      sign.showError = false;
      sign.showMessage = false;

      if (form.$invalid) {
        console.log('The form is not valid');
        return;
      }

      MenuService.getFavoriteDish(vm.user.favoriteDish).then(
        function (response) {
          sign.user.favoriteDishDetails = response.data;
          console.log(sign.favoriteDish);
          MenuService.saveUser(sign.user);
          sign.showMessage = true;
        },
        function (error) {
          console.log(error);
          sign.showError = true;
        }
      );
    };
  };
  SignController.$inject = ['MenuService'];
})();
