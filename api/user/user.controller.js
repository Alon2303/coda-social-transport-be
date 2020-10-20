const userService = require("./user.service");


async function getAllUsersData(req, res) {
    const users = await userService.getAllUsers(req.query);
    res.send(users);
}

async function getUserByEmail(req, res) {
    const { email, password } = req.body;
    const user = await userService.getUser(email, password);
    console.log("user", user)
    res.send(user);
}

module.exports = {
    getAllUsersData,
    getUserByEmail
};
