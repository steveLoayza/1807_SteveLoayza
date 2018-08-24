(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tests/tests.component */ "./src/app/tests/tests.component.ts");
/* harmony import */ var _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-detail/test-detail.component */ "./src/app/test-detail/test-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'detail/:id', component: _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_4__["TestDetailComponent"] },
    { path: 'tests', component: _tests_tests_component__WEBPACK_IMPORTED_MODULE_3__["TestsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/tests\">Tests</a>\n  <a href=\"/angularApp/dist/angularApp/tmp/screenshots/report.html\">Protractor Tests</a>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n\n<br>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'angularApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-detail/test-detail.component */ "./src/app/test-detail/test-detail.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tests/tests.component */ "./src/app/tests/tests.component.ts");
/* harmony import */ var _test_search_test_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test-search/test-search.component */ "./src/app/test-search/test-search.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _tests_tests_component__WEBPACK_IMPORTED_MODULE_10__["TestsComponent"],
                _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_9__["TestDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
                _test_search_test_search_component__WEBPACK_IMPORTED_MODULE_11__["TestSearchComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 0px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 100px;\r\n    min-width: 50px;\r\n    background-color: rgb(2, 14, 20);\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #EEE;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Assignforce Tests</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let test of tests\" class=\"col-1-4\"\n      routerLink=\"/detail/{{test.id}}\">\n    <div class=\"module test\">\n      <h4>{{test.name}}</h4>\n    </div>\n  </a>\n</div>\n\n<app-test-search></app-test-search>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(testService) {
        this.testService = testService;
        this.tests = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTests();
    };
    DashboardComponent.prototype.getTests = function () {
        var _this = this;
        this.testService.getTests()
            .subscribe(function (tests) { return _this.tests = tests.slice(1, 20); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tests = [
            { id: 1, name: 'SVPLogin Passed' },
            { id: 2, name: 'SVPOverview Passed' },
            { id: 3, name: 'SVPBatches Passed' },
            { id: 4, name: 'SVPLocations Passed' },
            { id: 5, name: 'SVPCurricula Passed' },
            { id: 6, name: 'SVPTrainers Passed' },
            { id: 7, name: 'SVPProfiles Passed' },
            { id: 8, name: 'TestReportPage Passed' },
            { id: 9, name: 'TestSVPSettingsPage Passed' },
            { id: 10, name: 'logout Passed' },
            { id: 12, name: 'TrainerLogin Passed' },
            { id: 12, name: 'TrainerOverview Passed' },
            { id: 13, name: 'TrainerBatches Passed' },
            { id: 14, name: 'TrainerLocations Passed' },
            { id: 15, name: 'TrainerCurricula Passed' },
            { id: 16, name: 'TrainerTrainers Passed' },
            { id: 17, name: 'TrainerProfiles Passed' },
            { id: 18, name: 'TestReportPage Passed' },
            { id: 19, name: 'TestTrainerSettingsPage Passed' },
            { id: 20, name: 'logout Passed' }
        ];
        return { tests: tests };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n    color: red;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: crimson;\r\n    font-family: Cambria, Georgia;\r\n  }\r\nbutton.clear {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #aaa;\r\n    cursor: auto;\r\n  }\r\nbutton.clear {\r\n    color: #888;\r\n    margin-bottom: 12px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <!-- <h2>Messages</h2> -->\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/test-detail/test-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/test-detail/test-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\n  input {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\n  button {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/test-detail/test-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/test-detail/test-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"test\">\r\n  <h2>{{test.name | uppercase}} Details</h2>\r\n  <div><span>id: </span>{{test.id}}</div>\r\n  <div>\r\n    <!-- <label>name:\r\n      <input [(ngModel)]=\"test.name\" placeholder=\"name\"/>\r\n    </label> -->\r\n    <button (click)=\"goBack()\">go back</button>\r\n  <!-- <button (click)=\"save()\">save</button> -->\r\n    <a target=\"_blank\" href=\"test-detail/report/report.html\">Protractor Tests</a>\r\n\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/test-detail/test-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/test-detail/test-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailComponent", function() { return TestDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test */ "./src/app/test.ts");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestDetailComponent = /** @class */ (function () {
    function TestDetailComponent(route, testService, location) {
        this.route = route;
        this.testService = testService;
        this.location = location;
    }
    TestDetailComponent.prototype.ngOnInit = function () {
        this.getTest();
    };
    TestDetailComponent.prototype.getTest = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.testService.getTest(id)
            .subscribe(function (test) { return _this.test = test; });
    };
    TestDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TestDetailComponent.prototype.save = function () {
        var _this = this;
        this.testService.updateTest(this.test)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _test__WEBPACK_IMPORTED_MODULE_3__["Test"])
    ], TestDetailComponent.prototype, "test", void 0);
    TestDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-detail',
            template: __webpack_require__(/*! ./test-detail.component.html */ "./src/app/test-detail/test-detail.component.html"),
            styles: [__webpack_require__(/*! ./test-detail.component.css */ "./src/app/test-detail/test-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TestDetailComponent);
    return TestDetailComponent;
}());



/***/ }),

/***/ "./src/app/test-search/test-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/test-search/test-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n  \r\n  .search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n  \r\n  .search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .search-result li a:hover {\r\n    color: white;\r\n  }\r\n  \r\n  .search-result li a:active {\r\n    color: white;\r\n  }\r\n  \r\n  #search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n  \r\n  ul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/test-search/test-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/test-search/test-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Test Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let test of tests$ | async\" >\n      <a routerLink=\"/detail/{{test.id}}\">\n        {{test.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/test-search/test-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/test-search/test-search.component.ts ***!
  \******************************************************/
/*! exports provided: TestSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSearchComponent", function() { return TestSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestSearchComponent = /** @class */ (function () {
    function TestSearchComponent(testService) {
        this.testService = testService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TestSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    TestSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tests$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.testService.searchTests(term); }));
    };
    TestSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-search',
            template: __webpack_require__(/*! ./test-search.component.html */ "./src/app/test-search/test-search.component.html"),
            styles: [__webpack_require__(/*! ./test-search.component.css */ "./src/app/test-search/test-search.component.css")]
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]])
    ], TestSearchComponent);
    return TestSearchComponent;
}());



/***/ }),

/***/ "./src/app/test.service.ts":
/*!*********************************!*\
  !*** ./src/app/test.service.ts ***!
  \*********************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TestService = /** @class */ (function () {
    function TestService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.testUrl = 'api/tests'; // URL to web api
    }
    TestService.prototype.getTests = function () {
        var _this = this;
        return this.http.get(this.testUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tests) { return _this.log('fetched tests'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTests', [])));
    };
    TestService.prototype.getTestNo404 = function (id) {
        var _this = this;
        var url = this.testUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (test) { return test[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " test id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTest id=" + id)));
    };
    TestService.prototype.getTest = function (id) {
        var _this = this;
        var url = this.testUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched test id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTest id=" + id)));
    };
    TestService.prototype.searchTests = function (term) {
        var _this = this;
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.testUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found tests matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchTests', [])));
    };
    //////// Save methods //////////
    TestService.prototype.addTest = function (test) {
        var _this = this;
        return this.http.post(this.testUrl, test, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (test) { return _this.log("added test w/ id=" + test.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addTest')));
    };
    TestService.prototype.deleteTest = function (test) {
        var _this = this;
        var id = typeof test === 'number' ? test : test.id;
        var url = this.testUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted test id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteTest')));
    };
    TestService.prototype.updateTest = function (test) {
        var _this = this;
        return this.http.put(this.testUrl, test, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated test id=" + test.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateTest')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TestService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TestService.prototype.log = function (message) {
        this.messageService.add("TestService: " + message);
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/test.ts":
/*!*************************!*\
  !*** ./src/app/test.ts ***!
  \*************************/
/*! exports provided: Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());



/***/ }),

/***/ "./src/app/tests/tests.component.css":
/*!*******************************************!*\
  !*** ./src/app/tests/tests.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tests {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .tests li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .tests li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .tests a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  .tests a:hover {\r\n    color:#607D8B;\r\n  }\r\n  .tests .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  button {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  button.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/tests/tests.component.html":
/*!********************************************!*\
  !*** ./src/app/tests/tests.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Tests</h2>\n\n<div>\n  <label>Test name:\n    <input #testName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <!-- <button (click)=\"add(testName.value); testName.value=''\">\n    add\n  </button> -->\n</div>\n\n<ul class=\"tests\">\n  <li *ngFor=\"let test of tests\">\n    <a routerLink=\"/detail/{{test.id}}\">\n      <span class=\"badge\">{{test.id}}</span> {{test.name}}\n    </a>\n    <button class=\"delete\" title=\"delete test\"\n      (click)=\"delete(test)\">x</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/tests/tests.component.ts":
/*!******************************************!*\
  !*** ./src/app/tests/tests.component.ts ***!
  \******************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestsComponent = /** @class */ (function () {
    function TestsComponent(testService) {
        this.testService = testService;
    }
    TestsComponent.prototype.ngOnInit = function () {
        this.getTests();
    };
    TestsComponent.prototype.getTests = function () {
        var _this = this;
        this.testService.getTests()
            .subscribe(function (tests) { return _this.tests = tests; });
    };
    TestsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.testService.addTest({ name: name })
            .subscribe(function (test) {
            _this.tests.push(test);
        });
    };
    TestsComponent.prototype.delete = function (test) {
        this.tests = this.tests.filter(function (h) { return h !== test; });
        this.testService.deleteTest(test).subscribe();
    };
    TestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tests',
            template: __webpack_require__(/*! ./tests.component.html */ "./src/app/tests/tests.component.html"),
            styles: [__webpack_require__(/*! ./tests.component.css */ "./src/app/tests/tests.component.css")]
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], TestsComponent);
    return TestsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\apps\angularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map