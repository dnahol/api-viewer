'use strict';

var app = angular.module('routerApp');

app.service('People', function($http, $q) {
  var people;

  this.getByPage = num => {
    // return people by page;
    // var pageUrl = `//swapi.co/api/people/?page=${num}`
    var pageUrl = `https://swapi.co/api/people/?page=${num}`
    return $http({
      method: 'GET',
      url: pageUrl,
      cache: true
    })
    .then(res => {
      return $q.resolve(res.data.results);
    });
  };

  this.getById = id => {
    // returning a promise
    // var personUrl = `//swapi.co/api/people/${id}`
    var personUrl = `https://swapi.co/api/people/${id}`
    return $http({
      method: 'GET',
      url: personUrl,
      cache: true
    })
    .then(res => {
      return $q.resolve(res.data);
    });




    // return $q((resolve, reject) => {
    //
    //   console.log('name in service: ', name);
    //
    //   var person = $scope.page.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];
    //   console.log('person: ', person );
    //   if(person) {
    //     resolve(person); // trigger .then()
    //   } else {
    //     reject(new Error('Person not found'));  // trigger .catch()
    //   }
    //
    // });
  };
});
