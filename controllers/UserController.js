export default class UserController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }
    createUser(name, email) {
        const user = this.service.create(name, email)
        this.view.printUserCreated(user)
    }
    getUsers() {
        const users = this.service.getAll()
        this.view.printUsers(users)
    }
}