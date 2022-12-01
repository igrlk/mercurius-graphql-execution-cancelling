## Intro
This is an example of graphql api that's using `mercurius` & `graphql-js` that support execution cancelling

### Other PRs:
[graphql-js - Allow execution to be cancelled](https://github.com/graphql/graphql-js/pull/3791)

[mercurius - POC for execution cancelling](https://github.com/igrlk/mercurius/pull/1)

### How to run
Please follow these steps:
1. Close mercurius fork repo where execution cancelling is implemented and checkout to the feature branch: https://github.com/igrlk/mercurius/tree/abort-execution
2. In `./index.js`, update the mercurius path to point to the cloned fork (e.g. `require('../mercurius')`)
3. `yarn`
4. `yarn start`
5. Send requests to `http://127.0.0.1:3000/graphql` with the following query: `{"query":"{a { name, b { name, c { name } }  } }"}`
   6. Cancel the request
   7. See the console output of the server - it shouldn't run resolvers that are going after the cancelled one
