const { pets } = require('../models')
const { getPets } = pets;

const getPetsService = async (query) => {
    try {
        return await getPets(query);
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getPetsService
}

