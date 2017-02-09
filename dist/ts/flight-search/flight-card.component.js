"use strict";
var FlightCardController = (function () {
    function FlightCardController() {
    }
    FlightCardController.prototype.select = function () {
        this.selectedItem = this.item;
        this.selectedItemChange({ $event: this.item });
    };
    return FlightCardController;
}());
exports.FlightCardComponent = {
    controller: FlightCardController,
    template: require('./flight-card.component.html'),
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
};
//# sourceMappingURL=flight-card.component.js.map