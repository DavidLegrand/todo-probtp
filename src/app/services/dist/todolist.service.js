"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoListService = void 0;
var core_1 = require("@angular/core");
var TodoListService = /** @class */ (function () {
    function TodoListService() {
        this.tasks = [
            {
                id: 0,
                name: 'Faire la vaisselle',
                complete: true,
                description: 'Ceci est ma description',
                created: new Date()
            },
            {
                id: 1,
                name: 'Jeter les poubelles',
                complete: true,
                description: 'Ceci est ma description',
                created: new Date()
            },
            {
                id: 2,
                name: 'Faire les courses',
                complete: false,
                description: 'Ceci est ma description',
                created: new Date()
            },
        ];
    }
    TodoListService.prototype.toogleComplete = function (id) {
        for (var i in this.tasks) {
            if (this.tasks[i].id === id) {
                this.tasks[i].complete = !this.tasks[i].complete;
                return;
            }
        }
    };
    TodoListService.prototype.getTask = function (id) {
        for (var i in this.tasks) {
            if (this.tasks[i].id === id) {
                return this.tasks[i];
            }
        }
        return null;
    };
    TodoListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TodoListService);
    return TodoListService;
}());
exports.TodoListService = TodoListService;
