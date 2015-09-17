angular.module('myApp', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
	
	  .when('/', {
		 templateUrl : 'templates/home.html',
		 controller  : 'AppCtrl'
	  }).
      when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }).
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }).
      when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }).
      when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }])
.controller('AppCtrl', function($scope, $http) {
  $scope.message = "The app routing is working!";
  $scope.modalTitle = "Add Job";
  $scope.hideEditForm = true;
  
  
  		$scope.openModal = function() {
			$scope.modalTitle = "Add Job";
			$scope.selectedUser = '';
		}
		//$scope.openEditModal = function() {
			//$scope.modalTitle = "Edit Job";
			//$scope.selectedUser = '';
		//}
		
  		$scope.loadUsers = function() {
			$http.get('api/data.json').success(function (response){
				$scope.jobs = response;
			}).error(function (error){
				console.log('Error loading jobs ', error);
			});
		}
		
		$scope.addJob = function() 
		{
			$scope.jobs.push($scope.newJob);
			$scope.newJob = {};
			$('.close').trigger('click');
			$scope.hideEditForm = true;
		}

		$scope.editJob = function(job) {
			$scope.modalTitle = "Edit Job";
			$scope.hideEditForm = false;
			if(job) {
				for(var i=0; i<$scope.jobs.length; i++) {
					if($scope.jobs[i].id === job.id) {
						$scope.newEditJob = $scope.jobs[i];
					}
				}
			}
		}

		$scope.updateUser = function(){
			$('.close').trigger('click');
			$scope.hideEditForm = true;
		}

		$scope.deleteJob = function(job) {
			var Confirm = confirm('Are you sure ?');
			if(Confirm) {
				if(job) {
					// $http.delete('api/phpAction.php?action=delete&id='+ user.id).success(function (response){
					// 	console.log('User deleted');
					// 	$scope.loadUsers();
					// }).error(function (error){
					// 	console.log('Error deleting user', error);
					// });
					    
					//$scope.deleteItem = function (index) {
						//$scope.delete = function ( idx ) {
							  var person_to_delete = job.id;
							for(var i=0; i< $scope.jobs.length; i++) {
								if($scope.jobs[i].id === person_to_delete){
									$scope.jobs.splice(i, 1);
								}
							}
				}
			}
		}	
})
.controller('loginCtrl', function($scope) {
  $scope.message = "The app routing is working!";
})
.controller('signupCtrl', function($scope) {
  $scope.message = "The app routing is working!";
})
.controller('contactCtrl', function($scope) {
  $scope.message = "The app routing is working!";
})
.controller('AboutCtrl', function($scope) {
  $scope.message = "The app routing is working!";
});


