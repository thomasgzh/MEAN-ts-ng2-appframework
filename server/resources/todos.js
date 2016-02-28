var todoModel = require("../dao/todoModel");
var bodyParser = require('body-parser');
var todoRepository = todoModel.todoRepository;
/* GET All Todos */
function readAll(req, res, next) {
    console.log("todoController.readAll()");
    todoRepository.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(todos);
        }
    });
}
exports.readAll = readAll;
;
/* GET One Todo with the provided ID */
function readOne(req, res, next) {
    todoRepository.findOne({
        _id: req.params.id
    }, function (err, todos) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(todos);
        }
    });
}
exports.readOne = readOne;
;
/* POST/SAVE a Todo */
function save(req, res, next) {
    var todo = req.body;
    if (!todo.task || !(todo.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    }
    else {
        todoRepository.create(todo, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(result);
            }
        });
    }
}
exports.save = save;
;
/* PUT/UPDATE a Todo */
function update(req, res, next) {
    var todo = req.body;
    if (!(todo.isCompleted || todo.task)) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    }
    else {
        todoRepository.update({
            _id: req.params.id
        }, todo, {}, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(result);
            }
        });
    }
}
exports.update = update;
;
/* DELETE a Todo   ------ */
function del(req, res) {
    todoRepository.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(result);
        }
    });
}
exports.del = del;
;
//# sourceMappingURL=todos.js.map