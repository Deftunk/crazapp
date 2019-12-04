import { Response } from 'express';
import { SpotifyService } from '../../../../app/services/spotify';
export declare class SpotifyController {
    private spotifyService;
    constructor(spotifyService: SpotifyService);
    me(accessToken: string, res: Response): Promise<void>;
}
