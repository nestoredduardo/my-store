// Libraries
import express from 'express'

// Types
import { Express } from 'express'

// Router
import productsRouter from '@/routes/products.router'
import usersRouter from '@/routes/users.router'

const routerApi = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
}

export default routerApi
