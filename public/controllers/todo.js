System.register(['angular2/core', 'rxjs/Rx', '../services/todos-factory'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todos_factory_1;
    var TodoAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (todos_factory_1_1) {
                todos_factory_1 = todos_factory_1_1;
            }],
        execute: function() {
            // Annotation section
            TodoAppComponent = (function () {
                function TodoAppComponent() {
                    var _this = this;
                    this.todos = [];
                    todos_factory_1.TodoFactory.getAll().then(function (data) {
                        _this.todos = data;
                    });
                }
                TodoAppComponent.prototype.addTodo = function ($event, todoText) {
                    var _this = this;
                    if ($event.which === 13) {
                        var _todo = {
                            task: todoText.value,
                            isCompleted: false,
                            isEditing: false
                        };
                        todos_factory_1.TodoFactory.save(_todo).then(function (data) {
                            // keep things in sync
                            _this.todos.push(data);
                            todoText.value = '';
                        });
                    }
                };
                TodoAppComponent.prototype.updateTodoText = function ($event, todo) {
                    var _this = this;
                    if ($event.which === 13) {
                        todo.task = $event.target.value;
                        var _todo = {
                            _id: todo._id,
                            task: todo.task,
                            isCompleted: todo.isCompleted,
                            isEditing: false
                        };
                        todos_factory_1.TodoFactory.update(_todo).then(function (data) {
                            // console.log(data); -> {ok: true, n: 1, updatedExisting: true}
                            // wait for the response before resetting the state
                            _this.setEditState(todo, false);
                        });
                    }
                };
                TodoAppComponent.prototype.updateStatus = function (todo) {
                    var _todo = {
                        _id: todo._id,
                        task: todo.task,
                        isCompleted: !todo.isCompleted
                    };
                    todos_factory_1.TodoFactory.update(_todo).then(function (data) {
                        // console.log(data); -> {ok: true, n: 1, updatedExisting: true}
                        // wait for the response before updating the UI
                        todo.isCompleted = !todo.isCompleted;
                    });
                };
                TodoAppComponent.prototype.deleteTodo = function (todo) {
                    var todos = this.todos;
                    todos_factory_1.TodoFactory.delete(todo._id).then(function (data) {
                        if (data.n == 1) {
                            // save a n/w call by updating the local array
                            // instead of making a GET call again to refresh the data
                            for (var i = 0; i < todos.length; i++) {
                                if (todos[i]._id == todo._id) {
                                    todos.splice(i, 1);
                                }
                            }
                            ;
                        }
                    });
                };
                TodoAppComponent.prototype.setEditState = function (todo, state) {
                    if (state) {
                        todo.isEditMode = state;
                    }
                    else {
                        // don't store unwanted presentation logic in DB :/
                        delete todo.isEditMode;
                    }
                };
                TodoAppComponent = __decorate([
                    core_1.Component({
                        selector: 'todo_app',
                        templateUrl: 'views/todo.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoAppComponent);
                return TodoAppComponent;
            })();
            exports_1("TodoAppComponent", TodoAppComponent);
        }
    }
});
//bootstrap(TodoAppComponent); 
//# sourceMappingURL=todo.js.map