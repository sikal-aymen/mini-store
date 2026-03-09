export default class UserController {
    constructor(service, view) {
        this.service = service
        this.view = view
    }
    createUser(name, email) {
        const user = this.service.create(name, email)
    }deleteUser(id){
    this.service.delete(id)
    this.view.printUserDeleted(id)
}
deleteUser(id){
    this.service.delete(id)
    this.getUsers()
}
    getUsers() {
        const users = this.service.getAll()
        this.view.printUsers(users)
    }
}
