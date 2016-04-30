'use strict';

var app = angular.module('routerApp');

app.service('People', function($http, $q, $scope) {
  var people;
  console.log('$http', $http);
  console.log('$q', $q);
  console.log('$scope', $scope);
  this.getByPage = num => {
    // return people;
    console.log('num:', num);

    var pageUrl = `http://swapi.co/api/people/?page=${num}`

    console.log('pageUrl:', pageUrl);

    return $http.get(pageUrl);
  };

  // this.getByName = name => {
  //   // returning a promise
  //
  //   console.log('$scope.page in service: ',  $scope.page );
  //   return $q((resolve, reject) => {
  //
  //     console.log('name in service: ', name);
  //
  //     var person = $scope.page.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];
  //     console.log('person: ', person );
  //     if(person) {
  //       resolve(person); // trigger .then()
  //     } else {
  //       reject(new Error('Person not found'));  // trigger .catch()
  //     }
  //
  //   });
  // };
});
