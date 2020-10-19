const userService = require("./user.service");


async function getAllUsersData(req, res) {
    const users = await userService.getAllUsers(req.query);
    res.send(users);
}

module.exports = {
    getAllUsersData
};

// async function getUser(req, res) {
// }
// module.exports = {
//     getUser
// };
