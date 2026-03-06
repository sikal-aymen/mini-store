export default class Order {
    constructor(id, userId, products, total) {
        this.id = id
        this.userId = userId
        this.products = products
        this.total = total
    }
}