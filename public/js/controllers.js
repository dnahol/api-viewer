'use strict';

var app = angular.module('routerApp');

app.controller('navControl', function($scope) {
  $scope.reloadPage= () => {
    console.log('page reload');
    location.reload();
  };
});


app.controller('listCtrl', function($scope, $state, pageObj) {
  console.log('listCtrl!');
  //$scope.page = [{},{},{},{}] array of person objects on that page
  console.log('pageObj.data.results: ', pageObj.data.results);
  $scope.test = People.getByPage(2);
  console.log('test:', test);
  $scope.page = pageObj.data.results;
  //    console.log('$scope.page: ',  $scope.page );
});


app.controller('detailCtrl', function($scope, state) {
  console.log('detailCtrl!');

  var person = $scope.page.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];
  console.log('person: ', person );
  $scope.person = person;
});

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl!');

});

app.controller('contactCtrl', function($scope, $state, SweetAlert) {
  console.log('contactCtrl!');

  $scope.showAlert = () => {
    SweetAlert.swal({
      title: "Are you sure?",
      text: "You want to go home?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, go home!",
      closeOnConfirm: true
    }, function(isConfirm) {
      if(isConfirm) {
        $state.go('home');
      };
    });
  };
});
