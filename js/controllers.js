app.controller('HomeController', function($scope, $http){
  $scope.vm = {};
  $scope.vm.search = '';
  $scope.vm.results = null;
  $scope.vm.searchMovie = function(){
    $http.get(`http://www.omdbapi.com/?r=json&s=${$scope.vm.search}`)
      .then(({data: {Search: results}}) => {
        $scope.vm.results = results;
      });
  };
});

app.controller('SearchController', function($scope, $http, $routeParams){
  $scope.vm = {};
  $scope.vm.search = '';
  $scope.vm.results = null;
  
  if($routeParams.search){
    $http.get(`http://www.omdbapi.com/?r=json&s=${$routeParams.search}`)
      .then(({data: {Search: results}}) => {
        $scope.vm.search = $routeParams.search;
        $scope.vm.results = results;
      });
  }

  $scope.vm.searchMovie = function(){
    $http.get(`http://www.omdbapi.com/?r=json&s=${$scope.vm.search}`)
      .then(({data: {Search: results}}) => {
        $scope.vm.results = results;
      });
  };
});

app.controller('ShowController', function($scope, $http, $routeParams){
  // $location.url('/');

  $http.get(`http://www.omdbapi.com/?r=json&i=${$routeParams.id}`)
    .then(({data})=>{
      $scope.vm = {};
      $scope.vm.search = '';
      $scope.vm.data = data;
    });
});