"use strict";
var FlightEditController = (function () {
    function FlightEditController($stateParams) {
        this.info = "Willkommen!";
        this.id = $stateParams.id;
    }
    return FlightEditController;
}());
exports.FlightEditComponent = {
    controller: FlightEditController,
    template: "\n        <h1>{{$ctrl.info}}</h1>\n\n        <div>Hier k\u00F6nnte auch Ihr Datensatz stehen. ID: {{$ctrl.id}}</div>\n    "
};
//# sourceMappingURL=flight-edit.component.js.map