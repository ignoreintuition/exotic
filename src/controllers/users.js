const { usersService } = require('../services');
const { ObjectId } = require('mongodb');
const { getUsersService, postUsersService, putUsersService, deleteUsersService } = usersService;

const queryString = query => {
    const qs = {};
    for (const nvp in query) {
        if (nvp === "_id") {
            qs._id = new ObjectId(query[nvp]);
        }
        else if (['email', 'fName', 'lName'].indexOf(nvp) >= 0)
            qs[nvp] = query[nvp];
    }
    return qs;
};

const getUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        const users = await getUsersService(qs);
        res.send(users);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const postUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await postUsersService(qs);
        res.sendStatus(201);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const putUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await putUsersService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const deleteUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await deleteUsersService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
};
