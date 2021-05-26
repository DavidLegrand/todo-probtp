"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskComponent = void 0;
var core_1 = require("@angular/core");
var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.editMode = false;
    }
    TaskComponent.prototype.ngOnInit = function () { };
    TaskComponent.prototype.toggleEditMode = function () {
        this.editMode = !this.editMode;
    };
    TaskComponent.prototype.getComplete = function () {
        return this.task.complete ? 'Terminée' : 'En cours';
    };
    TaskComponent.prototype.getItemVariant = function () {
        return this.task.complete
            ? 'list-group-item-success'
            : 'list-group-item-warning';
    };
    TaskComponent.prototype.getBadgeVariant = function () {
        return this.task.complete ? 'bg-success' : 'bg-warning text-dark';
    };
    TaskComponent.prototype.getBtnTxt = function () {
        return this.task.complete ? 'Annuler' : 'Terminer';
    };
    TaskComponent.prototype.toggleComplete = function () {
        this.task.complete = !this.task.complete;
    };
    __decorate([
        core_1.Input()
    ], TaskComponent.prototype, "task");
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.css']
        })
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
