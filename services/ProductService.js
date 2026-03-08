import Product from "../models/Product.js"
export default class ProductService {
constructor() {
  try {
    const stored = localStorage.getItem("products")
    this.products = stored ? JSON.parse(stored) : []
  } catch {
    this.products = []
  }
  this.id = this.products.length + 1
}
  save() {
    localStorage.setItem("products", JSON.stringify(this.products))
  }
  create(name, price, stock) {
    const product = new Product(this.id++, name, price, stock)
    this.products.push(product)
    this.save()
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
      this.save()
    }
    return product
  }
  delete(id) {
    this.products = this.products.filter(p => p.id !== id)
    this.save()
  }
}