webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"frmMain\" id=\"frmMain\">\n\t<!-- <global-header></global-header> -->\n\t<div class=\"container-fluid main-content\" role=\"main\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_left_nav__ = __webpack_require__("../../../../../src/app/shared/left-nav.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_page_header__ = __webpack_require__("../../../../../src/app/shared/page-header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_page_error__ = __webpack_require__("../../../../../src/app/shared/page-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_introduction_dashboard__ = __webpack_require__("../../../../../src/app/pages/introduction.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_structure_dashboard__ = __webpack_require__("../../../../../src/app/pages/structure.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_style_dashboard__ = __webpack_require__("../../../../../src/app/pages/style.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_components_dashboard__ = __webpack_require__("../../../../../src/app/pages/components.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_messages_dashboard__ = __webpack_require__("../../../../../src/app/pages/messages.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_navigation_dashboard__ = __webpack_require__("../../../../../src/app/pages/navigation.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_application_header_application_header_component__ = __webpack_require__("../../../../../src/app/shared/application-header/application-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sub_components_table_table_component__ = __webpack_require__("../../../../../src/app/sub-components/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_left_nav__["a" /* LeftNav */],
                __WEBPACK_IMPORTED_MODULE_9__shared_page_header__["a" /* PageHeader */],
                __WEBPACK_IMPORTED_MODULE_10__shared_page_error__["a" /* PageError */],
                __WEBPACK_IMPORTED_MODULE_11__pages_introduction_dashboard__["a" /* IntroductionDashboard */],
                __WEBPACK_IMPORTED_MODULE_12__pages_structure_dashboard__["a" /* StructureDashboard */],
                __WEBPACK_IMPORTED_MODULE_13__pages_style_dashboard__["a" /* StyleDashboard */],
                __WEBPACK_IMPORTED_MODULE_14__pages_components_dashboard__["a" /* ComponentsDashboard */],
                __WEBPACK_IMPORTED_MODULE_15__pages_messages_dashboard__["a" /* MessagesDashboard */],
                __WEBPACK_IMPORTED_MODULE_16__pages_navigation_dashboard__["a" /* NavigationDashboard */],
                __WEBPACK_IMPORTED_MODULE_17__shared_application_header_application_header_component__["a" /* ApplicationHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sub_components_table_table_component__["a" /* TableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_introduction_dashboard__ = __webpack_require__("../../../../../src/app/pages/introduction.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_structure_dashboard__ = __webpack_require__("../../../../../src/app/pages/structure.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_style_dashboard__ = __webpack_require__("../../../../../src/app/pages/style.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_components_dashboard__ = __webpack_require__("../../../../../src/app/pages/components.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_messages_dashboard__ = __webpack_require__("../../../../../src/app/pages/messages.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_navigation_dashboard__ = __webpack_require__("../../../../../src/app/pages/navigation.dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_page_error__ = __webpack_require__("../../../../../src/app/shared/page-error.ts");








var appRoutes = [
    {
        path: 'introduction',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_introduction_dashboard__["a" /* IntroductionDashboard */],
        data: {
            page_header: "Introduction"
        }
    },
    {
        path: 'structure',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_structure_dashboard__["a" /* StructureDashboard */],
        data: {
            page_header: "Structure & Layout"
        }
    },
    {
        path: 'style',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_style_dashboard__["a" /* StyleDashboard */],
        data: {
            page_header: "Style"
        }
    },
    {
        path: 'components',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_components_dashboard__["a" /* ComponentsDashboard */],
        data: {
            page_header: "Components"
        }
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_messages_dashboard__["a" /* MessagesDashboard */],
        data: {
            page_header: "Messages & Notifications"
        }
    },
    {
        path: 'navigation',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_navigation_dashboard__["a" /* NavigationDashboard */],
        data: {
            page_header: "Navigation"
        }
    },
    {
        path: 'errors',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_introduction_dashboard__["a" /* IntroductionDashboard */],
        data: {
            page_header: "Introduction",
            errors: "Sample errors.",
            warnings: "Sample warnings.",
            success: "Sample success message.",
            info: "Sample notice message."
        }
    },
    {
        path: '',
        redirectTo: '/introduction',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__shared_page_error__["a" /* PageError */],
        data: {
            page_header: "Page Not Found",
            errors: "The page you are trying to reach was not found. Please check your URL or link and try again."
        }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/pages/components.dashboard.html":
/***/ (function(module, exports) {

module.exports = "<app-application-header></app-application-header>\r\n<app-navigation></app-navigation>\r\n<page-header></page-header>\r\n<page-error></page-error>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"intro\">Components are the building blocks of any web application. Components are used to display information and keep it organized.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Components (Card)</h2>\r\n        <p>A Component is the main structure for displaying information in the content sections of a screen. A component is composed\r\n            of different elements with various sizes and functions. It correspondes with the grid system and fits various screen\r\n            sizes.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Sample Card Heading\r\n                    <a href=\"Javascript:;\" class=\"fa fa-cog pull-right\" title=\"Configure\"><span class=\"sr-only sr-focusable\">Configure</span></a>\r\n                    <a href=\"Javascript:;\" class=\"fa fa-arrows-alt pull-right\" title=\"Expand\"><span class=\"sr-only sr-focusable\">Expand</span></a>\r\n                    <a href=\"Javascript:;\" class=\"fa fa-print pull-right\" title=\"Print\"><span class=\"sr-only sr-focusable\">Print</span></a>\r\n                </h4>\r\n                <p class=\"card-text\">Text for the card goes here.</p>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <button class=\"btn btn-primary\">Card Button</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Alternate Components (Card)</h2>\r\n        <p>The idea behind these alternate component boxes is to provide the user with more call out information. Any secondary color\r\n        can be used from the color palette.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card card-alternate card-lavender\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Sample Card Heading\r\n                    <a href=\"Javascript:;\" class=\"fa fa-print pull-right\" title=\"Print\"><span class=\"sr-only sr-focusable\">close</span></a>\r\n                </h4>\r\n                <p class=\"card-text\">Text for the card goes here.</p>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                <button class=\"btn btn-primary\">Card Button</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Standard Table</h2>\r\n        <!-- TODO: Fix the description of tables. This doesn't describe tables at all. -->\r\n        <p>Tables make it easy to display content into different rows. The following table showcases the minimum spacing measurements.\r\n        Each column should be measured accordingly to the content at hand. This is dependent on how long the content is. The padding\r\n        measurements should start from the longest piece of content.</p>\r\n        <app-table [summary]=\"'Example table summary. This should be something that helps a blind user understand the table.'\" [styles]=\"'table table-striped table-hover'\"></app-table>\r\n    </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Table Inside of a Component</h2>\r\n        <p>Tables can be included inside of cards. Example below.</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Sample Inside of Card</h4>\r\n                        <app-table [summary]=\"'Example table summary. This should be something that helps a blind user understand the table.'\" [styles]=\"'table table-striped table-hover'\"></app-table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/components.dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsDashboard = (function () {
    function ComponentsDashboard() {
    }
    ComponentsDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'components-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/components.dashboard.html")
        })
    ], ComponentsDashboard);
    return ComponentsDashboard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/introduction.dashboard.html":
/***/ (function(module, exports) {

module.exports = "<app-application-header></app-application-header>\r\n<app-navigation></app-navigation>\r\n<page-header></page-header>\r\n<page-error></page-error>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"intro\">Build responsive, mobile-first projects on the web with the world's most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>\r\n        <p>This Design System and Style Guide document provides design direction for developing the ePACSES software application. This document explains in detail design concepts and visual treatments, as well as the logical relationships of design elements and components needed to design an application screen. The design direction outlined in this document improves digital experiences in two ways:</p>\r\n        <ol>\r\n            <li>It creates a strong connection between users and online touch points, thus strengthening the overall user experience.</li>\r\n            <li>It defines a hierarchical and global design system that can be utilized to improve existing application functions or implement new ones.</li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"btn-bar\" role=\"group\">\r\n            <button class=\"btn btn-primary\">Get Started</button>\r\n            <button class=\"btn btn-secondary\">Download Source</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p>If you would like to use this pattern library for your project, <a href=\"mailto:coobrien@deloitte.com\">contact IT Shared Services</a>.</p>\r\n        <p>If you would like to become a contributer to this pattern library, <a href=\"mailto:coobrien@deloitte.com\">contact Corey O'Brien</a> or <a href=\"mailto:alokgupta@deloitte.com\">contact Alok Gupta</a>.</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/introduction.dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IntroductionDashboard = (function () {
    function IntroductionDashboard() {
    }
    IntroductionDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'introduction-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/introduction.dashboard.html")
        })
    ], IntroductionDashboard);
    return IntroductionDashboard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/messages.dashboard.html":
/***/ (function(module, exports) {

module.exports = "<app-application-header></app-application-header>\r\n<app-navigation></app-navigation>\r\n<page-header></page-header>\r\n<page-error></page-error>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p>Messages are a way for the system to let the user know of any pressing issues that need to be addressed or tasks to be completed.\r\n        It is a page component that provides important information.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row mb-2\">\r\n    <div class=\"col-md-12\">\r\n        <alert type=\"danger\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <h4>Error Message:</h4>\r\n            <ul>\r\n                <li>Sample message content.</li>\r\n            </ul>\r\n        </alert>\r\n    </div>\r\n</div>\r\n<div class=\"row mb-2\">\r\n    <div class=\"col-md-12\">\r\n        <alert type=\"warning\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <h4>Warning Message:</h4>\r\n            <ul>\r\n                <li>Sample message content.</li>\r\n            </ul>\r\n        </alert>\r\n    </div>\r\n</div>\r\n<div class=\"row mb-2\">\r\n    <div class=\"col-md-12\">\r\n        <alert type=\"info\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <h4>Notice:</h4>\r\n            <ul>\r\n                <li>Sample message content.</li>\r\n            </ul>\r\n        </alert>\r\n    </div>\r\n</div>\r\n<div class=\"row mb-2\">\r\n    <div class=\"col-md-12\">\r\n        <alert type=\"success\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <h4>Success Message:</h4>\r\n            <ul>\r\n                <li>Sample message content.</li>\r\n            </ul>\r\n        </alert>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/messages.dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesDashboard = (function () {
    function MessagesDashboard() {
    }
    MessagesDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'messages-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/messages.dashboard.html")
        })
    ], MessagesDashboard);
    return MessagesDashboard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/navigation.dashboard.html":
/***/ (function(module, exports) {

module.exports = "<app-application-header></app-application-header>\r\n<app-navigation></app-navigation>\r\n<page-header></page-header>\r\n<page-error></page-error>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"intro\">The navigation of an application is the way in which a user will move from place to place as well as perform actions. Often called information architecture, navigation is a key component of any usable application.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Buttons</h2>\r\n        <p>Buttons are used to facilitate user edits and screen to screen navigation.</p>\r\n        <button class=\"btn btn-primary\">Primary Button</button>\r\n        <button class=\"btn btn-secondary\">Secondary Button</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/navigation.dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationDashboard = (function () {
    function NavigationDashboard() {
    }
    NavigationDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navigation-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/navigation.dashboard.html")
        })
    ], NavigationDashboard);
    return NavigationDashboard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/structure.dashboard.html":
/***/ (function(module, exports) {

module.exports = "<app-application-header></app-application-header>\r\n<app-navigation></app-navigation>\r\n<page-header></page-header>\r\n<page-error></page-error>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"intro\">Well built applications are built with a strong structure. This structure allows the application to be well designed and modular so it is expandable and extensible. Using this structure, an application that is only a few pages will still work just as an application with hundereds.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Application Building Blocks</h2>\r\n        <p>The application building blocks are the cornerstones of each screen. They divide the screen in areas and define the design structure. We have defined two building blocks for most applications:</p>\r\n        <div class=\"row mb-4\">\r\n            <div class=\"col-md-12 col-lg-3\">\r\n                <ol>\r\n                    <li>Global Fixed Navigation</li>\r\n                    <li>Content Hierarchy & Components</li>\r\n                </ol>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-9\">\r\n                <img class=\"img-fluid\" src=\"../assets/images/building_blocks.png\" alt=\"\">\r\n            </div>   \r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Grid System</h2>\r\n        <p>A Grid System enables design flexibility for all screen sizes. The grid system consists of 12 columns that add up to fill 100% of the available space inside of a container. This space can be broken up and can be nested. For instance, you can have two 6 column containers that each have 12, 1 column containers inside of them.</p>\r\n        <p>Columns are inside of rows. Each row is a series of up to 12 columns and spans the entire width of the page.</p>\r\n    </div>\r\n</div>\r\n<div class=\"grid-example\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n        <div class=\"col-sm-1 d-none d-xl-block\">\r\n            <p>col-sm-1</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2 d-none d-md-block\">\r\n            <p>col-sm-2</p>\r\n        </div>\r\n        <div class=\"col-sm-2 d-none d-md-block\">\r\n            <p>col-sm-2</p>\r\n        </div>\r\n        <div class=\"col-sm-2 d-none d-md-block\">\r\n            <p>col-sm-2</p>\r\n        </div>\r\n        <div class=\"col-sm-2 d-none d-md-block\">\r\n            <p>col-sm-2</p>\r\n        </div>\r\n        <div class=\"col-sm-2 d-none d-md-block\">\r\n            <p>col-sm-2</p>\r\n        </div>\r\n        <div class=\"col-sm-2 d-none d-md-block\">\r\n            <p>col-sm-2</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 d-none d-md-block\">\r\n            <p>col-sm-3</p>\r\n        </div>\r\n        <div class=\"col-sm-3 d-none d-md-block\">\r\n            <p>col-sm-3</p>\r\n        </div>\r\n        <div class=\"col-sm-3 d-none d-md-block\">\r\n            <p>col-sm-3</p>\r\n        </div>\r\n        <div class=\"col-sm-3 d-none d-md-block\">\r\n            <p>col-sm-3</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 d-none d-sm-block\">\r\n            <p>col-sm-4</p>\r\n        </div>\r\n        <div class=\"col-sm-4 d-none d-sm-block\">\r\n            <p>col-sm-4</p>\r\n        </div>\r\n        <div class=\"col-sm-4 d-none d-sm-block\">\r\n            <p>col-sm-4</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 d-none d-sm-block\">\r\n            <p>col-sm-6</p>\r\n        </div>\r\n        <div class=\"col-sm-6 d-none d-sm-block\">\r\n            <p>col-sm-6</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <p>col-sm-12</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/structure.dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructureDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StructureDashboard = (function () {
    function StructureDashboard() {
    }
    StructureDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'structure-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/structure.dashboard.html")
        })
    ], StructureDashboard);
    return StructureDashboard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/style.dashboard.html":
/***/ (function(module, exports) {

module.exports = "<app-application-header></app-application-header>\r\n<app-navigation></app-navigation>\r\n<page-header></page-header>\r\n<page-error></page-error>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <p class=\"intro\">The style of an application defines the colors, fonts and iconography that is used. In order to provide a clean appearance, a standardized font and icon set will be used. This allows flexibility while still ensuring familiarity and ease of processing the information on the screens.</p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2>Typography</h2>\r\n        <p>The standard application font is Open Sans. You can <a href=\"https://fonts.google.com/specimen/Open+Sans\">view or download Open Sans</a> at Google Fonts. This font is a clean, open source font used on many websites and web-based applications.</p>\r\n        <p>Some of the common font applications are listed below:</p>\r\n        <div class=\"row grid\">\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Heading 1</h4>\r\n                        <p class=\"card-text\">Used for the highest-level page title.</p>\r\n                        <h1>Example Heading 1</h1>\r\n                        <h5>CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>20px (1.25rem)</li>\r\n                            <li>#154570 ($navy)</li>\r\n                            <li>Open Sans Semi-Bold</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Heading 2</h4>\r\n                        <p class=\"card-text\">Used for the secondary page titles.</p>\r\n                        <h2>Example Heading 2</h2>\r\n                        <h5>CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>18px (1.125rem)</li>\r\n                            <li>#154570 ($navy)</li>\r\n                            <li>Open Sans Semi-Bold</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Heading 3</h4>\r\n                        <p class=\"card-text\">Used for the tertiary headings.</p>\r\n                        <h3>Example Heading 3</h3>\r\n                        <h5>CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>16px (1rem)</li>\r\n                            <li>#154570 ($navy)</li>\r\n                            <li>Open Sans Semi-Bold</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Heading 4</h4>\r\n                        <p class=\"card-text\">Used for additional headings.</p>\r\n                        <h4>Example Heading 4</h4>\r\n                        <h5>CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>16px (1rem)</li>\r\n                            <li>#58585B ($charcoal)</li>\r\n                            <li>Open Sans Light</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Heading 5</h4>\r\n                        <p class=\"card-text\">Used for headings beyond 4.</p>\r\n                        <h5>Example Heading 5</h5>\r\n                        <h5>CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>16px (1rem)</li>\r\n                            <li>#58585B ($charcoal)</li>\r\n                            <li>Open Sans Regular</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Body Text</h4>\r\n                        <p class=\"card-text\">Used for all standard body text.</p>\r\n                        <p>Example Body Text</p>\r\n                        <h5>CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>16px (1rem)</li>\r\n                            <li>#58585B ($charcoal)</li>\r\n                            <li>Open Sans Light</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Label Text</h4>\r\n                        <p class=\"card-text\">Used for form field labels.</p>\r\n                        <label>Example Label Text</label>\r\n                        <h5 class=\"mt-3\">CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>12px (0.75rem)</li>\r\n                            <li>#58585B ($charcoal)</li>\r\n                            <li>Open Sans Semi-Bold</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-4 col-xl-3 grid-item\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Link Text</h4>\r\n                        <p class=\"card-text\">Used for links within body text.</p>\r\n                        <a href=\"Javascript:;\">Example Link Text</a>\r\n                        <h5 class=\"mt-3\">CSS Attributes:</h5>\r\n                        <ul>\r\n                            <li>12px (0.75rem)</li>\r\n                            <li>#58585B ($charcoal)</li>\r\n                            <li>Open Sans Semi-Bold</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/style.dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StyleDashboard = (function () {
    function StyleDashboard() {
    }
    StyleDashboard.prototype.ngOnInit = function () {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true
        });
    };
    StyleDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'style-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/style.dashboard.html")
        })
    ], StyleDashboard);
    return StyleDashboard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/application-header/application-header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  application-header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/application-header/application-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/application-header/application-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationHeaderComponent = (function () {
    function ApplicationHeaderComponent() {
    }
    ApplicationHeaderComponent.prototype.ngOnInit = function () {
    };
    ApplicationHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-application-header',
            template: __webpack_require__("../../../../../src/app/shared/application-header/application-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/application-header/application-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationHeaderComponent);
    return ApplicationHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/left-nav.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar hidden-xs-down {{navClass}}\">\r\n\t<a href=\"Javascript:;\" id=\"sidebar-toggle\" class=\"sidebar-toggle\" title=\"Toggle Main Menu\"><i class=\"fa fa-arrow-circle-left\"><span class=\"sr-only sr-focusable\">Toggle Menu</span></i></a>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"brand\"></div>\r\n\t\t\t<div class=\"page-title\" [innerHTML]=\"this.route.snapshot.data['page_header']\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<nav class=\"left-nav\" role=\"navigation\">\r\n\t\t\t\t<ul *ngFor=\"let item of data; let i = index\">\r\n\t\t\t\t\t<li><a [routerLinkActive]=\"['active']\" routerLink=\"{{item.link}}\" href=\"Javascript:;\"><i class=\"fa {{item.icon}}\"></i><span>{{item.label}}</span></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"user-menu\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<nav class=\"left-nav\" role=\"navigation\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a routerLink=\"/notifications\" href=\"Javascript:;\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-sitemap\"></i>\r\n\t\t\t\t\t\t\t\t<span>Site Map</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a routerLink=\"/examples\" href=\"Javascript:;\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-question-circle\"></i>\r\n\t\t\t\t\t\t\t\t<span>Help</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/user\" href=\"Javascript:;\"><i class=\"fa fa-user-circle-o\"></i><span>Corey O'Brien</span></a><a class=\"user-settings\" routerLink=\"/settings\" href=\"Javascript:;\"><i class=\"fa fa-cog\"></i></a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/left-nav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftNav = (function () {
    function LeftNav(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.http.get('../assets/data/left-nav.json')
            .subscribe(function (res) { return _this.data = res.json(); });
    }
    LeftNav.prototype.ngOnInit = function () {
        $('#sidebar-toggle').click(function () {
            $('.main-content').toggleClass('main-content-collapsed');
            $('.sidebar').toggleClass('sidebar-collapsed');
            $('#sidebar-toggle i').toggleClass('fa-arrow-circle-right');
        });
        // console.log("Data via params: ", this.route.snapshot.data['page_header']);
    };
    LeftNav = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'left-nav',
            template: __webpack_require__("../../../../../src/app/shared/left-nav.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LeftNav);
    return LeftNav;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar d-none d-sm-block {{navClass}}\">\n\t<a href=\"Javascript:;\" id=\"sidebar-toggle\" class=\"sidebar-toggle\" title=\"Toggle Main Menu\"><i class=\"fa fa-arrow-circle-left\"><span class=\"sr-only sr-focusable\">Toggle Menu</span></i></a>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"brand\"></div>\n\t\t\t<div class=\"page-title\" [innerHTML]=\"this.route.snapshot.data['page_header']\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<nav class=\"left-nav\" role=\"navigation\">\n\t\t\t\t<ul *ngFor=\"let item of data; let i = index\">\n\t\t\t\t\t<li><a [routerLinkActive]=\"['active']\" routerLink=\"{{item.link}}\" href=\"Javascript:;\"><i class=\"fa {{item.icon}}\"></i><span>{{item.label}}</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\t<div class=\"user-menu\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<nav class=\"left-nav\" role=\"navigation\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"/examples\" href=\"Javascript:;\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-question-circle\"></i>\n\t\t\t\t\t\t\t\t<span>Help</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a routerLink=\"/user\" href=\"Javascript:;\"><i class=\"fa fa-user-circle-o\"></i><span>Corey O'Brien</span></a><a class=\"user-settings\" routerLink=\"/settings\" href=\"Javascript:;\"><i class=\"fa fa-cog\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.http.get('../assets/data/left-nav.json')
            .subscribe(function (res) { return _this.data = res.json(); });
    }
    NavigationComponent.prototype.ngOnInit = function () {
        $('#sidebar-toggle').click(function () {
            $('.main-content').toggleClass('main-content-collapsed');
            $('.sidebar').toggleClass('sidebar-collapsed');
            $('#sidebar-toggle i').toggleClass('fa-arrow-circle-right');
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/shared/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/page-error.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2\" *ngIf=\"this.route.snapshot.data['errors']\">\n\t<div class=\"col-md-12\">\n\t\t<alert type=\"danger\">\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t\t<h4>Error Message:</h4>\n\t\t\t<ul>\n\t\t\t\t<li [innerHTML]=\"this.route.snapshot.data['errors']\"></li>\n\t\t\t</ul>\n\t\t</alert>\n\t</div>\n</div>\n<div class=\"row mb-2\" *ngIf=\"this.route.snapshot.data['warnings']\">\n\t<div class=\"col-md-12\">\n\t\t<alert type=\"warning\">\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t\t<h4>Warning Message:</h4>\n\t\t\t<ul>\n\t\t\t\t<li [innerHTML]=\"this.route.snapshot.data['warnings']\"></li>\n\t\t\t</ul>\n\t\t</alert>\n\t</div>\n</div>\n<div class=\"row mb-2\" *ngIf=\"this.route.snapshot.data['info']\">\n\t<div class=\"col-md-12\">\n\t\t<alert type=\"info\">\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t\t<h4>Notice:</h4>\n\t\t\t<ul>\n\t\t\t\t<li [innerHTML]=\"this.route.snapshot.data['info']\"></li>\n\t\t\t</ul>\n\t\t</alert>\n\t</div>\n</div>\n<div class=\"row mb-2\" *ngIf=\"this.route.snapshot.data['success']\">\n\t<div class=\"col-md-12\">\n\t\t<alert type=\"success\">\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t\t<h4>Success Message:</h4>\n\t\t\t<ul>\n\t\t\t\t<li [innerHTML]=\"this.route.snapshot.data['success']\"></li>\n\t\t\t</ul>\n\t\t</alert>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/page-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageError = (function () {
    function PageError(route) {
        this.route = route;
    }
    PageError.prototype.ngOnInit = function () {
        // console.log("Data via params: ", this.route.snapshot.data['page_header']);
    };
    PageError = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-error',
            template: __webpack_require__("../../../../../src/app/shared/page-error.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageError);
    return PageError;
}());



/***/ }),

/***/ "../../../../../src/app/shared/page-header.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"banner-bar\">\r\n\t\t\t<h1 [innerHTML]=\"this.route.snapshot.data['page_header']\"></h1>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/page-header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageHeader = (function () {
    function PageHeader(route) {
        this.route = route;
    }
    PageHeader.prototype.ngOnInit = function () {
        // console.log(this.route.snapshot.data);
        // console.log("Data via params: ",this.route.snapshot.data['page_header']);
    };
    PageHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-header',
            template: __webpack_require__("../../../../../src/app/shared/page-header.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageHeader);
    return PageHeader;
}());



/***/ }),

/***/ "../../../../../src/app/sub-components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Need to add the angular-2-data-table code to make this have the features. -->\n<table class=\"{{styles}}\" summary=\"{{summary}}\" role=\"grid\">\n\t<thead class=\"thead-light\">\n\t\t<tr>\n\t\t\t<th role=\"col\">Sample Heading 1</th>\n\t\t\t<th role=\"col\">Sample Heading 2</th>\n\t\t\t<th role=\"col\">Sample Heading 3</th>\n\t\t\t<th role=\"col\">Sample Heading 4</th>\n\t\t\t<th role=\"col\">Sample Heading 5</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<th role=\"row\">Sample Data Row Heading 1</th>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th role=\"row\">Sample Data Row Heading 2</th>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th role=\"row\">Sample Data Row Heading 3</th>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th role=\"row\">Sample Data Row Heading 4</th>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th role=\"row\">Sample Data Row Heading 5</th>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t\t<td>Sample Data</td>\n\t\t</tr>\n\t</tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/sub-components/table/table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sub-components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnChanges = function () {
        this.summary;
        this.styles;
    };
    TableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "summary", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "styles", void 0);
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/sub-components/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sub-components/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map