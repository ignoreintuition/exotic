const { species } = require('../services');

const { speciesService } = species;

const getSpecies = async (req, res, next) => {
    try {
        const species = await speciesService(req.query);
        res.send(species)
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500)
    }
}

module.exports = {
    getSpecies
}
