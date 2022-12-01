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
5. Send a request to `http://127.0.0.1:3000/`
6. After "A resolver was called" appeared in the console, cancel the request
7. See the console after the cancellation - it shouldn't run resolvers that are going after the cancelled one
