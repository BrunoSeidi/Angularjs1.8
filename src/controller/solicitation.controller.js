angular.module(APP_NAME).controller('SolicitationController', function($scope, solicitationTypesService, solicitationService){
    $scope.solicitationTypes = [];

    $scope.newSolicitation = {};

    $scope.isNewProjectType = !!$scope.newSolicitation?.solicitationType?.id === 1;

    var loadSolicitationTypes = async function(){
        $scope.solicitationTypes = await solicitationTypesService.getTypes();
        $scope.$apply();
    };

    async function addNewSolicitation(){
        await solicitationService.registerNewSolicitation($scope.newSolicitation);
    };

    $scope.updateIsNewProjectType = function(){
        $scope.isNewProjectType = $scope.newSolicitation?.solicitationType?.id === 1;
    };

    $scope.addNewSolicitation = addNewSolicitation;

    loadSolicitationTypes();
});
