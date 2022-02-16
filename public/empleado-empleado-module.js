(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empleado-empleado-module"],{

/***/ "./src/app/components/empleado/empleado.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/empleado/empleado.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://admin-users-isaac.herokuapp.com/adminUsers\" target=\"_blank\"><button class=\"orange\">\n  Administrar usuarios\n  </button></a>\n  "

/***/ }),

/***/ "./src/app/components/empleado/empleado.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/empleado/empleado.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbGVhZG8vZW1wbGVhZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/empleado/empleado.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/empleado/empleado.component.ts ***!
  \***********************************************************/
/*! exports provided: EmpleadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadoComponent", function() { return EmpleadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmpleadoComponent = /** @class */ (function () {
    function EmpleadoComponent() {
    }
    EmpleadoComponent.prototype.ngOnInit = function () {
    };
    EmpleadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empleado',
            template: __webpack_require__(/*! ./empleado.component.html */ "./src/app/components/empleado/empleado.component.html"),
            styles: [__webpack_require__(/*! ./empleado.component.scss */ "./src/app/components/empleado/empleado.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmpleadoComponent);
    return EmpleadoComponent;
}());



/***/ }),

/***/ "./src/app/modules/empleado/empleado-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/empleado/empleado-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EmpleadoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadoRoutingModule", function() { return EmpleadoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/empleado/empleado.component */ "./src/app/components/empleado/empleado.component.ts");




var routes = [
    {
        path: '',
        component: src_app_components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_3__["EmpleadoComponent"]
    }
];
var EmpleadoRoutingModule = /** @class */ (function () {
    function EmpleadoRoutingModule() {
    }
    EmpleadoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmpleadoRoutingModule);
    return EmpleadoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/empleado/empleado.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/empleado/empleado.module.ts ***!
  \*****************************************************/
/*! exports provided: EmpleadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadoModule", function() { return EmpleadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _next_nx_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next/nx-core */ "./node_modules/@next/nx-core/index.js");
/* harmony import */ var _next_nx_controls_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/nx-controls-common */ "./node_modules/@next/nx-controls-common/index.js");
/* harmony import */ var src_app_components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/empleado/empleado.component */ "./src/app/components/empleado/empleado.component.ts");
/* harmony import */ var _empleado_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empleado-routing.module */ "./src/app/modules/empleado/empleado-routing.module.ts");







var config = {
    usernameLabel: 'BRM',
    usernamePlaceholder: 'Usuario',
    endpoint: '/api',
    application: 'BANREGIOWEBAPP',
    applicationTitle: 'Banregio Web App'
};
var EmpleadoModule = /** @class */ (function () {
    function EmpleadoModule() {
    }
    EmpleadoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_5__["EmpleadoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _empleado_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmpleadoRoutingModule"],
                _next_nx_core__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"].forRoot(config),
                _next_nx_controls_common__WEBPACK_IMPORTED_MODULE_4__["CommonsModule"].forRoot()
            ]
        })
    ], EmpleadoModule);
    return EmpleadoModule;
}());



/***/ })

}]);
//# sourceMappingURL=empleado-empleado-module.js.map