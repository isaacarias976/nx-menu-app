(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["juego-juego-module"],{

/***/ "./src/app/components/juego/juego.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/juego/juego.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://isaac-tictactoe-app.herokuapp.com/game\" target=\"_blank\"><button class=\"orange\">\n  Jugar ahora!\n</button></a>\n  "

/***/ }),

/***/ "./src/app/components/juego/juego.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/juego/juego.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvanVlZ28vanVlZ28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/juego/juego.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/juego/juego.component.ts ***!
  \*****************************************************/
/*! exports provided: JuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoComponent", function() { return JuegoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JuegoComponent = /** @class */ (function () {
    function JuegoComponent() {
    }
    JuegoComponent.prototype.ngOnInit = function () {
        console.log("asdfbcjsdbvjsdbfkldsbflksdbflksbdlkfbsdjkfbkjñ");
    };
    JuegoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juego',
            template: __webpack_require__(/*! ./juego.component.html */ "./src/app/components/juego/juego.component.html"),
            styles: [__webpack_require__(/*! ./juego.component.scss */ "./src/app/components/juego/juego.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JuegoComponent);
    return JuegoComponent;
}());



/***/ }),

/***/ "./src/app/modules/juego/juego-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/juego/juego-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: JuegoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoRoutingModule", function() { return JuegoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_juego_juego_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/juego/juego.component */ "./src/app/components/juego/juego.component.ts");




var routes = [
    {
        path: '',
        component: src_app_components_juego_juego_component__WEBPACK_IMPORTED_MODULE_3__["JuegoComponent"]
    }
];
var JuegoRoutingModule = /** @class */ (function () {
    function JuegoRoutingModule() {
    }
    JuegoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], JuegoRoutingModule);
    return JuegoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/juego/juego.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/juego/juego.module.ts ***!
  \***********************************************/
/*! exports provided: JuegoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoModule", function() { return JuegoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _next_nx_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next/nx-core */ "./node_modules/@next/nx-core/index.js");
/* harmony import */ var _next_nx_controls_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/nx-controls-common */ "./node_modules/@next/nx-controls-common/index.js");
/* harmony import */ var _juego_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./juego-routing.module */ "./src/app/modules/juego/juego-routing.module.ts");
/* harmony import */ var src_app_components_juego_juego_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/juego/juego.component */ "./src/app/components/juego/juego.component.ts");







var config = {
    usernameLabel: 'BRM',
    usernamePlaceholder: 'Usuario',
    endpoint: '/api',
    application: 'BANREGIOWEBAPP',
    applicationTitle: 'Banregio Web App'
};
var JuegoModule = /** @class */ (function () {
    function JuegoModule() {
    }
    JuegoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_components_juego_juego_component__WEBPACK_IMPORTED_MODULE_6__["JuegoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _juego_routing_module__WEBPACK_IMPORTED_MODULE_5__["JuegoRoutingModule"],
                _next_nx_core__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"].forRoot(config),
                _next_nx_controls_common__WEBPACK_IMPORTED_MODULE_4__["CommonsModule"].forRoot()
            ]
        })
    ], JuegoModule);
    return JuegoModule;
}());



/***/ })

}]);
//# sourceMappingURL=juego-juego-module.js.map