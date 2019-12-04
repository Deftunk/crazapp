import { ContainerModule, interfaces } from 'inversify';

import { SpotifyService } from './services/spotify/spotify.service';

export const appModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<SpotifyService>('SpotifyService')
        .to(SpotifyService)
        .inSingletonScope();
});