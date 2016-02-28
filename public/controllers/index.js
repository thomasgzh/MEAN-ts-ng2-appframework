System.register(['angular2/platform/browser', './todo', 'angular2/http'], function(exports_1) {
    var browser_1, todo_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todo_1.TodoAppComponent, [http_1.HTTP_BINDINGS]);
        }
    }
});
//# sourceMappingURL=index.js.map