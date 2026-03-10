export default class UserService {
    constructor(){
        this.users =
        JSON.parse(localStorage.getItem("users")) || []
    }
    save(){
        localStorage.setItem(
            "users",
            JSON.stringify(this.users)
        )
    }
    create(name,email){
        const user = {
            id: this.users.length + 1,
            name,
            email
        }
        this.users.push(user)
        this.save()
        return user
    }
    getAll(){
        return this.users
    }
    delete(id){
        this.users =
        this.users.filter(u => u.id !== id)
        this.save()
    }
}