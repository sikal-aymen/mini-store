export default class ProductView {
    constructor(controller){
        this.controller = controller
    }
    printProducts(products){
        const container = document.getElementById("products")
        container.innerHTML = "<h2>Products</h2>"
        products.forEach(p => {
            const div = document.createElement("div")
            div.innerHTML = `
            ${p.id} | ${p.name} | $${p.price} | stock: ${p.stock}
            `
            const btn = document.createElement("button")
            btn.textContent = "Delete"
            btn.addEventListener("click", () => {
                this.controller.deleteProduct(p.id)
                this.controller.getProducts()
            })
            div.appendChild(btn)
            container.appendChild(div)
        })
    }
}