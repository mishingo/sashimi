const {ApolloClient} = require('apollo-client');
const {HttpLink} = require('apollo-link-http');
const {setContext} = require("apollo-link-context");
const {InMemoryCache} = require("apollo-cache-inmemory");
const gql = require('graphql-tag');
const fetch = require('node-fetch');

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

const httpLink = new HttpLink({
  uri: "https://xyabwrrxxk.execute-api.us-east-1.amazonaws.com/stage",
  fetch: fetch
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      "x-api-key": "mX63Tp1jp4M3ExJyHutMqn3D7W9aN28lsJxWlV50"
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


exports.handler = (event, context, callback) => {
    client.query({
        query: gql `
        {
        posts(number: 10, size: 10){
            data{
            attributes{
                promoTitle
                longDescription
            }
            relationships{
                media{
                data{
                    attributes {
                    usage
                    }
                    relationships{
                    image{
                        data {
                        attributes {
                            path
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
        }
    `,
    })
    .then(function (response) {
        callback(null, {
            statusCode,
            headers,
            body: JSON.stringify(response)
        });
        console.log(JSON.stringify(response, null, 2));
    })
    .catch(function (error) {
        console.log(error);
    })
  };