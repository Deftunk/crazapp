"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
let SpotifyService = class SpotifyService {
    constructor() {
        this.spotifyWebApi = new spotify_web_api_node_1.default({
            clientId: '1c4494f612a54227b2bdbb018bb00d66',
            clientSecret: 'df6fadd6f01f45e48d854c4733653064',
            redirectUri: "http://localhost:3000"
        });
    }
    //Must type return type  
    profile(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const { spotifyWebApi } = this;
            spotifyWebApi.setAccessToken(accessToken);
            return yield spotifyWebApi.getMe();
        });
    }
};
SpotifyService = __decorate([
    inversify_1.injectable()
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map