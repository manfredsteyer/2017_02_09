import * as angular from 'angular';
import { Flight } from '../entities/flight';

export class FlightService {
/*
    private $http: angular.IHttpService;

    constructor($http: angular.IHttpService) {
        this.$http = $http;
    }
*/
    constructor(
        private $http: angular.IHttpService) {
    }


    find(from: string, to: string) {

        var url = "http://www.angular.at/api/flight";

        var params = {
            from: from,
            to: to
        };

        return this.$http
                   .get<Flight[]>(url, { params });

    }
}