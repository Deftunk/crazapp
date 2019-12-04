"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const spotify_service_1 = require("./services/spotify/spotify.service");
exports.appModule = new inversify_1.ContainerModule((bind) => {
    bind('SpotifyService')
        .to(spotify_service_1.SpotifyService)
        .inSingletonScope();
});
//# sourceMappingURL=index.js.map