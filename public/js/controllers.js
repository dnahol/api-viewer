'use strict';

var app = angular.module('routerApp');

app.controller('navControl', function($scope) {
  $scope.reloadPage= () => {
    console.log('page reload');
    location.reload();



  };
});


app.controller('listCtrl', function($scope, $stateParams, $state, pageObj, People) {
  console.log('listCtrl!');
  //$scope.page = [{},{},{},{}] array of person objects on that page
  console.log('pageObj: ', pageObj);
  $scope.num = $stateParams.num;
  $scope.page = pageObj;
  

  $scope.goToDetail = person => {
    var id = person.url.slice(-2, -1);
    $scope.status = 'Getting your Star Wars character details! One moment!'
    $state.go('detail', {
      id: id
    });
  }
});


app.controller('detailCtrl', function($scope, $state, person) {
  console.log('detailCtrl!');

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
