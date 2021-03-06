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
                id: 1,
                name: 'Faire la vaisselle',
                complete: true,
                description: 'Ceci est ma description',
                created: new Date()
            },
            {
                id: 2,
                name: 'Jeter les poubelles',
                complete: true,
                description: 'Ceci est ma description',
                created: new Date()
            },
            {
                id: 3,
                name: 'Faire les courses',
                complete: false,
                description: 'Ceci est ma description',
                created: new Date()
            },
        ];
    }
    TodoListService.prototype.toogleComplete = function (id) {
        var task = this.getTask(id);
        task.complete = !task.complete;
    };
    // updateTask(updatedTask): void {
    //   this.tasks.map((task) => {
    //     if (task.id === updatedTask.id) task = updatedTask;
    //   });
    // }
    TodoListService.prototype.getTask = function (id) {
        return this.tasks.find(function (task) { return task.id === id; });
    };
    TodoListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TodoListService);
    return TodoListService;
}());
exports.TodoListService = TodoListService;
