System.register(['./xhr-factory'], function(exports_1) {
    var xhr_factory_1;
    var TodoFactory;
    return {
        setters:[
            function (xhr_factory_1_1) {
                xhr_factory_1 = xhr_factory_1_1;
            }],
        execute: function() {
            exports_1("TodoFactory", TodoFactory = {
                getAll: function () {
                    return xhr_factory_1.$http.get('/todos/');
                },
                get: function (id) {
                    return xhr_factory_1.$http.get('/todo/' + id);
                },
                save: function (todo) {
                    return xhr_factory_1.$http.post('/todo', todo);
                },
                update: function (todo) {
                    return xhr_factory_1.$http.put('/todo/' + todo._id, todo);
                },
                delete: function (id) {
                    return xhr_factory_1.$http.delete('/todo/' + id);
                }
            });
        }
    }
});
//# sourceMappingURL=todos-factory.js.map