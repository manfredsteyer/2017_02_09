"use strict";
var FlightSearchController = (function () {
    function FlightSearchController(flightService) {
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.flights = [];
        console.debug('ctor');
    }
    FlightSearchController.prototype.search = function () {
        var _this = this;
        this
            .flightService
            .find(this.from, this.to)
            .then(function (resp) {
            _this.flights = resp.data;
        })
            .catch(function (resp) {
            console.error(resp);
        });
    };
    FlightSearchController.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    return FlightSearchController;
}());
exports.FlightSearchComponent = {
    controller: FlightSearchController,
    template: require('./flight-search.component.html')
};
//# sourceMappingURL=flight-search.component.js.map