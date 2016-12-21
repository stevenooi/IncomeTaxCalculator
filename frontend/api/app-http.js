var myApp = angular.module('employeeSalaryApp', []);
myApp.controller('employeeSalaryController', function($scope, $http, $location){  
      // calling our submit function.
        $scope.submitForm = function() {  
    $http.get(
'http://127.0.0.1:8081/calSalary', {
	params:{
		firstName:$scope.persons.firstName,
		lastName:$scope.persons.lastName,
		income:$scope.persons.salary,
		superAnnuation:$scope.persons.superAnnuation
		}
	}
)
		.then(function (response){
			$scope.result = response.data; //For multiple row 
			console.log("status:" + response.status);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
			 console.log("Task Finished.");
		});

     
        };
}); 

  