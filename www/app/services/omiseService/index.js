import angular from 'angular';
import ngResource from 'angular-resource'
var host = 'https://api.omise.co'
let omiseService = angular.module('omiseService', [
  ngResource
])
.factory('APIConfig',function(){
    return {
        host:host
    }
})


.factory('OmiseCustomer',['$resource','$httpParamSerializerJQLike','$httpParamSerializer',function($resource,$httpParamSerializerJQLike,$httpParamSerializer){
    return $resource(host+'/customers/:id',{id:"@id"},{
        update: {
          method: 'PATCH'
        }
    });
}])



.name



export default omiseService;