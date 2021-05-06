const { species } = require('../models')
const { getSpecies, postSpecies, putSpecies } = species;

const getSpeciesService = async (query) => {
    try {
        return await getSpecies(query);
    } catch(e) {
        throw new Error(e.message);
    }
}

const postSpeciesService = async (query) => {
    try {
        return await postSpecies(query);
    } catch(e) {
        throw new Error(e.message);
    }
}

const putSpeciesService = async (query) => {
    try {
        return await putSpecies(query);
    } catch(e) {
        throw new Error(e.message);
    }
}

module.exports = {
    getSpeciesService,
    postSpeciesService,
    putSpeciesService
}

