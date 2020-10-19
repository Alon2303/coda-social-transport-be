// const dbService = require("../../services/db.service");
const users = require("../../data/user.json")

// Functions that start with underscore (_) are functions that we use in this file only, not exported out.


function getAllUsers() {
    return Promise.resolve(users);
}

module.exports = {
    getAllUsers
};



// module.exports = {
//     getById,
// };

// async function getById(userId) {

// }

// function _privateFunctions() {
// }
