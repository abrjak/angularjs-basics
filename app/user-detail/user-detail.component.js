angular.
module('userDetail').
component('userDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.userId}}</span>',
    controller: ['$routeParams',
        function UserDetailController($routeParams) {
            this.userId = $routeParams.userId;
        }
    ]
});