(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/components/authentication/authentication.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"m-0 vh-100 row justify-content-center align-items-center\">\r\n    <div class=\"col-auto p-5 text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"mb-3\">\r\n          <h5>Usuario</h5>\r\n          <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"formInput1\" placeholder=\"Usuario\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"mb-3\">\r\n          <h5>Contraseña</h5>\r\n          <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"formInput2\" placeholder=\"Contraseña\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n              <button (click)=\"login()\" type=\"button\" class=\"btn btn-outline-dark\">Iniciar sesión</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_service_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/service-login.service */ "./src/app/service/service-login.service.ts");





var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        var userTemp = localStorage.getItem('usuario');
        if (userTemp) {
            if (userTemp !== "null") {
                this.router.navigate(['/']);
            }
        }
    };
    AuthenticationComponent.prototype.login = function () {
        var _this = this;
        if (this.user.username) {
            if (this.user.password) {
                this.userService.auth(this.user).subscribe(function (e) {
                    console.log("Entra?");
                    console.log(e);
                    localStorage.setItem('usuario', e.username);
                    localStorage.setItem('rol', e.rol);
                    _this.router.navigate(['/']);
                });
            }
            else {
                alert("La contraseña es requerida");
            }
        }
        else {
            alert("El nombre de usuario es requerido");
        }
    };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/components/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.scss */ "./src/app/components/authentication/authentication.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_service_login_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");




var routes = [
    {
        path: '',
        component: src_app_components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _next_nx_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @next/nx-core */ "./node_modules/@next/nx-core/index.js");








var config = {
    usernameLabel: 'BRM',
    usernamePlaceholder: 'Usuario',
    endpoint: '/api',
    application: 'BANREGIOWEBAPP',
    applicationTitle: 'Banregio Web App'
};
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _next_nx_core__WEBPACK_IMPORTED_MODULE_7__["FrameworkModule"].forRoot(config)
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/service/service-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/service-login.service.ts ***!
  \**************************************************/
/*! exports provided: ServiceLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLoginService", function() { return ServiceLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServiceLoginService = /** @class */ (function () {
    function ServiceLoginService(http) {
        this.http = http;
        this.url = "https://isaac-spring-admin.herokuapp.com/user/auth";
    }
    ServiceLoginService.prototype.auth = function (post) {
        return this.http.post(this.url, post);
    };
    ServiceLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceLoginService);
    return ServiceLoginService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map