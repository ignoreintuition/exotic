const { speciesService } = require('../services');
const { ObjectId } = require('mongodb');
const { getSpeciesService, postSpeciesService, putSpeciesService, deleteSpeciesService } = speciesService;
const { toArray } = require('../utils');

const queryString = query => {
    const qs = {};
    for (const nvp in query) {
        if (nvp === "_id") {
            qs._id = new ObjectId(query[nvp]);
        }
        else if (['class', 'subfamily', 'species', 'skin', 'diet', 'circadianRhythm'].indexOf(nvp) >= 0)
            qs[nvp] = toArray(query[nvp]);
    }
    return qs;
};

const getSpecies = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        const species = await getSpeciesService(qs);
        res.send(species);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const postSpecies = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await postSpeciesService(qs);
        res.sendStatus(201);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const putSpecies = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await putSpeciesService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

const deleteSpecies = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await deleteSpeciesService(qs);
        res.sendStatus(200);
    } catch(e) {
        throw new Error(e.message);
        res.sendStatus(500);
    }
};

module.exports = {
    getSpecies,
    postSpecies,
    putSpecies,
    deleteSpecies
};
