// Libraries
import express from 'express'

// Services
import { ProductsService } from '@/services/product.service'

const router = express.Router()

const productsService = ProductsService.start()

router.get('/', async (req, res) => {
  try {
    const { limit, offset } = req.query

    const { data: products } = await productsService.find(
      Number(limit) || 10,
      Number(offset) || 0,
    )

    res.status(200).json(products)
  } catch (error) {
    console.log('Get Products Error: ', error)

    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
})

export default router
