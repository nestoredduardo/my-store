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
      Number(limit),
      Number(offset),
    )

    console.log(products)

    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
})

export default router
