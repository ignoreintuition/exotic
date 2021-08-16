const { pets } = require('../models');
const { getPets, postPets, putPets, deletePets } = pets;

const getPetsService = async (query) => {
    try {
        return await getPets(query);
    } catch(e) {
        throw new Error(e.message);
    }
};
const postPetsService = async (query) => {
    try {
        return await postPets(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const putPetsService = async (query) => {
    try {
        return await putPets(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

const deletePetsService = async (query) => {
    try {
        return await deletePets(query);
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    getPetsService,
    postPetsService,
    putPetsService,
    deletePetsService
};

