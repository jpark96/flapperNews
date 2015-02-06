var app = angular.module('flapperNews', ['ui.router', 'ngResource']);

app.controller('MainCtrl', [
  '$scope',
  '$resource',
  function($scope, $resource){
    var Post = $resource('/api/posts');

    Post.query(function (results) {
      $scope.posts = results;
    })

    $scope.addPost = function(){
    	if (!$scope.title || $scope.title == '') {return;}
      var post = new Post();
      post.title = $scope.title;
      post.link = $scope.link;
      post.upvotes = 0;
      post.$save(function (result) {
        $scope.posts.push(result);
        $scope.title = '';
        $scope.link = '';
      });
    };
    $scope.incrementUpvotes = function(post){
    	post.upvotes += 1;
      // post.$save(function (result) {
      //   $scope.posts.push(result);
      // });
    };
  }]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('page2', {
      url: '/page2',
      templateUrl: '/page2.html',
      controller: 'MainCtrl'
    })
    .state('page3', {
      url: '/page3',
      templateUrl: '/page3.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);