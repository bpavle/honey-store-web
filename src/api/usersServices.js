
import users from "../fake_db/users"


export function getUsers() {
    return users
}

export function getUsersByRole(role) {
    return users.filter(user => user.role === role)
}


const loginUser = (email, password) => {
    let loggedInUser;
    console.log(`Passed email:${email}, password:${password}`);
    users.forEach(user => {
        console.log(user.email, user.password);
        if (email === user.email && password === user.password) {
            console.log(user)
            loggedInUser = user;

        }
    });
    return loggedInUser

}
const addUser = (user) => {
    console.log(`Trying to add user: ${user}`)
    if (users.find(usr => usr.email === user.email)) {
        console.log(`User with ${user.email} already exists`)
        return false;
    }
    else {
        console.log(`User with ${user.email} added to database`)
        users.push(user);
        return true;
    }
}
export { loginUser, addUser }