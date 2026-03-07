export default class CartController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }
    addProduct(id, qty) {
        this.service.addProduct(id, qty)
    }
    removeProduct(id) {
        this.service.removeProduct(id)
    }
    showCart() {
        const cart = this.service.getCart()
        this.view.printCart(cart)
    }
}