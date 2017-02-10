angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.homepage', {
    url: '/homepage',
    views: {
      'tab1': {
        templateUrl: 'templates/homepage.html',
        controller: 'homepageCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/Search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.add', {
    url: '/Add',
    views: {
      'tab3': {
        templateUrl: 'templates/add.html',
        controller: 'addCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.news', {
    url: '/News',
    views: {
      'tab4': {
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/Profile',
    views: {
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/homepage')

  

});