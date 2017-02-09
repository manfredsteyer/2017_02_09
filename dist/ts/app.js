"use strict";
var angular = require('angular');
var flight_search_component_1 = require("./flight-search/flight-search.component");
var home_component_1 = require("./home/home.component");
var app_component_1 = require("./app.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_card_component_1 = require('./flight-search/flight-card.component');
var flight_service_1 = require('./flight-search/flight.service');
var uc2 = angular.module('uc2', ['ui.router']);
var app = angular.module('flight-app', ['ui.router', 'uc2']);
app.component('flightSearch', flight_search_component_1.FlightSearchComponent);
app.component('home', home_component_1.HomeComponent);
app.component('app', app_component_1.AppComponent);
app.component('flightEdit', flight_edit_component_1.FlightEditComponent);
app.component('flightCard', flight_card_component_1.FlightCardComponent);
app.service('flightService', flight_service_1.FlightService);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
        url: '/home',
        template: '<home></home>'
    }).state('flightSearch', {
        url: '/flight',
        template: '<flight-search></flight-search>'
    }).state('flightEdit', {
        url: '/flight/:id',
        template: '<flight-edit></flight-edit>'
    });
});
//# sourceMappingURL=app.js.map