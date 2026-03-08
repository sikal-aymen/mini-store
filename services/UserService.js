import User from "../models/User.js"
export default class UserService {
    constructor() {
        let stored = JSON.parse(localStorage.getItem("users"))
        this.users = stored || []
        this.id = this.users.length + 1
    }
    save() {
        localStorage.setItem("users", JSON.stringify(this.users))
    }
    create(name, email) {
        let user = new User(this.id++, name, email)
        this.users.push(user)
        this.save()
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
        this.save()
    }
}