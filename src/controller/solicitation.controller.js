angular.module(APP_NAME).controller('SolicitationController', function($scope, solicitationTypesService, solicitationService){
    $scope.solicitationTypes = [];

    $scope.newSolicitation = {};

    var loadSolicitationTypes = async function(){
        $scope.solicitationTypes = await solicitationTypesService.getTypes()
        $scope.$apply();
    };

    async function addNewSolicitation(){
        await solicitationService.registerNewSolicitation($scope.newSolicitation)
    }

    $scope.addNewSolicitation = addNewSolicitation;

    loadSolicitationTypes();
});
