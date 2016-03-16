
(function () { 
	livrariaModule = angular.module("livraria");

	livrariaModule.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance, livro) {

	  $scope.livro = livro;
	  $scope.selected;
	  /***
	  $scope.ok = function () {
	  	console.log("aqui");
	    $uibModalInstance.close(livro);
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };*/
	}])
})();