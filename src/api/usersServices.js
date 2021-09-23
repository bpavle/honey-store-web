
import users from "../fake_db/users"
import orders from "../fake_db/orders"

export function getUsers() {
    return users
}

export function getUsersByRole(role) {
    return users.filter(user => user.role === role)
}

const getUserById = (id) => {
    return users.find(user => user.id === id)
}
const updateUser = (user) => {
    console.log("LOG FROM UPDATE")
    console.log("Updating user " + user)
    console.log(users)
    let newUsers = users.map(usr => usr.id === user.id ? user : usr)
    console.log(newUsers)
    users.splice(0)
    users.push(...newUsers)
    console.log(users)
    return true
}

const loginUser = (email, password) => {
    let loggedInUser;
    console.log(`Trying to login with \n email:${email} & password:${password}`);
    users.forEach(user => {
        if (email === user.email && password === user.password) {
            loggedInUser = user;

        }
    });
    loggedInUser ? console.log(`User logged in:\n ${loggedInUser.email}`) : console.error(`FAILED LOGGING IN`)
    return loggedInUser

}
const addUser = (user) => {
    console.log(`Trying to add user: ${user.email} to database`)
    if (users.find(usr => usr.email === user.email)) {
        console.log(`User with ${user.email} already exists`)
        return false;
    }
    else {
        let id = users.length + 2
        console.log(`User with ${user.email} added to database`)
        users.push({ id, ...user });
        console.log(users)
        return true;
    }
}

const createOrder = (order) => {
    orders.push(order)
    console.log(orders)
}
export { loginUser, addUser, updateUser, getUserById, createOrder }