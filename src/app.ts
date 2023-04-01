import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'
import cookies from '@fastify/cookie'

const app = fastify()

app.register(cookies)

app.register(transactionRoutes, {
  prefix: 'transactions',
})

export default app
