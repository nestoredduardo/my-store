import { Category } from './categories'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

export interface UpdateProductDTO extends Omit<Partial<Product>, 'id'> {}
