var app = angular.module("ngFriends");

app.controller('FriendCtrl', function($scope, friendsService){
	$scope.test = "Boo!";

	$scope.search = '';

	$scope.searchAtt = '';
	$scope.searchBool = '';

	$scope.friends = friendsService.getFriends();
});




