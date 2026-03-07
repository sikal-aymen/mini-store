export default class OrderView {
    printOrders(orders) {
        orders.forEach(o => {
            console.log(`Order #${o.id} | User: ${o.userId} | Total: $${o.total}`)
        })
    }
    printOrderSuccess(order) {
        console.log("Order created:", order.id)
    }
    printOrderError(msg) {
        console.log("Order error:", msg)
    }
}