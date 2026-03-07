export default class ProductView {
    printProducts(products) {
        products.forEach(p => {
            console.log(`${p.id} | ${p.name} | $${p.price} | stock: ${p.stock}`)
        })
    }
    printProductCreated(product) {
        console.log("Product created:", product.name)
    }
    printProductDeleted(id) {
        console.log("Product deleted:", id)
    }
    printProductError(message) {
        console.log("Product error:", message)
    }
}