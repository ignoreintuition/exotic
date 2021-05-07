const { users } = require('../models');
const { getUsers, postUsers, putUsers } = users;

const getUsersService = async (query) => {
    try {
        return await getUsers(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const postUsersService = async (config) => {
    try {
        return await postUsers(config);
    } catch(e) {
        throw new Error(e.message);
    }
};

const putUsersService = async (query) => {
    try {
        return await putUsers(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const deleteUsersService = async (query) => {
    try {
        console.log('delete users');
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getUsersService,
    postUsersService,
    putUsersService,
    deleteUsersService
};

