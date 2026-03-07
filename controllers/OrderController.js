export default class OrderController {
    constructor(orderService, view) {
        this.orderService = orderService
        this.view = view
    }
    checkout(userId) {
        try {
            const order = this.orderService.checkout(userId)
            this.view.printOrderSuccess(order)
        } catch (e) {
            this.view.printOrderError(e.message)
        }
    }
    getOrders() {
        const orders = this.orderService.getOrders()
        this.view.printOrders(orders)
    }
}