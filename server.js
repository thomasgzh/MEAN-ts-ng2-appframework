/// <reference path="./typings/tsd.d.ts"/>​
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var WebSocket = require('ws');
var routes = require('./server/resources/index');
var documentRoutes = require('./server/resources/document');
var todoRoutes = require('./server/resources/todos');
var models = require('./server/dao/messageModel');
var wsPort = process.env.PORT || 3001;
var databaseUrl = 'localhost';
var httpPort = 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: wsPort });
server.on('connection', function (ws) {
    ws.on('message', function (message) {
        try {
            var userMessage = new models.UserMessage(message);
            broadcast(JSON.stringify(userMessage));
            if (userMessage.name == "document") {
                documentRoutes.updateDocumentText(userMessage.message);
            }
        }
        catch (e) {
            console.error(e.message);
        }
    });
});
function broadcast(data) {
    server.clients.forEach(function (client) {
        client.send(data);
    });
}
;
if (mongoose.connect('mongodb://' + databaseUrl + '/dbTexd')) {
    console.log("Successfully connected to the database: " + databaseUrl);
}
else {
    console.log("Not able to connect to the database: " + databaseUrl);
}
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', routes.index);
app.get('/document', documentRoutes.read);
app.get('/documentapp', routes.index);
app.get('/todoapp', routes.index);
app.post('/document', documentRoutes.update);
app.get('/todos', todoRoutes.readAll);
app.get('/todo/:id', todoRoutes.readOne);
app.post('/todo', todoRoutes.save);
app.put('/todo/:id', todoRoutes.update);
app.delete('/todo/:id', todoRoutes.del);
app.listen(httpPort, function () {
    console.log("Demo Express server listening on port %d", httpPort);
});
exports.App = app;
//# sourceMappingURL=server.js.map