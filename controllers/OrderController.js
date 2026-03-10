export default class OrderController {
    constructor(orderService, view) {
        this.orderService = orderService
        this.view = view
    }
    checkout(userId) {
        this.orderService.checkout(userId)
    }
    getOrders() {
        const orders = this.orderService.getOrders()
        this.view.printOrders(orders)
    }
}