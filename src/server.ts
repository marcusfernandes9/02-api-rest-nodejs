import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from './env'
import { transacitonsRoutes } from './routes/transactions'

const app = fastify()
app.register(cookie)
app.register(transacitonsRoutes, {
  prefix: 'transactions',
})
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })