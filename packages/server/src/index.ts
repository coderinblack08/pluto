import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { port } from './constants';
import { HelloResolver } from './resolvers/HelloResolver';

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_, res) => res.redirect('/graphql'));

  app.listen(port, () => console.log(`Listening on port ${port}`));
};

main().catch((err) => console.error(err));
