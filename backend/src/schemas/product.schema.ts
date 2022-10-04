import Joi from 'joi'

import { CreateProductDTO, UpdateProductDTO } from '@/types/products'

const id = Joi.string().guid({ version: 'uuidv4' })
const title = Joi.string().min(3).max(30).required()
const price = Joi.number().min(10).required()
const description = Joi.string().min(10).max(255).required()
const categoryId = Joi.string().guid({ version: 'uuidv4' })
const images = Joi.array().items(Joi.string().uri())

const createProductSchema = Joi.object<CreateProductDTO>({
  title,
  price,
  description,
  categoryId,
  images,
})

const updateProductSchema = Joi.object<UpdateProductDTO>({
  title,
  price,
  description,
  categoryId,
  images,
})

const getProductSchema = Joi.object({
  id: id.required(),
})

export { createProductSchema, updateProductSchema, getProductSchema }
