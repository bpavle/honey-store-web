
import users from "../fake_db/users"


export function getUsers() {
    return users
}

export function getUsersByRole(role) {
    return users.filter(user => user.role == role)
}