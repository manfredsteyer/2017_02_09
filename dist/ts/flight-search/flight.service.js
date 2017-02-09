"use strict";
var FlightService = (function () {
    /*
        private $http: angular.IHttpService;
    
        constructor($http: angular.IHttpService) {
            this.$http = $http;
        }
    */
    function FlightService($http) {
        this.$http = $http;
    }
    FlightService.prototype.find = function (from, to) {
        var url = "http://www.angular.at/api/flight";
        var params = {
            from: from,
            to: to
        };
        return this.$http
            .get(url, { params: params });
    };
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map