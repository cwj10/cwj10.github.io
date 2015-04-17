/**
 * Created by chenwenjie on 2015/4/17.
 */
angular.module('cwj-controllers',[])
.controller('HomeController',['$scope',function($scope){
    $scope.user = {
        'username':"cwj's blog",
        'summary':'Android'
    }
    var ref = new Firebase('https://cwj.firebaseio.com/');

    $scope.commitMsg = function(){
        //ref.push({name: $scope.user.username, text: $scope.user.summary});
        var childRef = ref.child('user');
        childRef.set($scope.user,function(){
            alert({})
        });
    }
}])