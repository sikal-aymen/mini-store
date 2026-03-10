import Order from "../models/Order.js"
export default class OrderService {
    constructor(cartService, productService) {
        const stored = JSON.parse(localStorage.getItem("orders"))
        this.orders = stored || []
        this.id = this.orders.length + 1
        this.cartService = cartService
        this.productService = productService
    }
    save() {
        localStorage.setItem("orders", JSON.stringify(this.orders))
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
                throw new Error("Stock problem")
            }
            total += product.price * item.quantity;
            
            product.stock -= item.quantity
            products.push(item)
        }
        const order = new Order(this.id++, userId, products, total)
        this.orders.push(order)
        this.save()
        this.cartService.clearCart()
        return order
    }
    getOrders() {
        return this.orders
    }
}