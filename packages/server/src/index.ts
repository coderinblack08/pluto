import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { client_url, cookie_name, port, __prod__ } from './constants';
import { AnnouncementResolver } from './resolvers/AnnouncementResolver';
import { CommunityResolver } from './resolvers/CommunityResolver';
import { HelloResolver } from './resolvers/HelloResolver';
import { PostResolver } from './resolvers/PostResolver';
import { UserResolver } from './resolvers/UserResolver';

(async () => {
  await createConnection();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    cors({
      origin: client_url,
      credentials: true,
    })
  );

  app.use(
    session({
      name: cookie_name,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: __prod__,
        sameSite: 'lax',
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET!,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PostResolver,
        HelloResolver,
        UserResolver,
        CommunityResolver,
        AnnouncementResolver,
      ],
      validate: false,
    }),
    // extensions: [() => new BasicLogging()],
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_req, res) => res.redirect('/graphql'));

  app.listen(port, () =>
    console.log(`Graphql server listening on port ${port}`)
  );
})().catch((err) => console.log(err));
