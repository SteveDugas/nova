import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getTransactions: {
              keyArgs: ['reviewer_name', 'recipient_name', 'statuses', 'page_size'],
              merge(existing = [], incoming) {
                return {...existing, ...incoming};
              }
            }
          }
        }
      }
    }),
});

export default client;
