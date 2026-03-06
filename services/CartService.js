export default class CartService {
    constructor() {
        this.cart = []
    }
    addProduct(productId, quantity) {
        const item = this.cart.find(i => i.productId === productId)
        if (item) {
            item.quantity += quantity
        } else {
            this.cart.push({ productId, quantity })
        }
        return this.cart
    }
    removeProduct(productId) {
        this.cart = this.cart.filter(i => i.productId !== productId)
    }
    getCart() {
        return this.cart
    }
    clearCart() {
        this.cart = []
    }
}