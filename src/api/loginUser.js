import users from "../fake_db/users"
const loginUser = (email, password) => {
    let loggedInUser;
    console.log(`Passed email:${email}, password:${password}`);
    users.forEach(user => {
        console.log(user.email, user.password);
        if (email == user.email && password == user.password) {
            console.log(user)
            loggedInUser = user;

        }
    });
    return loggedInUser

}

export default loginUser