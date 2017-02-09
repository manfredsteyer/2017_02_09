import * as angular from 'angular';
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';
import { FlightEditComponent } from "./flight-edit/flight-edit.component";
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightService } from './flight-search/flight.service';

var uc2 = angular.module('uc2', ['ui.router']);

var app = angular.module('flight-app', ['ui.router', 'uc2']);

app.component('flightSearch', FlightSearchComponent);
app.component('home', HomeComponent);
app.component('app', AppComponent);
app.component('flightEdit', FlightEditComponent);
app.component('flightCard', FlightCardComponent);
app.service('flightService', FlightService);

app.config(function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {

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
