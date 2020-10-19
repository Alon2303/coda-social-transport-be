const userService = require("./user.service");


async function getAllUsersData(req, res) {
    const users = await userService.getAllUsers(req.query);
    res.send(users);
}

async function getUserByEmail(req, res) {
    console.log("controller - req.body", req.body)
    const { email, password } = req.body;
    const user = await userService.getUser(email, password);
    res.send(user);
}

module.exports = {
    getAllUsersData,
    getUserByEmail
};

// async function getUser(req, res) {
// }
// module.exports = {
//     getUser
// };
