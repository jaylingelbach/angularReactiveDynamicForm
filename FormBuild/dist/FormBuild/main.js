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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n}\n.error {\n\tcolor: red;\n}\n.contactForm {\n\tbackground: #FCD800;\n\tpadding-top: 30px;\n}\ndiv {\n\tdisplay: block;\n}\nbody {\n\theight: 100%;\n\tfont-family: Intro,\"Trebuchet MS\",Helvetica,Arial,sans-serif;\n\tfont-size: 16px;\n\tline-height: 1.375em;\n\tcolor: #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxZQUFZO0NBQ1osNERBQTREO0NBQzVELGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmVycm9yIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLmNvbnRhY3RGb3JtIHtcblx0YmFja2dyb3VuZDogI0ZDRDgwMDtcblx0cGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmRpdiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250LWZhbWlseTogSW50cm8sXCJUcmVidWNoZXQgTVNcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMS4zNzVlbTtcblx0Y29sb3I6ICMwMDAwMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-contact-form></app-contact-form>"

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
/* harmony import */ var _get_contact_info_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-contact-info-content.service */ "./src/app/get-contact-info-content.service.ts");



// reduce separate into diff objs and use group to populate in columns for css stuffs.
var AppComponent = /** @class */ (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
    }
    AppComponent.prototype.fetchContactInfo = function () {
        this.contactInfo$ = this.contactService.fetchContactInfo();
        console.log("contactInfo$ from app.component.ts", this.contactInfo$);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /**
         *	Notes for future features:
         *	assests write service to read from file.
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_contact_info_content_service__WEBPACK_IMPORTED_MODULE_2__["GetContactInfoContentService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _get_contact_info_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-contact-info-content.service */ "./src/app/get-contact-info-content.service.ts");






// local imports below, Angular imports above.



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["ContactFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_get_contact_info_content_service__WEBPACK_IMPORTED_MODULE_8__["GetContactInfoContentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n\tcolor: red;\n}\n\n.contactForm {\n\tbackground: #FCD800;\n}\n\ndiv {\n\tdisplay: block;\n}\n\nbody {\n\theight: 100%;\n\tfont-family: Intro,\"Trebuchet MS\",Helvetica,Arial,sans-serif;\n\tfont-size: 16px;\n\tline-height: 1.375em;\n\tcolor: #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLDREQUE0RDtDQUM1RCxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5jb250YWN0Rm9ybSB7XG5cdGJhY2tncm91bmQ6ICNGQ0Q4MDA7XG59XG5kaXYge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwJTtcblx0Zm9udC1mYW1pbHk6IEludHJvLFwiVHJlYnVjaGV0IE1TXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDEuMzc1ZW07XG5cdGNvbG9yOiAjMDAwMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Spoorthy update -->\n<form [formGroup]=\"contactUs\" (ngSubmit)=\"onSubmit()\" class=\"contactForm row\">\n\t<div class=\"col-xl-6 col-lg-6 col-sm-6 col-xs-6\" *ngFor=\"let data of groupedCollection\">\n\t\t<div *ngFor=\"let prop of data\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"{{prop.labelName}}\">{{prop.labelName}}:<span class=\"asterisk\">*</span></label>\n\t\t\t\t<div [ngSwitch]=\"prop.type\">\n\t\t\t\t\t<input *ngSwitchCase=\"['text', 'email', 'phone'].includes(prop.type) ? prop.type : ''\" [type]=\"prop.type\" [formControlName]=\"prop.labelName\" [placeholder]=\"prop.labelName\">\n\t\t\t\t\t<input *ngSwitchCase=\"'textarea'\" [type]=\"prop.type\" [formControlName]=\"prop.labelName\" [placeholder]=\"prop.labelName\">\n\t\t\t\t\t<select *ngSwitchCase=\"'select'\" [formControlName]=\"prop.labelName\">\n\t\t\t\t\t\t<option *ngFor=\"let option of prop.options\" [value]=\"option.value\">\n\t\t\t\t\t\t\t{{ option.labelName }}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"error\" *ngIf=\"contactUs.get(prop.labelName).invalid && (contactUs.get(prop.labelName).dirty || contactUs.get(prop.labelName).touched)\">\n\t\t\t\t\t<span *ngIf=\"contactUs.get(prop.labelName).errors.required\">\n\t\t\t\t\t\tThis is a required field.\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"hasError(prop)\">\n\t\t\t\t\t\t{{ prop.errorMessage }}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-xl-6 col-lg-6 col-sm-12\">\n\t\t<button type=\"submit\">Submit</button>\n\t</div>\n</form>\n<pre> {{ contactUs.value | json }}</pre>\n\n\n\n<!-- Jay's code -->\n<!-- <form [formGroup]=\"contactUs\" (ngSubmit)=\"onSubmit()\" class=\"contactForm\"> -->\n\t<!-- <div *ngFor=\"let prop of customerProps\" class=\"col-sm-6 col-xs-12\"> -->\n\t\t<!-- Enter fields needed here and in the app.component.ts -->\n\t\t<!-- <div [ngSwitch]=\"prop.type\">\n\t\t\t<input *ngSwitchCase=\"['text', 'email', 'phone'].includes(prop.type) ? prop.type : ''\" [type]=\"prop.type\" [formControlName]=\"prop.key\" [placeholder]=\"prop.labelName\">\n\t\t\t<input *ngSwitchCase=\"'textarea'\" [type]=\"prop.type\" [formControlName]=\"prop.key\" [placeholder]=\"prop.labelName\">\n\t\t\t<select *ngSwitchCase=\"'select'\" [formControlName]=\"prop.key\">\n\t\t\t\t<option *ngFor=\"let option of prop.options\" [value]=\"option.value\">\n\t\t\t\t\t{{ option.labelName }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</div> -->\n\n\t\t<!-- <div class=\"error\" *ngIf=\"contactUs.get(prop.key).invalid && (contactUs.get(prop.key).dirty || contactUs.get(prop.key).touched)\">\n\t\t\t<span *ngIf=\"contactUs.get(prop.key).errors.required\">\n\t\t\t\tThis is a required field.\n\t\t\t</span>\n\t\t\t<span *ngIf=\"contactUs.get(prop.key).errors.regExp\">\n\t\t\t\tThe {{ prop.errorMessage }} you entered doesn't look quite right.\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<button type=\"submit\">Submit</button>\n</form> -->\n<!-- <pre> {{ contactUs.value | json }}</pre> -->"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _get_contact_info_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-contact-info-content.service */ "./src/app/get-contact-info-content.service.ts");




var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(formBuilder, contactInfoService) {
        this.formBuilder = formBuilder;
        this.contactInfoService = contactInfoService;
        // Form
        this.contactUs = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        // Properties assosicated with the form
        this.customerProps = [];
        this.groupedCollection = [];
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tempFormDataObj = {};
        var resp = [
            {
                "labelName": "First Name",
                "group": "contactInfo",
                "type": "text",
                "regExp": "^[A-Za-z\\' \\-]*$",
                "value": "",
                "required": "true",
                "errorMessage": "Please enter only letters in this field."
            },
            {
                "labelName": "Last Name",
                "group": "contactInfo",
                "type": "text",
                "regExp": "^[a-z ,.'-A-Z]+$",
                "value": "",
                "required": "true",
                "errorMessage": "Please enter only letters in this field."
            },
            {
                "labelName": "Email",
                "group": "contactInfo",
                "type": "text",
                "regExp": "^([A-Za-z0-9])+([_-.])?([A-Za-z0-9])+@([A-Za-z0-9])+.([A-Za-z]{2,3})$",
                "value": "",
                "required": "true",
                "errorMessage": "Please enter a valid email address."
            },
            {
                "labelName": "Phone",
                "group": "contactInfo",
                "type": "text",
                "regExp": "^([(]?[0-9][0-9][0-9][)]? ?[0-9][0-9][0-9][-]?[0-9][0-9][0-9][0-9])$",
                "value": "",
                "required": "true",
                "errorMessage": "Please enter valid phone number in this field."
            },
            {
                "labelName": "Company",
                "group": "companyInfo",
                "type": "text",
                "regExp": "^[a-z ,.'-A-Z]+$",
                "value": "",
                "required": "true",
                "errorMessage": "Please enter a valid email address."
            },
            {
                "labelName": "Title",
                "group": "companyInfo",
                "type": "text",
                "regExp": "^[a-z ,.'-0-9A-Z]+$",
                "value": "",
                "required": "true",
                "errorMessage": "Please enter a valid email address."
            },
            {
                "labelName": "Industry",
                "group": "companyInfo",
                "type": "select",
                "regExp": null,
                "value": "",
                "required": "true",
                "errorMessage": "Please select a value from the dropdown.",
                "optionValues": ["Collections", "Automotive", "Banking"]
            },
            {
                "labelName": "State",
                "group": "companyInfo",
                "type": "select",
                "regExp": null,
                "value": "",
                "required": "true",
                "errorMessage": "Please select a value from the dropdown.",
                "optionValues": ["Illinois", "Texas", "Michigan"]
            }
        ];
        var property = 'group';
        var groupedData = resp.reduce(function (previous, current) {
            if (!previous[current[property]]) {
                console.log(previous[current[property]]);
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]] = previous[current[property]].concat([current]);
            }
            return previous;
        }, {});
        this.groupedCollection = Object.values(groupedData);
        console.log(this.groupedCollection);
        this.formDataObj = resp;
        this.formDataObj.map(function (item) {
            tempFormDataObj[item.labelName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.value, _this.mapValidator(item.validators));
        });
        this.contactUs = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](tempFormDataObj);
    };
    ContactFormComponent.prototype.mapValidator = function (validators) {
        if (validators) {
            return Object.keys(validators).map(function (validationType) {
                switch (validationType) {
                    case 'required': {
                        return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required;
                    }
                    case 'email':
                    case 'phone':
                    case 'name':
                    case 'company':
                    case 'title':
                    default: {
                        return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(validators[validationType]);
                    }
                }
            });
        }
        else {
            return [];
        }
    };
    ContactFormComponent.prototype.onSubmit = function () {
        console.log("form submit fired");
        // TODO - Send the form somewhere.
        console.log("contact us on submit", this.contactUs.value);
    };
    ContactFormComponent.prototype.hasError = function (data) {
        return this.contactUs.get(data.labelName).errors && this.contactUs.get(data.labelName).errors.pattern ? true : false;
    };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/contact-form/contact-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _get_contact_info_content_service__WEBPACK_IMPORTED_MODULE_3__["GetContactInfoContentService"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/get-contact-info-content.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/get-contact-info-content.service.ts ***!
  \*****************************************************/
/*! exports provided: GetContactInfoContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContactInfoContentService", function() { return GetContactInfoContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GetContactInfoContentService = /** @class */ (function () {
    function GetContactInfoContentService(http) {
        this.http = http;
    }
    GetContactInfoContentService.prototype.fetchContactInfo = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'type': 'json'
            })
        };
        var url = 'assets/contactInfoContent.json';
        return this.http.get(url, httpOptions);
    };
    GetContactInfoContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetContactInfoContentService);
    return GetContactInfoContentService;
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

module.exports = __webpack_require__(/*! /Users/jlingel/Documents/AngularPractice/FormBuild/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map