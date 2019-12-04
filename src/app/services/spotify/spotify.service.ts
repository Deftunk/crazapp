import { injectable } from "inversify";
import SpotifyWebApi from "spotify-web-api-node";



@injectable()
export class SpotifyService {
    constructor() {
        this.spotifyWebApi = new SpotifyWebApi({
            clientId: '1c4494f612a54227b2bdbb018bb00d66',
            clientSecret: 'df6fadd6f01f45e48d854c4733653064',
            redirectUri: "http://localhost:3000"
        });
    }

    private spotifyWebApi: SpotifyWebApi;

    //Must type return type  
    public async profile(accessToken: string): Promise<any> {
        const { spotifyWebApi } = this;
        spotifyWebApi.setAccessToken(accessToken);
        return await spotifyWebApi.getMe();
    }
}