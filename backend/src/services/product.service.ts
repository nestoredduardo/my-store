// Libraries
import axios from 'axios'

// Types
import { Product, UpdateProductDTO } from '@/types/products'

export class ProductsService {
  private url: string
  static instance: ProductsService | null = null

  constructor() {
    this.url = process.env.API_URL || 'https://api.escuelajs.co/api/v1'
  }

  static start() {
    if (!this.instance) {
      this.instance = new ProductsService()
    }

    console.log('Creating a new instance of ProductsService')

    return this.instance
  }

  async find(limit: number, offset: number) {
    return axios.get<Array<Product>>(
      `${this.url}/products?limit=${limit}&offset=${offset}`,
    )
  }

  async findOne(id: Product['id']) {
    return axios.get<Product>(`${this.url}/products/${id}`)
  }

  async update(id: Product['id'], changes: UpdateProductDTO) {
    return axios.put<Product>(`${this.url}/products/${id}`, changes)
  }

  delete() {}
}
