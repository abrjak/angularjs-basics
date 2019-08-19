angular.
module('userList').
component('userList', {
    templateUrl: 'app/user-list/user-list.template.html',
    controller: function UserListController($http) {
        var self = this;
        self.orderProp = 'id';

        $http.get('app/api/getUser.php').then(function (response) {
            self.user = response.data;
        });
    }
});