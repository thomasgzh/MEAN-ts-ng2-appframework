/**
 * Created by thomas on 2016/2/26.
 */
/**
 * Created by thomas on 2016/2/26.
 */
import express = require("express");
import mongoose = require("mongoose");
import todoModel = require("../dao/todoModel");
import ITodo = require('../dao/todoModel');
var bodyParser = require('body-parser');
import todoRepository = todoModel.todoRepository;

/* GET All Todos */
export function readAll(req, res, next) {
    console.log("todoController.readAll()");
    todoRepository.find(function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
};
/* GET One Todo with the provided ID */
export function readOne(req, res, next) {
    todoRepository.findOne({
        _id: req.params.id
    }, function(err, todos) {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
};
/* POST/SAVE a Todo */
export function save(req, res, next) {
    var todo = req.body;
    if (!todo.task || !(todo.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        todoRepository.create(todo, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
};
/* PUT/UPDATE a Todo */
export function update(req, res, next) {
    var todo = req.body;
    if (!(todo.isCompleted || todo.task)) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        todoRepository.update({
            _id: req.params.id
        }, todo, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
};
/* DELETE a Todo   ------ */
export function del(req, res){
    todoRepository.remove(
        {
            _id: req.params.id
        },
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
};
