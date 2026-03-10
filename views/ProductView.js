export default class ProductView {
    constructor(cartController) {
        this.cartController = cartController;
    }
    printProducts(products) {
        const container = document.getElementById("products");
        container.innerHTML = "<h2>Products</h2>";
        products.forEach((p) => {
            const div = document.createElement("div");
            div.innerHTML = `${p.id} | ${p.name} | $${p.price} | stock: ${p.stock}`;
            const btnCart = document.createElement("button");
            btnCart.textContent = "🛒 Add to cart";
            btnCart.addEventListener("click", () => {
                this.cartController.addProduct(p.id, 1);
                this.cartController.showCart();
            });
            const btn = document.createElement("button");
            btn.textContent = "Delete";
            btn.addEventListener("click", () => {
                this.controller.deleteProduct(p.id);
                this.controller.getProducts();
            });
            div.appendChild(btnCart);
            div.appendChild(btn);
            container.appendChild(div);
        });
    }
}
