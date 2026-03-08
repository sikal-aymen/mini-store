export default class CartService {
    constructor() {
        const stored = JSON.parse(localStorage.getItem("cart"))
        this.cart = stored || []
    }
    save() {
        localStorage.setItem("cart", JSON.stringify(this.cart))
    }
    addProduct(productId, quantity) {
        const item = this.cart.find(i => i.productId === productId)
        if (item) {
            item.quantity += quantity
        } else {
            this.cart.push({ productId, quantity })
        }
        this.save()
        return this.cart
    }
    removeProduct(productId) {
        this.cart = this.cart.filter(i => i.productId !== productId)
        this.save()
    }
    getCart() {
        return this.cart
    }
    clearCart() {
        this.cart = []
        this.save()
    }

}