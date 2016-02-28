System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var EditorController;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            EditorController = (function () {
                function EditorController(http) {
                    this.http = http;
                    this.socket = new WebSocket('ws://localhost:3001');
                    this.title = 'MEAN skeleton with typescript';
                    this.documentName = "Name of document";
                    this.documentText = "This is a standard text";
                    this.senderId = "" + Math.random;
                    this.changeName = function () {
                        this.socket.send(JSON.stringify({ name: 'name', message: this.documentName, senderId: "hello" }));
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        this.http.post('./document', JSON.stringify({ documentTitle: this.documentName }), { headers: headers }).subscribe(function (res) {
                            console.log(res);
                        });
                    };
                    this.changeDocument = function () {
                        this.socket.send(JSON.stringify({ name: 'document', message: this.documentText, senderId: this.senderId }));
                    };
                }
                EditorController.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.getDocument();
                    this.socket.onmessage = function (message) {
                        var parsed = JSON.parse(message.data);
                        if (_this.senderId != parsed.data.senderId) {
                            console.log("You are not the sender");
                            if (parsed.data.name == "name") {
                                _this.documentName = parsed.data.message;
                            }
                            if (parsed.data.name == "document") {
                                _this.documentText = parsed.data.message;
                            }
                        }
                        else {
                            console.log("You are the sender");
                        }
                    };
                };
                EditorController.prototype.getDocument = function () {
                    var _this = this;
                    this.http.get('./document').map(function (res) { return res.json(); }).subscribe(function (res) {
                        _this.documentText = res.text;
                        _this.documentName = res.title;
                    });
                };
                EditorController = __decorate([
                    core_1.Component({
                        selector: 'document_app',
                        templateUrl: 'views/editor.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EditorController);
                return EditorController;
            })();
            exports_1("EditorController", EditorController);
        }
    }
});
//# sourceMappingURL=editor.js.map