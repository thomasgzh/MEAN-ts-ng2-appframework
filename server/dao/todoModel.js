/**
 * Created by thomas on 2016/2/26.
 */
var mongoose = require("mongoose");
exports.todoSchema = new mongoose.Schema({
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
});
exports.todoRepository = mongoose.model("todos", exports.todoSchema);
//# sourceMappingURL=todoModel.js.map