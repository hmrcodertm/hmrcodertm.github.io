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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _appointment_manageappointment_manageappointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment/manageappointment/manageappointment.component */ "./src/app/appointment/manageappointment/manageappointment.component.ts");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'appointment/:id', component: _appointment_manageappointment_manageappointment_component__WEBPACK_IMPORTED_MODULE_4__["ManageappointmentComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-info fixed-top\">\n  <a class=\"navbar-brand\">#B</a>\n  <button class=\"navbar-toggler\" data-target=\"#my-nav\" data-toggle=\"collapse\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div id=\"my-nav\" class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"home\" ><i class=\"fas fa-home\"> Home</i></a>\n      </li>\n      <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"appointments\" ><i class=\"fas fa-home\"> Appointments</i></a>\n        </li>\n    </ul>\n\n    <ul class=\"navbar-nav\">\n      <app-account [show]=\"'icon'\"></app-account>\n    </ul>\n  </div>\n</nav>\n<br>\n<br>\n<br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
/* harmony import */ var _appointment_createappointment_createappointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appointment/createappointment/createappointment.component */ "./src/app/appointment/createappointment/createappointment.component.ts");
/* harmony import */ var _appointment_searchappointment_searchappointment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appointment/searchappointment/searchappointment.component */ "./src/app/appointment/searchappointment/searchappointment.component.ts");
/* harmony import */ var _appointment_manageappointment_manageappointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment/manageappointment/manageappointment.component */ "./src/app/appointment/manageappointment/manageappointment.component.ts");
/* harmony import */ var _appointment_applyappointment_applyappointment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appointment/applyappointment/applyappointment.component */ "./src/app/appointment/applyappointment/applyappointment.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_8__["AppointmentComponent"],
                _appointment_createappointment_createappointment_component__WEBPACK_IMPORTED_MODULE_9__["CreateappointmentComponent"],
                _appointment_searchappointment_searchappointment_component__WEBPACK_IMPORTED_MODULE_10__["SearchappointmentComponent"],
                _appointment_manageappointment_manageappointment_component__WEBPACK_IMPORTED_MODULE_11__["ManageappointmentComponent"],
                _appointment_applyappointment_applyappointment_component__WEBPACK_IMPORTED_MODULE_12__["ApplyappointmentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointment/applyappointment/applyappointment.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/appointment/applyappointment/applyappointment.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appointment/applyappointment/applyappointment.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/appointment/applyappointment/applyappointment.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcGx5YXBwb2ludG1lbnQvYXBwbHlhcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/appointment/applyappointment/applyappointment.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/appointment/applyappointment/applyappointment.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApplyappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyappointmentComponent", function() { return ApplyappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appointments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appointments.service */ "./src/app/appointment/appointments.service.ts");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");




var ApplyappointmentComponent = /** @class */ (function () {
    function ApplyappointmentComponent(LS, APPS, cdr) {
        this.LS = LS;
        this.APPS = APPS;
        this.cdr = cdr;
        this.appointment = null;
    }
    ApplyappointmentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApplyappointmentComponent.prototype, "appointment", void 0);
    ApplyappointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applyappointment',
            template: __webpack_require__(/*! ./applyappointment.component.html */ "./src/app/appointment/applyappointment/applyappointment.component.html"),
            styles: [__webpack_require__(/*! ./applyappointment.component.scss */ "./src/app/appointment/applyappointment/applyappointment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _appointments_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ApplyappointmentComponent);
    return ApplyappointmentComponent;
}());



/***/ }),

/***/ "./src/app/appointment/appointment.component.html":
/*!********************************************************!*\
  !*** ./src/app/appointment/appointment.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  appointment works!\n</p>\n"

/***/ }),

/***/ "./src/app/appointment/appointment.component.scss":
/*!********************************************************!*\
  !*** ./src/app/appointment/appointment.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/appointment/appointment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/appointment/appointment.component.ts ***!
  \******************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent() {
    }
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! ./appointment.component.html */ "./src/app/appointment/appointment.component.html"),
            styles: [__webpack_require__(/*! ./appointment.component.scss */ "./src/app/appointment/appointment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/appointment/appointments.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/appointment/appointments.service.ts ***!
  \*****************************************************/
/*! exports provided: AppointmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsService", function() { return AppointmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AppointmentsService = /** @class */ (function () {
    function AppointmentsService(LS) {
        this.LS = LS;
        this.appointments = {};
    }
    AppointmentsService.prototype.createAppointment = function (Name) {
        this.LS.http.post(this.LS.serverurl + 'api/auth/appointments/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('name', Name), {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    AppointmentsService.prototype.searchAppointment = function (Name) {
        return this.LS.http.get(this.LS.serverurl + 'api/auth/appointments/search/?key=' + Name, {
            headers: this.LS.getHeaders()
        });
    };
    AppointmentsService.prototype.getAppointment = function (pk) {
        return this.LS.http.get(this.LS.serverurl + 'api/auth/appointments/' + pk + '/', {
            headers: this.LS.getHeaders()
        });
    };
    AppointmentsService.prototype.applyAppointment = function (appointment_url, name) {
        return this.LS.http.post(this.LS.serverurl + 'api/auth/appointmentregister/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("appointment", appointment_url)
            .set("details", name), {
            headers: this.LS.getHeaders()
        });
    };
    AppointmentsService.prototype.getAppointmentRegister = function (appointmentRegisterUrl) {
        return this.LS.http.get(appointmentRegisterUrl, {
            headers: this.LS.getHeaders()
        });
    };
    AppointmentsService.prototype.updateAppointment = function (url, name, time_begin, time_end) {
        return this.LS.http.patch(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", name)
            .set("time_begin", time_begin)
            .set("time_end", time_end), {
            headers: this.LS.getHeaders()
        });
    };
    AppointmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppointmentsService);
    return AppointmentsService;
}());



/***/ }),

/***/ "./src/app/appointment/createappointment/createappointment.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/appointment/createappointment/createappointment.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n            Create new Appointment\n        </div>\n        \n<div class=\"card-body\">\n    <div class=\"input-group\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Appointment Name\" #appName>\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-success\" (click)=\"APPS.createAppointment(appName.value)\"><i class=\"fas fa-plus\"></i></button>\n                </div>\n            </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/appointment/createappointment/createappointment.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/appointment/createappointment/createappointment.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2NyZWF0ZWFwcG9pbnRtZW50L2NyZWF0ZWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/appointment/createappointment/createappointment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/appointment/createappointment/createappointment.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateappointmentComponent", function() { return CreateappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _appointments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appointments.service */ "./src/app/appointment/appointments.service.ts");




var CreateappointmentComponent = /** @class */ (function () {
    function CreateappointmentComponent(LS, APPS) {
        this.LS = LS;
        this.APPS = APPS;
    }
    CreateappointmentComponent.prototype.ngOnInit = function () {
    };
    CreateappointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createappointment',
            template: __webpack_require__(/*! ./createappointment.component.html */ "./src/app/appointment/createappointment/createappointment.component.html"),
            styles: [__webpack_require__(/*! ./createappointment.component.scss */ "./src/app/appointment/createappointment/createappointment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _appointments_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentsService"]])
    ], CreateappointmentComponent);
    return CreateappointmentComponent;
}());



/***/ }),

/***/ "./src/app/appointment/manageappointment/manageappointment.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/appointment/manageappointment/manageappointment.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!LS.islogged\">\n  <div class=\"text-danger\">Please login before continueing</div>\n</ng-container>\n<ng-container *ngIf=\"this.appointment!=null && LS.islogged\">\n  <ng-container *ngIf=\"appointment.creator == LS.data.user.url\"> \n\n    <!-- The visiting user is an admin -->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <input class=\"form-control\" [attr.value]=\"this.appointment.name\" #upName>\n                </div>\n                <div class=\"card-body\">\n                  <input type=\"datetime-local\" class=\"form-control\" [attr.value]=\"this.appointment.time_begin\" #upt1>\n                  <input type=\"datetime-local\" class=\"form-control\" [attr.value]=\"this.appointment.time_end\" #upt2>\n                </div>\n                <div class=\"card-footer\">\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"update(upName.value, upt1.value, upt2.value)\"><i class=\"fas fa-save\"></i></button>\n                  <button class=\"btn btn-danger\" type=\"button\"><i class=\"fas fa-trash\"></i></button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-9\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h6>{{now|date:'short'}}</h6>\n                  <div *ngIf=\"!started\">\n                    <button class=\"btn btn-success\" (click)=\"startAppointing()\" type=\"button\">Start Appointing</button>\n                  </div>\n                  <div class=\"card\" *ngIf=\"started\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <img [attr.src]=\"currentAppointee?.user?.info.picture\" alt=\"\" class=\"card-image-top\">\n                      </div>\n                      <div class=\"col-md-6\">\n                        <span>Current Appointee Name : {{currentAppointee?.registered_details?.details}}</span><br>\n                        <span>Time Spent: {{time_count}} seconds</span>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button (click)=\"appointeeComplete()\" class=\"btn btn-success\" type=\"button\"><i class=\"fas fa-check\"></i></button>\n                        <button *ngIf=\"started && !paused\" (click)=\"paused=true\" class=\"btn btn-primary\" type=\"button\"><i class=\"fas fa-pause\"></i></button>\n                        <button  *ngIf=\"started && paused\" (click)=\"paused=false\" class=\"btn btn-primary\" type=\"button\"><i class=\"fas fa-play\"></i></button>\n                        <button class=\"btn btn-danger\" type=\"button\"><i class=\"fas fa-times\"></i></button>\n                      </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Number</th>\n                      <th>Name</th>\n                      <th>Appointment Time</th>\n                      <th>Status</th>\n                      <th>Time Spent</th>\n                    </tr>\n                  </thead>\n                    <tr *ngFor=\"let x of appointmentRegisterList\">\n                      <td>{{x.line_index}}</td>\n                      <td>{{x.details}}</td>\n                      <td>{{x.approx_time|date:'short'}}</td>\n                      <td>\n                        <i *ngIf=\"x.status==0\" class=\"fas fa-clock\"></i>\n                        <i *ngIf=\"x.status==1\" class=\"fas fa-pencil-alt\"></i>\n                        <i *ngIf=\"x.status==2\" class=\"fas fa-user-minus\"></i>\n                        <i *ngIf=\"x.status==3\" class=\"fas fa-check\"></i>\n                      </td>\n                      <td>{{x.time_utilized}} seconds</td>\n                    </tr>\n                    </table>\n            </div>\n          </div>\n      \n    </div>\n    \n\n  </ng-container>\n  <ng-container *ngIf=\"appointment.creator != LS.data.user.url\"> \n  \n    <!-- The visiting user is not an admin -->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              <!--app-applyappointment [appointment]=\"appointment\"></app-applyappointment-->\n              <div class=\"card\">\n                  <div class=\"card-header\">\n                    Apply to {{appointment.name}} with\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Name</span>\n                          </div>\n                          <input class=\"form-control\" type=\"text\" #appName placeholder=\"Your Name here\" [attr.value]=\"LS.data.user.name\">\n                          <div class=\"input-group-append\">\n                            <button class=\"btn btn-success input-group-text\" (click)=\"apply(appName.value)\"><i class=\"fas fa-check\"></i></button>\n                          </div>\n                        </div>\n                  </div>\n                </div>\n            </div>\n            <div class=\"col-md-9\">\n                <table class=\"table\">\n                    <tr *ngFor=\"let x of appointmentRegisterList\">\n                      <td>{{x.line_index}}</td>\n                      <td>{{x.details}}</td>\n                      <td>{{x.approx_time|date:'short'}}</td>\n                    </tr>\n                    </table>\n            </div>\n          </div>    \n    </div>\n  \n  \n  </ng-container>\n</ng-container>"

/***/ }),

/***/ "./src/app/appointment/manageappointment/manageappointment.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/appointment/manageappointment/manageappointment.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L21hbmFnZWFwcG9pbnRtZW50L21hbmFnZWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/appointment/manageappointment/manageappointment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/appointment/manageappointment/manageappointment.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageappointmentComponent", function() { return ManageappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _appointments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appointments.service */ "./src/app/appointment/appointments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ManageappointmentComponent = /** @class */ (function () {
    function ManageappointmentComponent(LS, APPS, router, activatedRoute, cdr) {
        this.LS = LS;
        this.APPS = APPS;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.appointment = null;
        this.appointmentRegisterList = [];
        this.currentAppointee = {};
        this.started = false;
        this.paused = false;
        this.time_count = 0;
        this.time_paused = 0;
        this.now = null;
        LS.addChild(this);
    }
    ManageappointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pk = this.activatedRoute.snapshot.params['id'];
        this.APPS.getAppointment(this.pk).subscribe(function (data) {
            data['time_begin'] = new Date(data['time_begin']).toISOString().substring(0, 16);
            data['time_end'] = new Date(data['time_end']).toISOString().substring(0, 16);
            _this.appointment = data;
            var _loop_1 = function (x) {
                _this.APPS.getAppointmentRegister(x).subscribe(function (data2) {
                    data2['approx_time'] = new Date(data2['approx_time'].slice(0, data2['approx_time'].length - 2));
                    _this.appointmentRegisterList.push(data2);
                    if (data['registered_users'].indexOf(x) == data['registered_users'].length - 1) {
                        _this.appointmentRegisterList.sort(function (a, b) {
                            return a['line_index'] - b['line_index'];
                        });
                        _this.getCurrentAppointee();
                    }
                });
            };
            // now getting all appointments
            for (var _i = 0, _a = data['registered_users']; _i < _a.length; _i++) {
                var x = _a[_i];
                _loop_1(x);
            }
        });
        var self = this;
        setInterval(function () { self.tick(self); }, 1000);
    };
    ManageappointmentComponent.prototype.getCurrentAppointee = function () {
        var _this = this;
        var _loop_2 = function (x) {
            if (x.status == 0) {
                this_1.LS.http.get(x.registered_user, { headers: this_1.LS.getHeaders() }).subscribe(function (data) {
                    data['info'] = JSON.parse(data['info']);
                    _this.currentAppointee['registered_details'] = x;
                    _this.currentAppointee['user'] = data;
                });
                return "break";
            }
        };
        var this_1 = this;
        // check from top to bottom to find where status = 0
        for (var _i = 0, _a = this.appointmentRegisterList; _i < _a.length; _i++) {
            var x = _a[_i];
            var state_1 = _loop_2(x);
            if (state_1 === "break")
                break;
        }
    };
    ManageappointmentComponent.prototype.update = function (name, time_begin, time_end) {
        var _this = this;
        this.APPS.updateAppointment(this.appointment.url, name, time_begin, time_end).subscribe(function (data) {
            data['time_begin'] = new Date(data['time_begin']).toISOString().substring(0, 16);
            data['time_end'] = new Date(data['time_end']).toISOString().substring(0, 16);
            _this.appointment = data;
        });
    };
    ManageappointmentComponent.prototype.apply = function (name) {
        var _this = this;
        this.APPS.applyAppointment(this.appointment.url, name).subscribe(function (data) {
            console.log(data);
            _this.appointmentRegisterList.push(data);
        });
    };
    ManageappointmentComponent.prototype.refresh = function () {
        this.cdr.detectChanges();
    };
    ManageappointmentComponent.prototype.tick = function (self) {
        self.now = new Date();
        if (self.started && !self.paused)
            self.time_count++;
        else if (self.started && self.paused)
            self.time_paused++;
    };
    ManageappointmentComponent.prototype.startAppointing = function () {
        this.getCurrentAppointee();
        this.started = true;
    };
    ManageappointmentComponent.prototype.appointeeComplete = function () {
        this.started = false;
        this.LS.http.post(this.currentAppointee['registered_details'].url + 'complete/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set("time_spent", this.time_count + "")
            .set("time_paused", this.time_paused + ""), {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            window.location.reload();
        });
    };
    ManageappointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manageappointment',
            template: __webpack_require__(/*! ./manageappointment.component.html */ "./src/app/appointment/manageappointment/manageappointment.component.html"),
            styles: [__webpack_require__(/*! ./manageappointment.component.scss */ "./src/app/appointment/manageappointment/manageappointment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _appointments_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ManageappointmentComponent);
    return ManageappointmentComponent;
}());



/***/ }),

/***/ "./src/app/appointment/searchappointment/searchappointment.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/appointment/searchappointment/searchappointment.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n            Search for Appointment\n        </div>\n        \n<div class=\"card-body\">\n    <div class=\"input-group\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Recipient's text\" aria-label=\"Recipient's \" #searchName>\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-success\" (click)=\"search(searchName.value)\" ><i class=\"fas fa-search\"></i></button>\n                </div>\n            </div>\n</div>\n</div>\n<div class=\"card\" *ngIf=\"searchList.length!=0\">\n  <div class=\"card-header\">\n    For your query {{ searchName.value }}, we found these results:\n  </div>\n  <div class=\"card-body\">\n    <table class=\"table\">\n    <tr *ngFor=\"let x of searchList\">\n      <td>{{x.name}}</td>\n      <td *ngIf=\"x.creator==LS.data.user.url\"> <a routerLink=\"/appointment/{{x.pk}}\"> Manage</a></td>\n      <td *ngIf=\"x.creator!=LS.data.user.url\"> <a routerLink=\"/appointment/{{x.pk}}\"> Register</a></td>\n      \n    </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/appointment/searchappointment/searchappointment.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/appointment/searchappointment/searchappointment.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L3NlYXJjaGFwcG9pbnRtZW50L3NlYXJjaGFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/appointment/searchappointment/searchappointment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/appointment/searchappointment/searchappointment.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchappointmentComponent", function() { return SearchappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _appointments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appointments.service */ "./src/app/appointment/appointments.service.ts");




var SearchappointmentComponent = /** @class */ (function () {
    function SearchappointmentComponent(LS, APPS) {
        this.LS = LS;
        this.APPS = APPS;
        this.searchList = [];
    }
    SearchappointmentComponent.prototype.ngOnInit = function () {
    };
    SearchappointmentComponent.prototype.search = function (Name) {
        var _this = this;
        this.APPS.searchAppointment(Name).subscribe(function (data) {
            _this.searchList = data;
        });
    };
    SearchappointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchappointment',
            template: __webpack_require__(/*! ./searchappointment.component.html */ "./src/app/appointment/searchappointment/searchappointment.component.html"),
            styles: [__webpack_require__(/*! ./searchappointment.component.scss */ "./src/app/appointment/searchappointment/searchappointment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _appointments_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentsService"]])
    ], SearchappointmentComponent);
    return SearchappointmentComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!LS.islogged\">\r\n    <h1>U must be logged in to continue</h1>\r\n</ng-container>\r\n<ng-container *ngIf=\"LS.islogged\">\r\n    <div class=\"row card-body\">\r\n        <div class=\"col-md-4\">\r\n            <app-searchappointment></app-searchappointment>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <app-createappointment></app-createappointment>\r\n\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    My active appointments\r\n                </div>\r\n\r\n                <div class=\"card-body\">\r\n                    <div class=\"input-group\">\r\n                        <h5 class=\"text-danger\">You dont have any active appointments</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(LS, cdr) {
        this.LS = LS;
        this.cdr = cdr;
        LS.addChild(this);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.refresh = function () {
        this.cdr.detectChanges();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/account/account.component.html":
/*!******************************************************!*\
  !*** ./src/app/login/account/account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show=='icon'\">\r\n  <div class=\"nav-item dropdown\">\r\n    <a class=\"nav-link dropdown-toggle\" style=\"padding:0;\" href=\"javascript:void(0)\" id=\"navbarDropdown\" role=\"button\"\r\n      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <i *ngIf=\"!LS.islogged\" class='fas fa-user'></i>\r\n      <img *ngIf=\"LS.islogged\" class=\"account-image-small\" src=\"{{LS.data.user.info.picture}}\">\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n      <a class=\"dropdown-item fab fa-google text-primary\" href=\"javascript:void(0)\" (click)=\"AC.login()\"\r\n        *ngIf=\"!LS.islogged\">\r\n        <div style=\"margin-left:5px;\">Login </div>\r\n      </a>\r\n      <!--div class=\"dropdown-divider\" *ngIf=\"LS.islogged\"></div-->\r\n      <a class=\"dropdown-item fas fa-sign-out-alt text-danger\" (click)=\"AC.logout()\" *ngIf=\"LS.islogged\"\r\n        href=\"javascript:void(0)\">\r\n        <div style=\"margin-left:5px;\">Logout</div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show=='dashboard'\">\r\n  <div class=\"nav-link btn\">\r\n    <i class=\"fab fa-google text-primary\" href=\"javascript:void(0)\" (click)=\"AC.login()\" *ngIf=\"!LS.islogged\">\r\n      <div style=\"margin-left:5px;\">Login</div>\r\n    </i>\r\n    <i class=\"fas text-primary\" href=\"javascript:void(0)\" *ngIf=\"LS.islogged\">\r\n      <div style=\"margin-right:5px;\">{{LS.data.user.info.name}}</div>\r\n    </i>\r\n    <img *ngIf=\"LS.islogged\" class=\"account-image-small\" (click)=\"AC.logout();\" src=\"{{LS.data.user.info.picture}}\">\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/login/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login/account/account.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-image-small {\n  width: 40px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYWNjb3VudC9EOlxcR292aW5kIFNpbmdoXFxEb2N1bWVudHNcXENvZGVUTVxcZnJvbnQvc3JjXFxhcHBcXGxvZ2luXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtaW1hZ2Utc21hbGx7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./src/app/login/account/account.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login/login.service.ts");




//import { AccountService } from '../about/account.service';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(cdr, AC, LS) {
        this.cdr = cdr;
        this.AC = AC;
        this.LS = LS;
        LS.addChild(this);
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
        this.AC.startApp();
    };
    AccountComponent.prototype.refresh = function () {
        this.cdr.detectChanges();
        console.log(this.LS.islogged, "\n CDR was called account component");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountComponent.prototype, "show", void 0);
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/login/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/login/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/login/account/account.service.ts":
/*!**************************************************!*\
  !*** ./src/app/login/account/account.service.ts ***!
  \**************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login/login.service.ts");




var AccountService = /** @class */ (function () {
    function AccountService(http, LS) {
        this.http = http;
        this.LS = LS;
        this.users = [];
        this.initialized = false;
        console.log("AC was called");
        var self = this;
        if (this.initialized)
            return;
        this.initialized = true;
        this.startApp = function () {
            window['gapi'].load('auth2', function () {
                window['auth2'] = window['gapi'].auth2.init({
                    client_id: '373414904977-111r6novs7i5v191pvmp1cp1bluv0tt3.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                });
                window['auth2'].isSignedIn.listen(function (val) { self.signinChanged(val, self); });
                window['auth2'].currentUser.listen(function (val) { return self.userChanged(val, self); });
                if (window['auth2'].isSignedIn.get() == true) {
                    // check login service that if user is logged or not
                    if (self.LS.islogged) {
                        // nothing to do from server side
                    }
                    else {
                        // user not already logged, so google login now note: login can still be denied from LS
                        console.log("Calling login");
                        self.LS.google_login(window['auth2'].currentUser.get().getAuthResponse().id_token);
                    }
                }
            });
        };
        console.log("Service called once");
    }
    AccountService.prototype.getAllUsers = function () {
    };
    AccountService.prototype.signinChanged = function (val, self) {
        /**
         * on refresh if
         *  user is logged : it will be called
         *  user is not logged : it wont be called
         * on login change: it will be called
         */
        console.log("I was called", val);
        try {
            if (val) {
                // user is signed in
                self.LS.google_login(window['auth2'].currentUser.get().getAuthResponse().id_token);
            }
            else {
                // user is logged out, first logout from LS
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    AccountService.prototype.google_success = function (googleUser) {
        console.log(googleUser);
    };
    AccountService.prototype.google_failed = function (error) {
        console.log(error);
    };
    AccountService.prototype.logout = function () {
        console.log("AC logout called");
        window['auth2'].signOut();
        this.LS.logout((function () {
            console.log("Logging out from");
        }));
    };
    AccountService.prototype.login = function () {
        // check if google already logged? then logout
        if (window['auth2'].isSignedIn.get())
            window['auth2'].signOut();
        window['auth2'].signIn();
    };
    AccountService.prototype.userChanged = function (val, self) {
        if (!val.isSignedIn()) {
            self.user = null;
            self.islogged = false;
            return;
        }
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/login/account/account.component.ts");




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// var $:any;
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverurl = "https://hashappoint.herokuapp.com/";
        this.data = {
            user: null,
            token: null
        };
        this.is_staff = false;
        this.islogged = false;
        this.verified = false;
        this.after_verify = [];
        //refresh childs
        this.child_elements = [];
        this.serverurl = "http://localhost:8000/";
        // check if user details present or not
        var token = localStorage.getItem('auth_token');
        //user = localStorage.getItem('auth_user');
        if (token == null) {
            // user is not logged
            this.islogged = false;
            this.verified = true;
        }
        else {
            this.check_user(token);
        }
    }
    LoginService.prototype.check_user = function (token, self) {
        if (self === void 0) { self = this; }
        // check the server for user details
        this.http.get(this.serverurl + 'api/auth/user2/status/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Token ' + token)
        }).subscribe(function (data) {
            try {
                self.is_staff = data['is_staff'];
                console.log("Status found from server: ", data);
                self.data.token = token;
                self.data.user = data['user'];
                self.data.user.info = JSON.parse(data['user'].info);
                self.islogged = true;
                localStorage.setItem('auth_token', token);
                console.log(self.data.user);
                self.refresh();
            }
            catch (e) {
                console.log(e);
            }
        }, function (error) {
            console.log('errors occured', error);
            self.islogged = false;
            // remove un-necessary token
            localStorage.removeItem('auth_token');
            self.verified = true;
        }, function () {
            self.verified = true;
            console.log("User is verified now ");
            for (var _i = 0, _a = self.after_verify; _i < _a.length; _i++) {
                var x = _a[_i];
                x();
            }
            self.after_verify = [];
        });
    };
    LoginService.prototype.google_signup = function (id_token, self) {
        if (self === void 0) { self = this; }
        if (this.islogged) {
            // already logged in
            alert("You must logout before creating any new account");
        }
        else {
            // rest is same as google login
            this.google_login(id_token, self);
        }
    };
    LoginService.prototype.google_login = function (id_token, self) {
        if (self === void 0) { self = this; }
        // login only if verified == true
        console.log('Google Login called', self.verified, self.islogged);
        if (self.verified == false) {
            console.log("User is not verified from server yet, so pushing the login to queue");
            self.after_verify.push(function () { self.google_login(id_token); });
        }
        else {
            // user is verified
            if (self.islogged) {
                console.log("user is already logged in, aborting!!!");
            }
            else {
                // its verified that user is not logged, so googl loging in now...
                //console.log('I was here');
                self.verified = false;
                self.http.post(self.serverurl + 'api/googlelogin/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_token', id_token), {}).subscribe(function (data) {
                    self.check_user(data['token']);
                });
            }
        }
    };
    LoginService.prototype.onLoginSuccess = function (token) {
        this.islogged = true;
    };
    LoginService.prototype.up_login = function (username, password) {
        if (this.islogged) {
            alert("User is already logged!!");
        }
    };
    LoginService.prototype.logout = function (after) {
        var _this = this;
        if (after === void 0) { after = function () { }; }
        this.http.post(this.serverurl + 'api/logout/', {}, { headers: this.getHeaders() }).subscribe(function (data) {
            after();
            console.log("After logout, result fetched from server");
            _this.islogged = false;
            _this.data.user = null;
            _this.refresh();
        });
    };
    LoginService.prototype.getHeaders = function () {
        if (this.islogged)
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "Token " + this.data.token);
        else
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    };
    LoginService.prototype.login = function () {
    };
    LoginService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    LoginService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Govind Singh\Documents\CodeTM\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map