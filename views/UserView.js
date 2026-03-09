export default class UserView {
    constructor(controller){
        this.controller = controller
    }
    printUsers(users){
        const container = document.getElementById("users")
        container.innerHTML = "<h2>Users</h2>"
        users.forEach(u => {
            const div = document.createElement("div")
            div.innerHTML = `
            ${u.id} | ${u.name} | ${u.email}
            `
            const btn = document.createElement("button")
            btn.textContent = "Delete"
            btn.addEventListener("click", () => {
                this.controller.deleteUser(u.id)
                this.controller.getUsers()
            })
            div.appendChild(btn)
            container.appendChild(div)
        })
    }
}