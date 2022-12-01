'use strict'

const Fastify = require('fastify')
const mercurius = require('../mercurius')

const app = Fastify({ logger: true })

const schema = `
  type Query {
    a: A!
  }
  
  type A {
    name: String!
    b: B!
  }
  
  type B {
    name: String!
    c: C!
  }
  
  type C {
    name: String!
  }
`

const sleep = (seconds) => { return new Promise((resolve) => { setTimeout(() => { resolve(); }, seconds * 1000); }); }

const resolvers = {
  Query: {
    a: async () => {
      await sleep(2);
      console.log('A resolver was called');
      return { name: 'a name' }
    }
  },
  A: {
    b: async () => {
      await sleep(2);
      console.log('B resolver was called');
      return { name: 'b name' }
    }
  },
  B: {
    c: async () => {
      await sleep(2);
      console.log('C resolver was called');
      return { name: 'c name' }
    }
  }
}

app.register(mercurius, {
  schema,
  resolvers,
})

app.post('/', async function (req, reply) {
  const query = '{ a { name, b { name, c { name } } } }'
  return reply.graphql(query)
})

app.listen({ port: 3000 })
