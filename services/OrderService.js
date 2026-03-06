import Order from "../models/Order.js"
export default class OrderService {
    constructor(cartService, productService) {
        this.orders = []
        this.id = 1
        this.cartService = cartService
        this.productService = productService
    }
    checkout(userId) {
        const cart = this.cartService.getCart()
        if (cart.length === 0) {
            throw new Error("Cart is empty")
        }
        let total = 0
        const products = []
        for (const item of cart) {
            const product = this.productService.getById(item.productId)
            if (!product || product.stock < item.quantity) {
                throw new Error("Product stock error")
            }
            total += product.price * item.quantity
            product.stock -= item.quantity
            products.push({
                productId: product.id,
                quantity: item.quantity
            })
        }
        const order = new Order(this.id++, userId, products, total)
        this.orders.push(order)
        this.cartService.clearCart()
        return order
    }
    getOrders() {
        return this.orders
    }
}