/**
 * Created by thomas on 2016/2/26.
 */
import mongoose = require("mongoose");

export var todoSchema = new mongoose.Schema({
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
});

export interface ITodo extends mongoose.Document {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
}

export var todoRepository = mongoose.model<ITodo>("todos", todoSchema);
