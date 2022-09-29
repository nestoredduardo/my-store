// Libraries
import express from 'express'
import boom from '@hapi/boom'

// Services
import { ProductsService } from '@/services/product.service'

const router = express.Router()

const productsService = ProductsService.start()

router.get('/', async (req, res, next) => {
  try {
    const { limit, offset } = req.query

    const { data: products } = await productsService.find(
      Number(limit) || 10,
      Number(offset) || 0,
    )

    res.status(200).json(products)
  } catch (error) {
    throw boom.notFound('Products not found')
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const { data: product } = await productsService.findOne(Number(id))

    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body

    const { data: product } = await productsService.update(Number(id), changes)

    res.status(200).json(product)
  } catch (error) {
    throw boom.badImplementation('Error updating product')
  }
})

export default router
