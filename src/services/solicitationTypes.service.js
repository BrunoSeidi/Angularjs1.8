angular.module(APP_NAME).service("solicitationTypesService", function($http){
    this.getTypes = async function(){
        let types = [];

        const response = await $http.get('http://localhost:3000/solicitationTypes')

        types = response.data;

        return types;
    }
})