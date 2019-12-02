import { controller, request, response, httpPost } from 'inversify-express-utils';
import { Response } from 'express';

@controller('/user')
export class UserController {
    constructor() {

    }

    @httpPost('/login')
    public async login(@request() req: Request, @response() res: Response) {        
        const payload = { login: "Route under construction. Please retry soon to login :)" }
        res.write(JSON.stringify(payload))
        res.send();
        res.end();
    }

    @httpPost('/logout')
    public async logout(@request() req: Request, @response() res: Response) {        
        const payload = { login: "Route under construction. Please retry soon to logout :)" }
        res.write(JSON.stringify(payload))
        res.send();
        res.end();
    }    
} 