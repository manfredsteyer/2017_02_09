"use strict";
var HomeController = (function () {
    function HomeController() {
        this.info = "Willkommen!!";
    }
    return HomeController;
}());
exports.HomeComponent = {
    controller: HomeController,
    template: '<h1>{{$ctrl.info}}</h1>'
};
//# sourceMappingURL=home.component.js.map