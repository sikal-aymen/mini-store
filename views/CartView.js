export default class CartView {
    printCart(cart) {
        cart.forEach(i => {
            console.log(`Product ${i.productId} x${i.quantity}`)
        })
    }
    printCartCleared() {
        console.log("Cart cleared")
    }
    printCartError(msg) {
        console.log("Cart error:", msg)
    }
}