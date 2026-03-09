export default class CartView {
    printCart(cart) {
        const container = document.getElementById("cart")
        container.innerHTML = "<h2>Cart</h2>"
        cart.forEach(i => {
            const div = document.createElement("div")
            div.textContent = `Product ${i.productId} x${i.quantity}`
            container.appendChild(div)
        })
    }
}