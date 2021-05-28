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
    function TaskComponent(tdls) {
        this.tdls = tdls;
        this.editMode = false;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.task = this.tdls.getTask(this.idTask);
    };
    TaskComponent.prototype.toggleEditMode = function () {
        this.editMode = !this.editMode;
    };
    TaskComponent.prototype.getCompleteString = function () {
        return this.task.complete ? 'Terminée' : 'En cours';
    };
    TaskComponent.prototype.getBtnTxt = function () {
        return this.task.complete ? 'Annuler' : 'Terminer';
    };
    TaskComponent.prototype.toggleComplete = function () {
        this.tdls.toogleComplete(this.idTask);
    };
    __decorate([
        core_1.Input()
    ], TaskComponent.prototype, "idTask");
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
