"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var task_component_1 = require("./components/task/task.component");
var parent_component_1 = require("./components/in-out/parent/parent.component");
var enfant_component_1 = require("./components/in-out/enfant/enfant.component");
var todolist_component_1 = require("./components/todolist/todolist.component");
var nav_component_1 = require("./components/nav/nav.component");
var login_component_1 = require("./components/login/login.component");
var logout_component_1 = require("./components/logout/logout.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                task_component_1.TaskComponent,
                parent_component_1.ParentComponent,
                enfant_component_1.EnfantComponent,
                todolist_component_1.TodolistComponent,
                nav_component_1.NavComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
