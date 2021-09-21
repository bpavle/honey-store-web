
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

export { loginUser }