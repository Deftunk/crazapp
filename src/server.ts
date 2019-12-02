import "reflect-metadata";
import { Container } from 'inversify';
var cors = require('cors');
import { InversifyExpressServer } from 'inversify-express-utils';
import { UserController, HomeController } from './interface/http/components';
const applicationPort = 3001;
const container = new Container();

container.bind(HomeController);
container.bind(UserController);

const server = new InversifyExpressServer(container);
server.setConfig(inversifyApp  => inversifyApp.use(cors()))


server.build().listen(applicationPort);
console.log(`Server is ok, and is listening on port ${applicationPort}`);