import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'
import cookies from '@fastify/cookie'

const app = fastify()

app.register(cookies)

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
