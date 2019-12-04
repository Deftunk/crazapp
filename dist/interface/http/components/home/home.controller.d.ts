/// <reference types="request-promise" />
import { Response } from 'express';
export declare class HomeController {
    constructor();
    helloWorld(req: Request, res: Response): Promise<void>;
}
