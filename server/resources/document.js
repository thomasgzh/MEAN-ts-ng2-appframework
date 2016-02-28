var documentModel = require("../dao/documentModel");
var bodyParser = require('body-parser');
var repository = documentModel.repository;
function read(req, res) {
    console.log("documentController.retrieveDocument()");
    var textParam = "This is a really long standard text";
    var idParam = "2";
    var titleParam = "StandardTitle";
    repository.findOne({ idtest: idParam }, function (error, document) {
        if (error) {
            res.send(error);
        }
        else {
            if (!document) {
                repository.create({ text: textParam, idtest: idParam, title: titleParam }, function (error, document) {
                    if (error) {
                        res.send(error);
                    }
                    else {
                        res.jsonp(document);
                    }
                });
            }
            else {
                res.jsonp(document);
            }
        }
    });
}
exports.read = read;
;
function update(req, res) {
    console.log("documentController.updateDocument()");
    var textParam = req.body.hei;
    var idParam = "2";
    repository.findOne({ idtest: idParam }, function (error, document) {
        if (error) {
            res.send(error);
        }
        else {
            if (document) {
                repository.update({ title: req.body.documentTitle, idtest: idParam }, function (error, document2) {
                    if (error) {
                        res.send(error);
                    }
                    else {
                        res.jsonp(document2);
                    }
                });
            }
        }
    });
}
exports.update = update;
;
function updateDocumentText(updateText) {
    console.log("documentController.testUpdateDocument()");
    var idParam = "2";
    repository.findOne({ idtest: idParam }, function (error, document) {
        if (error) {
            console.log(error);
        }
        else {
            if (document) {
                repository.update({ text: updateText, idtest: idParam }, function (error, document2) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                    }
                });
            }
        }
    });
}
exports.updateDocumentText = updateDocumentText;
//# sourceMappingURL=document.js.map