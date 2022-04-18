angular.module(APP_NAME).controller('SolicitationController', function($scope,$http){
    $scope.problems = [];
    $scope.solicitationTypes = [];

    $scope.newSolicitation = {};

    var loadSolicitationTypes = function(){
        $http.get('http://localhost:3000/solicitationTypes').then(function(response){
            console.log(response.data);
            console.log(response);
            $scope.solicitationTypes = response.data;
        })
    };

    function addNewSolicitation(){
        console.log($scope.newSolicitation)
        $http.post('http://localhost:3000/solicitations',$scope.newSolicitation)
    }

    $scope.addNewSolicitation = addNewSolicitation;

    loadSolicitationTypes();
});
