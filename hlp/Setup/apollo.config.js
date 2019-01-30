import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://117e73c8.ngrok.io' }),
  cache: new InMemoryCache()
});
