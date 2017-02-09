webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(1);
	var flight_search_component_1 = __webpack_require__(3);
	var home_component_1 = __webpack_require__(5);
	var app_component_1 = __webpack_require__(6);
	var flight_edit_component_1 = __webpack_require__(8);
	var app = angular.module('flight-app', ['ui.router']);
	app.component('flightSearch', flight_search_component_1.FlightSearchComponent);
	app.component('home', home_component_1.HomeComponent);
	app.component('app', app_component_1.AppComponent);
	app.component('flightEdit', flight_edit_component_1.FlightEditComponent);
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


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FlightSearchController = (function () {
	    function FlightSearchController($http) {
	        this.$http = $http;
	        this.from = 'Hamburg';
	        this.to = 'Graz';
	        this.flights = [];
	    }
	    FlightSearchController.prototype.search = function () {
	        var _this = this;
	        var url = "http://www.angular.at/api/flight";
	        var params = {
	            from: this.from,
	            to: this.to
	        };
	        this
	            .$http
	            .get(url, { params: params })
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
	    template: __webpack_require__(4)
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<h1>Search Flights</h1>\r\n\r\n<form name=\"form\" novalidate>\r\n\r\n    <div class=\"form-group\">\r\n        <label>From:</label>\r\n        <input  name=\"from\"\r\n                class=\"form-control\"\r\n                ng-model=\"$ctrl.from\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>To:</label>\r\n        <input\r\n                class=\"form-control\"\r\n                ng-model=\"$ctrl.to\"\r\n                name=\"to\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button\r\n                class=\"btn btn-primary\"\r\n                ng-click=\"$ctrl.search()\">Search!</button>\r\n    </div>\r\n</form>\r\n\r\n\r\n<table class=\"table table-striped\">\r\n    <tr ng-repeat=\"f in $ctrl.flights\" ng-class=\"{'active': f == $ctrl.selectedFlight}\">\r\n        <td>{{f.id}}</td>\r\n        <td>{{f.from}}</td>\r\n        <td>{{f.to}}</td>\r\n        <td>{{f.date | date:'short'}}</td>\r\n        <td><a ng-click=\"$ctrl.select(f)\">Auswählen</a></td>\r\n        <td><a ui-sref=\"flightEdit({id: f.id})\">Editieren</a></td>\r\n    </tr>\r\n</table>\r\n\r\n<pre>Warenkorb\r\n----------------------\r\n{{$ctrl.selectedFlight | json }}\r\n</pre>\r\n";

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var HomeController = (function () {
	    function HomeController() {
	        this.info = "Willkommen!!!!";
	    }
	    return HomeController;
	}());
	exports.HomeComponent = {
	    controller: HomeController,
	    template: '<h1>{{$ctrl.info}}</h1>'
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AppController = (function () {
	    function AppController() {
	    }
	    return AppController;
	}());
	exports.AppComponent = {
	    controller: AppController,
	    template: __webpack_require__(7)
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse\">\r\n\r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n    </button>\r\n\r\n    <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">Flight-App</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li><a ui-sref=\"home\">Home</a></li>\r\n            <li><a ui-sref=\"flightSearch\">Search Flights</a>  </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n\r\n    <div ui-view></div>\r\n\r\n</div>\r\n\r\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

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


/***/ }
]);
//# sourceMappingURL=app.js.map