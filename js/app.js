/**
 * Created by chenwenjie on 2015/4/17.
 */
angular.module('cwj-starter',['ui.router','cwj-controllers'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider.
            state('home', {
                url:'/home',
                templateUrl:'templates/home.html',
                controller:'HomeController'
            })
        $urlRouterProvider.otherwise("/home");
}])