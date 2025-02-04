// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });
  

export default client;
