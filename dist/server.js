"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const application = express_1.default();
const applicationPort = 3000;
application.get('/', function (req, res, next) {
    res.send('Hello world');
});
application.listen(applicationPort, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=server.js.map