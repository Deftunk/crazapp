import { Response } from 'express';
export declare class UserController {
    constructor();
    login(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
}
