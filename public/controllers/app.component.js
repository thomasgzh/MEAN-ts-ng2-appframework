System.register(['angular2/core', 'angular2/router', './editor', './todo'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, editor_1, todo_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (editor_1_1) {
                editor_1 = editor_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular 2 Demo Applications';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'boot_app',
                        template: "\n    <h1>{{title}}</h1>\n    <!--<a [routerLink]=\"['Todos']\">Todos</a>-->\n    <!--<a [routerLink]=\"['Document']\">Document</a>-->\n     <!--routerLink\u65E0\u6CD5\u6B63\u786E\u751F\u6210html\uFF0C \u76F4\u63A5\u5199\u5730\u5740-->\n     <a href=\"/todoapp\">TODOs</a>\n     <a href=\"/documentapp\">DOCUMENT</a>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['stylesheets/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [editor_1.EditorController, todo_1.TodoAppComponent]
                    }),
                    router_1.RouteConfig([
                        //{path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
                        { path: '/todoapp', name: 'Todos', component: todo_1.TodoAppComponent, useAsDefault: true },
                        { path: '/documentapp', name: 'Document', component: editor_1.EditorController }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map