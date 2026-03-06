import Product from "../models/product.js"
export default class ProductService {
  constructor() {
    this.products = []
    this.id = 1
  }
  create(name, price, stock) {
    const product = new Product(this.id++, name, price, stock)
    this.products.push(product)
    return product
  }
  getAll() {
    return this.products
  }
  getById(id) {
    return this.products.find(p => p.id === id)
  }
  updateStock(id, amount) {
    const product = this.getById(id)
    if (product) {
      product.stock += amount
    }
    return product
  }
  delete(id) {
    this.products = this.products.filter(p => p.id !== id)
  }
}