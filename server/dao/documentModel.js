var mongoose = require("mongoose");
exports.documentSchema = new mongoose.Schema({
    title: String,
    text: String,
    idtest: String
});
exports.repository = mongoose.model("document", exports.documentSchema);
//# sourceMappingURL=documentModel.js.map