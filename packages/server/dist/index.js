"use strict";
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
const apollo_server_express_1 = require("apollo-server-express");
const connect_redis_1 = __importDefault(require("connect-redis"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const AnnouncementResolver_1 = require("./resolvers/AnnouncementResolver");
const CommunityResolver_1 = require("./resolvers/CommunityResolver");
const HelloResolver_1 = require("./resolvers/HelloResolver");
const PostResolver_1 = require("./resolvers/PostResolver");
const UserResolver_1 = require("./resolvers/UserResolver");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection();
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redis = new ioredis_1.default();
    app.use(cors_1.default({
        origin: constants_1.client_url,
        credentials: true,
    }));
    app.use(express_session_1.default({
        name: constants_1.cookie_name,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            secure: constants_1.__prod__,
            sameSite: 'lax',
        },
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [
                PostResolver_1.PostResolver,
                HelloResolver_1.HelloResolver,
                UserResolver_1.UserResolver,
                CommunityResolver_1.CommunityResolver,
                AnnouncementResolver_1.AnnouncementResolver,
            ],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, redis }),
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.get('/', (_req, res) => res.redirect('/graphql'));
    app.listen(constants_1.port, () => console.log(`Graphql server listening on port ${constants_1.port}`));
}))().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map