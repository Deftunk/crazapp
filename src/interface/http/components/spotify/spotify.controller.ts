
import { controller, httpGet, response, queryParam } from 'inversify-express-utils';
import { Response } from 'express';
import { SpotifyService } from '../../../../app/services/spotify';
import { inject } from 'inversify';


@controller('/spotify')
export class SpotifyController {
    constructor(@inject('SpotifyService') private spotifyService: SpotifyService) { }

    @httpGet('/me')
    public async me(@queryParam("access_token") accessToken: string, @response() res: Response) {
        const { spotifyService } = this;
        const result = accessToken
            ? await spotifyService.profile(accessToken)
            : new Error('Spotify access token is missing please provide it to connnect to spotify api.');
        res.write(JSON.stringify(result))
        res.send();
        res.end();
    }
}