"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
var cors = require('cors');
const inversify_express_utils_1 = require("inversify-express-utils");
const components_1 = require("./interface/http/components");
const applicationPort = 3001;
const container = new inversify_1.Container();
container.bind(components_1.HomeController);
container.bind(components_1.UserController);
const server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(inversifyApp => inversifyApp.use(cors()));
server.build().listen(applicationPort);
console.log(`Server is ok, and is listening on port ${applicationPort}`);
//# sourceMappingURL=server.js.map