import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { HelloResolver } from './resolvers/HelloResolver';
import { buildSchema } from 'type-graphql';
import { port } from './constants';

(async () => {
  await createConnection();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_req, res) => res.redirect('/graphql'));

  app.listen(port, () =>
    console.log(`Graphql server listening on port ${port}`)
  );
})().catch((err) => console.log(err));
