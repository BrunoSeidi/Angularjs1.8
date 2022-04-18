angular.module(APP_NAME).service('solicitationService', function($http){
    this.registerNewSolicitation = async function( data ){
        console.log(data)
        return await $http.post('http://localhost:3000/solicitations', data);
    };
})