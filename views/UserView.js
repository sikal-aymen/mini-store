export default class UserView {
    printUsers(users) {
        users.forEach(u => {
            console.log(`${u.id} | ${u.name} | ${u.email}`)
        })
    }
    printUserCreated(user) {
        console.log("User created:", user.name)
    }
    printUserDeleted(id) {
        console.log("User deleted:", id)
    }
    printUserError(msg) {
        console.log("User error:", msg)
    }
}