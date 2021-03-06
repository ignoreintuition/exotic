const { petsService } = require('../services');

const { getPetsService, postPetsService, putPetsService, deletePetsService} = petsService;

const getPets = async (req, res, next) => {
    try {
        const pets = await getPetsService(req.query);
        res.send(pets);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const postPets = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await postPetsService(qs);
        res.sendStatus(201);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const putPets = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await putPetsService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const deletePets = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await deletePetsService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};


module.exports = {
    getPets,
    postPets,
    putPets,
    deletePets
};
