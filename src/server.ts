import "reflect-metadata";
import { Container } from 'inversify';
var cors = require('cors');
import { InversifyExpressServer } from 'inversify-express-utils';
import { UserController, HomeController, SpotifyController } from './interface/http/components';
import { appModule } from './app'
const applicationPort = 3001;
const container = new Container();

container.load(appModule);

container.bind(HomeController);
container.bind(UserController);
container.bind(SpotifyController);

const server = new InversifyExpressServer(container);
server.setConfig(inversifyApp => inversifyApp.use(cors()))


server.build().listen(applicationPort);
console.log(`Server is ok, and is listening on port ${applicationPort}`);