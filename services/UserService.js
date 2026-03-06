import User from "../models/User.js"
export default class UserService {
    constructor() {
        this.users = []
        this.id = 1
    }
    create(name, email) {
        const user = new User(this.id++, name, email)
        this.users.push(user)
        return user
    }
    getAll() {
        return this.users
    }
    getById(id) {
        return this.users.find(u => u.id === id)
    }
    delete(id) {
        this.users = this.users.filter(u => u.id !== id)
    }
}