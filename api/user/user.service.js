const users = require("../../data/user.json")

function getAllUsers() {
    return Promise.resolve(users);
}

function getUser(email, password) {
    let user = users.find(user => user.email === email)
    if(user && String(user.password) === password){
        console.log("valid")
    } else{
        console.log('no good pass')
        user = 'undifiend'
    }
    return Promise.resolve(user)
}

module.exports = {
    getAllUsers,
    getUser
};
