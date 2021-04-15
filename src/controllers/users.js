const { users } = require('../services');

const { usersService, usersServiceCreate } = users;

const getUsers = async (req, res, next) => {
    try {
        const users = await usersService(req.query);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const postUsers = async (req, res, next) => {
    const {email, fName, lName} = req.body;
    try {
        await usersServiceCreate({email, fName, lName})
        res.sendStatus(201);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    getUsers,
    postUsers
}
