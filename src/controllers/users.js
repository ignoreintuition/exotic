const { usersService } = require('../services');
const { getUsersService, postUsersService, putUsersService, deleteUsersService } = usersService;

const queryString = query => {
    const qs = Object.assign(
        { "_id": query["_id"] },
        { email: query.email },
        { fName: query.fName },
        { lName: query.lName }
    );
    return qs;
};

const getUsers = async (req, res, next) => {
    try {
        const users = await getUsersService(req.query);
        res.send(users);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

const postUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await postUsersService(qs);
        res.sendStatus(201);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

const putUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await putUsersService(qs);
        res.sendStatus(200);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

const deleteUsers = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await deleteUsersService(qs);
        res.sendStatus(200);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
};
