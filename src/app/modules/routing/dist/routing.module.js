"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoutingModule = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var task_component_1 = require("./../../components/task/task.component");
var login_component_1 = require("./../../components/login/login.component");
var todolist_component_1 = require("./../../components/todolist/todolist.component");
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            declarations: [todolist_component_1.TodolistComponent, login_component_1.LoginComponent, task_component_1.TaskComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: todolist_component_1.TodolistComponent, pathMatch: 'full' },
                    { path: 'todolist', component: todolist_component_1.TodolistComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                ]),
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
