import 'dotenv/config';
import 'reflect-metadata';
import Redis from 'ioredis';
import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { HelloResolver } from './resolvers/HelloResolver';
import { buildSchema } from 'type-graphql';
import { client_url, cookie_name, port, __prod__ } from './constants';
import { UserResolver } from './resolvers/UserResolver';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { CommunityResolver } from './resolvers/CommunityResolver';

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
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, CommunityResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_req, res) => res.redirect('/graphql'));

  app.listen(port, () =>
    console.log(`Graphql server listening on port ${port}`)
  );
})().catch((err) => console.log(err));
