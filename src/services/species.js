const { species } = require('../models')
const { speciesDb } = species;

const speciesService = async (query) => {
    try {
        return await speciesDb(query);
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    speciesService
}

