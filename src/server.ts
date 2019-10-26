import express, { Request, Response, NextFunction } from 'express';
const application = express();
const applicationPort = 3000;

application.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.send('Hello world')
});

application.listen(applicationPort, function () {
    console.log('Example app listening on port 3000!')
});
