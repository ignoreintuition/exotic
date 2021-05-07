const { speciesService } = require('../services');
const { getSpeciesService, postSpeciesService, putSpeciesService } = speciesService;
const { toArray } = require('../utils');

const queryString = query => {
    const qs = Object.assign(
        { '_id': query['_id'] ? query['_id'] : '' },
        { class: query.class ? query.class : '' },
        { subfamily: query.subfamily ? query.subfamily : '' },
        { species: query.species ? query.species : '' },
        { skin: query.skin ? query.skin : '' },
        { diet: query.diet ? toArray(query.diet) : '' },
        { circadianRhythm: query.circadianRhythm ? toArray(query.circadianRhythm) : [] },
        { lifespan: query.lifespan ? query.lifespan : ''},
        { size: query.size ? query.size : '' },
        { weight: query.weight ? query.weight : []},
        { gestationPeriod: query.gestationPeriod }
    );
    return qs;
};

const getSpecies = async (req, res, next) => {
    try {
        const species = await getSpeciesService(req.query);
        res.send(species);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

const postSpecies = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await postSpeciesService(qs);
        res.sendStatus(201);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

const putSpecies = async (req, res, next) => {
    try {
        const qs = await queryString(req.body);
        await putSpeciesService(qs);
        res.sendStatus(200);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};
module.exports = {
    getSpecies,
    postSpecies,
    putSpecies
};
