/// <reference path="../../typings/tsd.d.ts"/>​
'use strict';
var UserMessage = (function () {
    function UserMessage(payload) {
        var data = JSON.parse(payload);
        if (!data.name || !data.message || !data.senderId) {
            throw new Error('Invalid message payload received: ' + payload);
        }
        this.data = data;
    }
    Object.defineProperty(UserMessage.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "message", {
        get: function () {
            return this.data.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "senderId", {
        get: function () {
            return this.data.senderId;
        },
        enumerable: true,
        configurable: true
    });
    return UserMessage;
})();
exports.UserMessage = UserMessage;
//# sourceMappingURL=messageModel.js.map