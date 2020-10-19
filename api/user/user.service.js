// const dbService = require("../../services/db.service");
const users = require("../../data/user.json")

// Functions that start with underscore (_) are functions that we use in this file only, not exported out.

function getAllUsers() {
    return Promise.resolve(users);
}

function getUser(email, password) {
    console.log("email", email)
    console.log("pass", password)
    console.log("inside servivce ")
    const user = users.find(user => user.email === email)
    return Promise.resolve(user)
}


// router.post('/', async (req, res, next) => {
//     const {email , password} = req.body;
//     if(!email || !password) {
//         res.send('Email or password are required');
//         return;
//     }else{
//         try{
//             let cryptPassword = crypto.pbkdf2Sync(password, 'realtorrocks', 100000, 64, 'sha512'); 
//             const passwordHashed = cryptPassword.toString('base64');
//             const user = await login.checkLogin(email, passwordHashed);
//             res.cookie('auth', JSON.stringify(user), {maxAge: 1000* 60* 60* 24* 7});
//             res.status(200).json(user);
//         }catch(error){
//             res.status(401).json({status: 401, error: 'Invalid email or password'});
//         }
//     }
// });



module.exports = {
    getAllUsers,
    getUser
};



// module.exports = {
//     getById,
// };

// async function getById(userId) {

// }

// function _privateFunctions() {
// }
