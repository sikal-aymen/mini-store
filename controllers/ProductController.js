export default class ProductController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }
    createProduct(name, price, stock) {
        const product = this.service.create(name, price, stock)
    }
    getProducts() {
        const products = this.service.getAll()
        this.view.printProducts(products)
    }
    deleteProduct(id) {
        this.service.delete(id)
    }
}