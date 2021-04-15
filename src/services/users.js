const { users } = require('../models')
const { getUsers, postUsers } = users;

const usersService = async (query) => {
    try {
        return await getUsers(query);
    } catch(e) {
        throw new Error(e.message);
    }
}
const usersServiceCreate = async (config) => {
    try {
        return await postUsers(config);
    } catch(e) {
        throw new Error(e.message);
    }
}
module.exports = {
    usersService,
    usersServiceCreate
}

