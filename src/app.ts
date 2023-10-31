import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transacitonsRoutes } from './routes/transactions'

export const app = fastify()
app.register(cookie)
app.register(transacitonsRoutes, {
  prefix: 'transactions',
})
