(function(angular) {
  'use strict';
function HeroListController($scope, $element, $attrs) {
  var ctrl = this;

  // This would be loaded by $http etc.
  ctrl.list = [
    {
      name: 'Superman',
      location: ''
    },
    {
      name: 'Batman',
      location: 'Wayne Manor'
    }
  ];

  ctrl.updateHero = function(hero, prop, value) {
    hero[prop] = value;
  };
  
  ctrl.deleteHero = function(hero) {
    var idx = ctrl.list.indexOf(hero);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };
}

function SideKickController() {
  
  var ctrl = this;
  
}

angular.module('heroApp').component('heroList', {
  templateUrl: 'heroList.html',
  controller: HeroListController
});

angular.module('heroApp').component('sideKickList', {
  template: '<h2>Sidekick: {{$ctrl.name}} </h2> <button ng-click="$ctrl.callMe()"> Show Name! </button>',
  controller: SideKickController,
  bindings: {
    name : '@',
    callMe : '='
  }
})
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/