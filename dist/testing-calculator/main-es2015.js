(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addition/addition.ts":
/*!**************************************!*\
  !*** ./src/app/addition/addition.ts ***!
  \**************************************/
/*! exports provided: addition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addition", function() { return addition; });
function addition(a, b) {
    //Refactoring
    let suma = 0;
    suma = a + b;
    return suma;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ui.component */ "./src/app/ui/ui.component.ts");



class AppComponent {
    constructor() {
        this.title = 'testing-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "osgs - simple calculator\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ui");
    } }, directives: [_ui_ui_component__WEBPACK_IMPORTED_MODULE_1__["UiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/ui.component */ "./src/app/ui/ui.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _ui_ui_component__WEBPACK_IMPORTED_MODULE_3__["UiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _ui_ui_component__WEBPACK_IMPORTED_MODULE_3__["UiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/division/division.ts":
/*!**************************************!*\
  !*** ./src/app/division/division.ts ***!
  \**************************************/
/*! exports provided: division */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "division", function() { return division; });
function division(oper1, oper2) {
    // refactoring
    let div = oper1 / oper2;
    return div;
}


/***/ }),

/***/ "./src/app/exp/exp.ts":
/*!****************************!*\
  !*** ./src/app/exp/exp.ts ***!
  \****************************/
/*! exports provided: exp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
function exp(base, exp) {
    // refactoring
    let pow = 0;
    pow = Math.pow(base, exp);
    return pow;
}


/***/ }),

/***/ "./src/app/multiplication/multiplication.ts":
/*!**************************************************!*\
  !*** ./src/app/multiplication/multiplication.ts ***!
  \**************************************************/
/*! exports provided: multiplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplication", function() { return multiplication; });
function multiplication(oper1, oper2) {
    // refactoring
    let mul = oper1 * oper2;
    return mul;
}


/***/ }),

/***/ "./src/app/sqr/sqr.ts":
/*!****************************!*\
  !*** ./src/app/sqr/sqr.ts ***!
  \****************************/
/*! exports provided: sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return sqr; });
function sqr(oper1) {
    // refactoring
    let sqr = 0;
    sqr = oper1 * oper1;
    return sqr;
}


/***/ }),

/***/ "./src/app/sqrt/sqrt.ts":
/*!******************************!*\
  !*** ./src/app/sqrt/sqrt.ts ***!
  \******************************/
/*! exports provided: sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
function sqrt(oper1) {
    // refactoring
    let sqrt = 0;
    sqrt = Math.sqrt(oper1);
    return (sqrt);
}


/***/ }),

/***/ "./src/app/substraction/substraction.ts":
/*!**********************************************!*\
  !*** ./src/app/substraction/substraction.ts ***!
  \**********************************************/
/*! exports provided: substraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substraction", function() { return substraction; });
function substraction(oper1, oper2) {
    // refactoring
    let subs = 0;
    subs = oper1 - oper2;
    return subs;
}


/***/ }),

/***/ "./src/app/ui/ui.component.ts":
/*!************************************!*\
  !*** ./src/app/ui/ui.component.ts ***!
  \************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _addition_addition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addition/addition */ "./src/app/addition/addition.ts");
/* harmony import */ var _division_division__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../division/division */ "./src/app/division/division.ts");
/* harmony import */ var _substraction_substraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../substraction/substraction */ "./src/app/substraction/substraction.ts");
/* harmony import */ var _multiplication_multiplication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multiplication/multiplication */ "./src/app/multiplication/multiplication.ts");
/* harmony import */ var _exp_exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exp/exp */ "./src/app/exp/exp.ts");
/* harmony import */ var _sqr_sqr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sqr/sqr */ "./src/app/sqr/sqr.ts");
/* harmony import */ var _sqrt_sqrt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sqrt/sqrt */ "./src/app/sqrt/sqrt.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class UiComponent {
    constructor() {
        this.result = 0;
        this.operator1 = 0;
        this.operator2 = 0;
    }
    ngOnInit() {
    }
    addition() {
        let myresult = 0;
        myresult = Object(_addition_addition__WEBPACK_IMPORTED_MODULE_1__["addition"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    substraction() {
        let myresult = 0;
        myresult = Object(_substraction_substraction__WEBPACK_IMPORTED_MODULE_3__["substraction"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    division() {
        let myresult = 0;
        myresult = Object(_division_division__WEBPACK_IMPORTED_MODULE_2__["division"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    multiplication() {
        let myresult = 0;
        myresult = Object(_multiplication_multiplication__WEBPACK_IMPORTED_MODULE_4__["multiplication"])(this.operator1, this.operator2);
        this.result = myresult;
    }
    exp() {
        let myresul = 0;
        myresul = Object(_exp_exp__WEBPACK_IMPORTED_MODULE_5__["exp"])(this.operator1, this.operator2);
        this.result = myresul;
    }
    sqr() {
        let myresul = 0;
        myresul = Object(_sqr_sqr__WEBPACK_IMPORTED_MODULE_6__["sqr"])(this.operator1);
        this.result = myresul;
    }
    sqrt() {
        let myresul = 0;
        myresul = Object(_sqrt_sqrt__WEBPACK_IMPORTED_MODULE_7__["sqrt"])(this.operator1);
        this.result = myresul;
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], decls: 25, vars: 3, consts: [[1, "calculator"], [1, "input-group"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-pencil"], ["id", "operator1", "type", "number", "name", "operator1", "placeholder", "0.0", 1, "form-control", "operator1", 3, "ngModel", "ngModelChange"], ["id", "operator2", "type", "number", "name", "operator2", "placeholder", "0.0", 1, "form-control", "operator2", 3, "ngModel", "ngModelChange"], [1, "glyphicon", "glyphicon-plus", "addition-button", 3, "click"], [1, "glyphicon", "glyphicon-minus", "substraction-button", 3, "click"], [1, "glyphicon", "glyphicon-remove", "substraction-button", 3, "click"], [1, "glyphicon", "glyphicon-italic", "substraction-button", 3, "click"], [1, "glyphicon", "glyphicon-menu-up", "substraction-button", 3, "click"], [1, "glyphicon", "glyphicon-superscript", "substraction-button", 3, "click"], [1, "glyphicon", "glyphicon-console", "substraction-button", 3, "click"], [1, "result"]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_5_listener($event) { return ctx.operator1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_9_listener($event) { return ctx.operator2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_10_listener() { return ctx.addition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_12_listener() { return ctx.substraction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_14_listener() { return ctx.multiplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_16_listener() { return ctx.division(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_18_listener() { return ctx.exp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_20_listener() { return ctx.sqr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_i_click_22_listener() { return ctx.sqrt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operator1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operator2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".calculator[_ngcontent-%COMP%] {\n    width: 150px;\n    text-align: center;\n    color: #999;\n}\n\n.result[_ngcontent-%COMP%] {\n    font-size: 3.0em;\n    font-weight: bold;\n    color: red;\n\n}\n\n.operator1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    font-weight: bold;\n    color: black;\n\n}\n\n.operator2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    font-weight: bold;\n    color: blue;\n\n}\n\n.addition-button[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n}\n\n.substraction-button[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRvciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuLnJlc3VsdCB7XG4gICAgZm9udC1zaXplOiAzLjBlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmVkO1xuXG59XG5cbi5vcGVyYXRvcjEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbi5vcGVyYXRvcjIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsdWU7XG5cbn1cblxuLmFkZGl0aW9uLWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibHVlO1xufVxuLnN1YnN0cmFjdGlvbi1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogZ3JlZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui',
                templateUrl: './ui.component.html',
                styleUrls: ['./ui.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oswaldo/UV/Prueba de Software/testing-calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map