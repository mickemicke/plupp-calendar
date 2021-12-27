import { ApolloServer } from 'apollo-server';
import { connect } from 'mongoose';
import { ActivityResolver } from './resolvers/activity';
import { typedefs } from './schema';

const uri = 'mongodb://localhost:4444';

async function startApolloServer(typeDefs: any, resolvers: any) {
  try {
    const db = await connect(uri, {
      dbName: 'plupp-calendar',
      auth: { username: 'plupp-admin', password: 'gott-mos' },
    });

    if (db) {
      const server = new ApolloServer({ typeDefs, resolvers });
      const { url } = await server.listen();
      console.log(`🚀 Server ready at ${url}`);
    } else {
      throw "can't connect to db";
    }
  } catch (error) {
    console.log('error starting server', error);
  }
}

startApolloServer(typedefs, ActivityResolver);
