import { controller, httpGet, request, response } from 'inversify-express-utils';
import Request from 'request-promise'
import { Response } from 'express';

@controller('/home')
export class HomeController {
    constructor() {

    }

    @httpGet('/')
    public async helloWorld(@request() req: Request, @response() res: Response) {
        const payload = { helloworld: "Hello world :). This api use inversify and is typescript developped" }
        res.write(JSON.stringify(payload))
        res.send();
        res.end();
    }
}