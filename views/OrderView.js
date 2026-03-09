export default class OrderView {
    printOrders(orders) {
        const container = document.getElementById("orders")
        container.innerHTML = "<h2>Orders</h2>"
        orders.forEach(o => {
            const div = document.createElement("div")
            div.textContent = `Order #${o.id} | User: ${o.userId} | Total: $${o.total}`
            container.appendChild(div)
        })
    }
}